#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus
import os
import pathlib
import pickle
import traceback
from datetime import date

from core import dbengine, tableschema
from sqlalchemy import inspect, Table
from sqlalchemy.schema import MetaData,CreateTable
from jinja2 import Environment, FileSystemLoader
import simplejson as json
from config.config import config
from core.arangobase import capbase
from core.dbconfig import configindb
from core.metastore import Metastore
from core.pagedef import Pagedef
from core.tableschema import TableSchema
from util import toolkit
from util.log import log as log
import pickle
import base64
import uuid

# cache file define
metadata_pickle_filename = configindb.Schema_Config['schema_cache_filename']
cache_path = os.path.join(os.path.expanduser("~"), ".capricornus_cache")

def singleton(class_):
    instances = {}

    def getinstance(*args, **kwargs):
        if class_ not in instances:
            instances[class_] = class_(*args, **kwargs)
        return instances[class_]
    return getinstance

@singleton
class DBMeta(object):
    def __init__(self):
        self.use_schema = configindb.Database_Config['db_use_schema']
        self._schema = configindb.Database_Config['db_schema']
        self._tableCount = 0
        self._tables = 'N/A'
        self._viewCount = 0
        self._metadata = None
        self.load_metadata()
        if configindb.Application_Config['app_force_generate_meta']:
            log.debug('Generate Schema file from database ...')
            self.gen_schema()
        else:
            if os.path.exists(self.schema_file):
                log.debug('Schema file exists, you can load it to application ...')
            else:
                log.debug('Schema file does not exists, generate it from database ...')
                self.gen_schema()
        self.load_schema()
        self.gen_dbdirgramcanvas()
        self.gen_ddl()

    @property
    def schema(self):
        return self._schema

    @schema.setter
    def schema(self, value):
        self._schema = value

    @property
    def tablecount(self):
        return self._tableCount

    @property
    def tables(self):
        return self._tables

    @property
    def viewcount(self):
        return self._viewCount

    @property
    def metadata(self):
        if self._metadata is not None:
            return self._metadata
        else:
            return None

    def load_metadata(self):
        engine = dbengine.DBEngine().connect()
        cached_metadata = None
        if configindb.Schema_Config['schema_cache_enabled']:
            if os.path.exists(os.path.join(cache_path, metadata_pickle_filename)):
                try:
                    with open(os.path.join(cache_path, metadata_pickle_filename), 'rb') as cache_file:
                        cached_metadata = pickle.load(file=cache_file)
                        log.debug('Metadata cache exists, load meta from cache '
                                         'file [ %s ]' % os.path.join(cache_path, metadata_pickle_filename))
                except IOError:
                    # cache file not found - no problem, reflect as usual
                    log.debug('Metadata cache does not exists, will generate it from database ...')
            if cached_metadata:
                cached_metadata.bind = engine
                self._metadata = cached_metadata
            else:
                metadata = MetaData(bind=engine)
                if self.use_schema:
                    metadata = MetaData(bind=engine, schema=self._schema)
                if configindb.Schema_Config['schema_fetch_all_table'] == True:
                    metadata.reflect(views=True)
                else:
                    metadata.reflect(views=True, only=toolkit.to_list(configindb.Schema_Config['schema_fetch_tables']))
                self._metadata = metadata
                try:
                    if not os.path.exists(cache_path):
                        os.makedirs(cache_path)
                    with open(os.path.join(cache_path, metadata_pickle_filename), 'wb') as cache_file:
                        pickle.dump(metadata, cache_file)
                        log.debug('Metadata cache save to '
                                         '[ %s ] ' % os.path.join(cache_path, metadata_pickle_filename))
                except:
                    # couldn't write the file for some reason
                    log.debug('Metadata save Error '
                                     '[ %s ] ' % os.path.join(cache_path, metadata_pickle_filename))
        else:
            metadata = MetaData(bind=engine)
            if self.use_schema:
                metadata = MetaData(bind=engine, schema=self._schema)
            if configindb.Schema_Config['schema_fetch_all_table'] == True:
                metadata.reflect(views=True)
            else:
                metadata.reflect(views=True, only=toolkit.to_list(configindb.Schema_Config['schema_fetch_tables']))
            self._metadata = metadata

    def gen_schema(self):
        engine = dbengine.DBEngine().connect()
        inspector = inspect(engine)
        metadata = self.metadata
        log.info('Init datastore ....')
        if not capbase.has_collection(Metastore):
            capbase.create_collection(Metastore)
        if not capbase.has_collection(Pagedef):
            capbase.create_collection(Pagedef)
        try:
            if metadata is not None:
                log.debug("Generate Schema from : [ %s ] with db schema "
                                 "[ %s ]" % (configindb.Database_Config['db_name'], self._schema))
                jmeta = {}
                jmeta['Schema'] = configindb.Database_Config['db_schema']
                jtbls = {}
                jmeta['Tables'] = jtbls
                table_list_set = set(toolkit.to_list(configindb.Schema_Config['schema_fetch_tables']))
                table_names = inspector.get_table_names()
                if self.use_schema:
                    table_names = inspector.get_table_names(schema=self._schema)
                for table_name in table_names:
                    persist_table = False
                    if configindb.Schema_Config['schema_fetch_all_table']:
                        persist_table = True
                    else:
                        if table_name in table_list_set:
                            persist_table = True
                    if persist_table:
                        user_table = Table(table_name, metadata, autoload_with=engine)
                        cptypedict = {}
                        for c in user_table.columns:
                            if str(c.type) != 'NULL':
                                cptypedict[c.name] = c.type.python_type.__name__
                            else:
                                cptypedict[c.name] = 'str'
                        #cptypedict = dict([(c.name, c.type.python_type.__name__) for c in user_table.columns])
                        jtbl = {}
                        jtbls[table_name] = jtbl
                        jtbl['Name'] = table_name
                        jtbl['Schema'] = configindb.Database_Config['db_schema']
                        jtbl['Type'] = 'table'
                        pjtbl = {}
                        pjtbl['block_title'] = jtbl['Name']
                        pjtbl['block_navtitle'] = jtbl['Type']
                        pjtbl['dt_display'] = 'lightbox'
                        pk = inspector.get_pk_constraint(table_name)
                        if self.use_schema:
                            pk = inspector.get_pk_constraint(table_name, schema=self._schema)
                        if len(pk['constrained_columns']) > 0:
                            jtbl['PrimaryKeys'] = pk['constrained_columns']
                            jtbl['LogicPrimaryKeys'] = pk['constrained_columns']
                        else:
                            jtbl['PrimaryKeys'] = []
                            lpk = self.get_table_logicprimarykeys(table_name)
                            jtbl['LogicPrimaryKeys'] = [] if lpk is None else lpk
                        pjtbl['dt_idSrc'] = ','.join(jtbl['PrimaryKeys'])
                        pjtbl['dt_order'] = ''
                        pjtbl['et_columns'] = '1'
                        jtbl['Indexes'] = inspector.get_indexes(table_name)
                        if self.use_schema:
                            jtbl['Indexes'] = inspector.get_indexes(table_name, schema=self._schema)
                        jtbl['Columns'] = []
                        pjtbl['et_fields'] = []
                        table_columns = inspector.get_columns(table_name)
                        if self.use_schema:
                            table_columns = inspector.get_columns(table_name, schema=self._schema)
                        for column in table_columns:
                            cdict={}
                            pdict={}
                            for key, value in column.items():
                                cdict[key] = value.__str__()
                            if column['name'] in jtbl['PrimaryKeys']:
                                cdict['primary_key'] = 1
                            else:
                                cdict['primary_key'] = 0
                            cdict['pythonType'] = cptypedict[cdict['name']]
                            jtbl['Columns'].append(cdict)
                            pdict['name'] = column['name']
                            pdict['label'] = column['name']
                            pdict['labelinfo'] = ''
                            pdict['visible'] = 'true'
                            pdict['classname'] = 'normal'
                            pdict['type'] = 'text'
                            pdict['options'] = ''
                            pdict['def'] = ''
                            pjtbl['et_fields'].append(pdict)
                        jtblmetastore = Metastore(name=jtbl['Name'],
                                                  schema=jtbl['Schema'],
                                                  type=jtbl['Type'],
                                                  primarykeys=json.dumps(jtbl['PrimaryKeys']),
                                                  logicprimarykeys=json.dumps(jtbl['LogicPrimaryKeys']),
                                                  indexes=json.dumps(jtbl['Indexes']),
                                                  columns=json.dumps(jtbl['Columns']),
                                                  createdate=str(date.today()))
                        if jtblmetastore.existed_Metastore(jtblmetastore.name):
                            jtblmetastore.update_Metastore(jtblmetastore.json)
                        else:
                            jtblmetastore.create_Metastore(jtblmetastore.json)
                        jtblpagedef = Pagedef(name=jtbl['Name'],
                                              pagetype='Table',
                                              pagedef=json.dumps(pjtbl),
                                              createdate=str(date.today()))
                        if not jtblpagedef.existed_Pagedef(jtblpagedef.name):
                            jtblpagedef.create_Pagedef(jtblpagedef.json)
                        #jtbl['Dict'] = json.loads(json.dumps(user_table.__dict__,indent=4, sort_keys=True, default=str))
                view_names = inspector.get_view_names()
                if self.use_schema:
                    view_names = inspector.get_view_names(schema=self._schema)
                for view_name in view_names:
                    persist_view = False
                    if configindb.Schema_Config['schema_fetch_all_table']:
                        persist_view = True
                    else:
                        if view_name in table_list_set:
                            persist_view = True
                    if persist_view:
                        user_view = Table(view_name, metadata, autoload_with=engine)
                        for c in user_table.columns:
                            if str(c.type) != 'NULL':
                                cptypedict[c.name] = c.type.python_type.__name__
                            else:
                                cptypedict[c.name] = 'str'
                        #cptypedict = dict([(c.name, c.type.python_type.__name__) for c in user_view.columns])
                        vtbl = {}
                        jtbls[view_name] = vtbl
                        vtbl['Name'] = view_name
                        vtbl['Type'] = 'view'
                        pvtbl = {}
                        pvtbl['block_title'] = vtbl['Name']
                        pvtbl['block_navtitle'] = vtbl['Type']
                        pvtbl['dt_display'] = 'lightbox'
                        pk = inspector.get_pk_constraint(view_name)
                        if self.use_schema:
                            pk = inspector.get_pk_constraint(view_name, schema=self._schema)
                        if len(pk['constrained_columns']) > 0:
                            vtbl['PrimaryKeys'] = pk['constrained_columns']
                            vtbl['LogicPrimaryKeys'] = pk['constrained_columns']
                        else:
                            vtbl['PrimaryKeys'] = []
                            lpk = self.get_table_logicprimarykeys(view_name)
                            vtbl['LogicPrimaryKeys'] = [] if lpk is None else lpk
                        pvtbl['dt_idSrc'] = ','.join(vtbl['PrimaryKeys'])
                        pvtbl['dt_order'] = ''
                        pvtbl['et_columns'] = '1'
                        vtbl['Indexes'] = inspector.get_indexes(view_name)
                        if self.use_schema:
                            vtbl['Indexes'] = inspector.get_indexes(view_name, schema=self._schema)
                        vtbl['Columns'] = []
                        pvtbl['et_fields'] = []
                        view_columns = inspector.get_columns(view_name)
                        if self.use_schema:
                            view_columns = inspector.get_columns(view_name, schema=self._schema)
                        for vcolumn in view_columns:
                            vdict = {}
                            pvdict={}
                            for key, value in vcolumn.items():
                                vdict[key] = value.__str__()
                            if column['name'] in vtbl['PrimaryKeys']:
                                vdict['primary_key'] = 1
                            else:
                                vdict['primary_key'] = 0
                            vdict['pythonType'] = cptypedict[vdict['name']]
                            vtbl['Columns'].append(vdict)
                            pvdict['name'] = column['name']
                            pvdict['label'] = column['name']
                            pvdict['labelinfo'] = ''
                            pvdict['visible'] = 'true'
                            pvdict['classname'] = 'normal'
                            pvdict['type'] = 'text'
                            pvdict['options'] = ''
                            pvdict['def'] = ''
                            pvtbl['et_fields'].append(pvdict)
                        vtblmetastore = Metastore(name=vtbl['Name'],
                                                  schema=vtbl['Schema'],
                                                  type=vtbl['Type'],
                                                  primarykeys=json.dumps(vtbl['PrimaryKeys']),
                                                  logicprimarykeys=json.dumps(vtbl['LogicPrimaryKeys']),
                                                  indexes=json.dumps(vtbl['Indexes']),
                                                  columns=json.dumps(vtbl['Columns']),
                                                  createdate=str(date.today()))
                        if vtblmetastore.existed_Metastore(vtblmetastore.name):
                            vtblmetastore.update_Metastore(vtblmetastore.json)
                        else:
                            vtblmetastore.create_Metastore(vtblmetastore.json)
                        vtblpagedef = Pagedef(name=jtbl['Name'],
                                              pagetype='View',
                                              pagedef=json.dumps(pvtbl),
                                              createdate=str(date.today()))
                        if not vtblpagedef.existed_Pagedef(vtblpagedef.name):
                            vtblpagedef.create_Pagedef(vtblpagedef.json)
                        #vtbl['Dict'] = json.loads(json.dumps(user_view.__dict__, indent=4, sort_keys=True, default=str))
                #log.debug(jmeta)
                #log.debug(json.dumps(jmeta))
            else:
                log.error('Can not get metadata at gen_schema() ... ')
                raise Exception('Can not get metadata at gen_schema()')
        except Exception as exp:
            log.error('Exception at dbmeta.gen_schema() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def load_schema(self):
        log.debug('Loading schema from %s' % config('arangodb_app_profile_prefix', default = 'capricornus_')+config('app_profile', default = 'default'))
        metastore = Metastore()
        metas = metastore.get_all_Metastore()
        self._tables = []
        for meta in metas:
            table = TableSchema(meta['name'], meta['type'])
            table.primarykeys = json.loads(meta['primarykeys'])
            table.logicprimarykeys = json.loads(meta['logicprimarykeys']) if meta['logicprimarykeys'] is not None else None
            table.indexes = json.loads(meta['indexes'])
            table.columns = json.loads(meta['columns'])
            self._tables.append(table)
            if table.type == 'table':
                self._tableCount = self._tableCount + 1
            if table.type == 'view':
                self._viewCount = self._viewCount + 1
        log.debug('Schema load with [ %s ] tables and [ %s ] views' % (self._tableCount, self._viewCount))

    def gettable(self, value):
        if len(self._tables) > 0:
            for table in self._tables:
                if table.name == value:
                    return table
        else:
            return None

    def get_table_primary_keys(self, value):
        table = self.gettable(value)
        if table is not None:
            pks = table.primarykeys
            return pks
        else:
            return None

    def get_table_logicprimarykeys(self, table_name):
        metastore = Metastore()
        table = metastore.get_Metastore_byname(table_name)
        if "name" in table:
            return json.loads(table['logicprimarykeys'])
        else:
            return None

    def table_has_null_type_column(self, table_name):
        rtn = False
        metastore = Metastore()
        table = self.gettable(table_name)
        if table is not None:
            for column in table.columns:
                if column['type'] == 'NULL':
                    rtn = True
                    break
        else:
            rtn = True
        return rtn

    def get_table_pk_type(self,tablename,pkname):
        pk_type = 'VARCHAR'
        table = self.gettable(tablename)
        pk_type = table.getColumnType(pkname)
        return pk_type

    def get_table_pk_qmneed(self,tablename,pkname):
        pk_qmneed = False
        pk_type = self.get_table_pk_type(tablename,pkname)
        if pk_type in ['CHAR','VARCHAR','TEXT','DATE','DATETIME','TIMESTAMP','YEAR','TIME']:
            pk_qmneed = True
        return pk_qmneed

    def get_tables(self):
        tblist = []
        for tb in self._tables:
            if tb.type == 'table':
                tblist.append(tb.name)
        return tblist

    def get_views(self):
        viewlist = []
        for tb in self._tables:
            if tb.type == 'view':
                viewlist.append(tb.name)
        return viewlist

    def response_schema(self):
        tblist = []
        for tb in self._tables:
            tblist.append(tb.name)
        return tblist

    def gen_dbdirgram(self):
        try:
            basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
            apppath = os.path.abspath(os.path.join(basepath, os.pardir))
            configpath = os.path.abspath(os.path.join(apppath, 'config'))
            canvasfilepath = os.path.abspath(os.path.join(configpath, "dbdiagram-canvas.json"))
            diagramfilepath = os.path.abspath(os.path.join(configpath, "dbdiagram.json"))
            dbdiagram={}
            canvas = {}
            with open(canvasfilepath, 'r') as canvasfile:
                canvas = json.loads(canvasfile.read())
            canvas['databaseName'] = configindb.Database_Config['db_name']
            dbdiagram['canvas'] = canvas
            tables = self.get_tables()
            tbllist = []
            for tbl in tables:
                dgtable = self.gettable(tbl)
                ndgtable = {}
                ndgtable['name'] = dgtable.name
                ndgtable['comment'] = ''
                ndgtable['id'] = str(uuid.uuid1())
                ndgtable['ui'] = {'active':True,'left':50,'top':50,'zIndex':1,'widthName':60,'widthComment':60}
                ndgcolume = {}
                pks = dgtable.primarykeys
                clmlist = []
                for clm in dgtable.columns:
                    ndgcolume = {}
                    ndgcolume['id'] = str(uuid.uuid1())
                    ndgcolume['name'] = clm['name']
                    #ndgcolume['comment'] = '' if clm['comment'] == 'None' else clm['comment']
                    ndgcolume['dataType'] = clm['type']
                    ndgcolume['default'] =  '' if clm['default'] == 'None' else clm['default']
                    ndgcolume['option'] = {"autoIncrement": False,"primaryKey": False,"unique": False,"notNull": False}
                    ndgcolume['ui'] = {"active": False, "pk": False, "fk": False, "pfk": False, "widthName": 60,
                                       "widthComment": 60, "widthDataType": 60, "widthDefault": 60}
                    if clm.__contains__('nullable'):
                        ndgcolume['option']['notNull'] = 'true' if clm['nullable'] == 'False' else 'false'
                    if clm.__contains__('autoincrement'):
                        ndgcolume['option']['autoIncrement'] = clm['autoincrement']
                    if clm['name'] in pks:
                        ndgcolume['option']['primaryKey'] = True
                        ndgcolume['ui']['pk'] = True
                    clmlist.append(ndgcolume)
                ndgtable['columns'] = clmlist
                tbllist.append(ndgtable)
            dbdiagramtable = {}
            dbdiagramtable['tables'] = tbllist
            dbdiagram['table'] = dbdiagramtable
            #log.debug(dbdiagram)
            with open(diagramfilepath, 'w', encoding='utf-8') as diagramfile:
                json.dump(dbdiagram, diagramfile, separators=(',', ':'),
                          sort_keys=False, indent=4, ensure_ascii=False, encoding='utf-8')
        except Exception as exp:
            log.error('Exception at dbmeta.gen_dbdirgram() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def gen_dbdirgramcanvas(self):
        try:
            basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
            apppath = os.path.abspath(os.path.join(basepath, os.pardir))
            configpath = os.path.abspath(os.path.join(apppath, 'config'))
            canvasfilepath = os.path.abspath(os.path.join(configpath, "dbdiagram-canvas.json"))
            diagramfilepath = os.path.abspath(os.path.join(configpath, "dbdiagram.json"))
            dbdiagram={}
            canvas = {}
            with open(canvasfilepath, 'r') as canvasfile:
                canvas = json.loads(canvasfile.read())
            canvas['databaseName'] = configindb.Database_Config['db_name']
            dbdiagram['canvas'] = canvas
            #log.debug(dbdiagram)
            with open(diagramfilepath, 'w', encoding='utf-8') as diagramfile:
                json.dump(dbdiagram, diagramfile, separators=(',', ':'),
                          sort_keys=False, indent=4, ensure_ascii=False, encoding='utf-8')
        except Exception as exp:
            log.error('Exception at dbmeta.gen_dbdirgramcanvas() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
    
    def gen_ddl(self):
        basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
        apppath = os.path.abspath(os.path.join(basepath, os.pardir))
        configpath = os.path.abspath(os.path.join(apppath, 'config'))
        ddlfilepath = os.path.abspath(os.path.join(configpath, "dbddl.sql"))
        engine = dbengine.DBEngine().connect()
        inspector = inspect(engine)
        metadata = self.metadata
        ddlstr = ''
        try:
            if metadata is not None:
                log.debug("Generate DLL from : [ %s ] with db schema "
                                 "[ %s ]" % (configindb.Database_Config['db_name'], self._schema))
                table_list_set = set(toolkit.to_list(configindb.Schema_Config['schema_fetch_tables']))
                table_names = inspector.get_table_names()
                if self.use_schema:
                    table_names = inspector.get_table_names(schema=self._schema)
                for table_name in table_names:
                    persist_table = False
                    if configindb.Schema_Config['schema_fetch_all_table']:
                        persist_table = True
                    else:
                        if table_name in table_list_set:
                            persist_table = True
                    if self.table_has_null_type_column(table_name):
                        persist_table = False
                    if persist_table:
                        user_table = Table(table_name, metadata, autoload_with=engine)
                        tblcrtstr = str(CreateTable(user_table).compile(engine))
                        tblcrtstr = tblcrtstr.replace(' ' + self._schema + '.', ' ')
                        tblcrtstr = tblcrtstr.replace(' '+table_name+' ',' `'+table_name+'` ')
                        table_columns = inspector.get_columns(table_name)
                        if self.use_schema:
                            table_columns = inspector.get_columns(table_name, schema=self._schema)
                        for column in table_columns:
                            tblcrtstr = tblcrtstr.replace('\t'+column['name'] + ' ', '\t`' + column['name'] + '` ')
                            tblcrtstr = tblcrtstr.replace('(' + column['name'] + ')', ' `(' + column['name'] + '`) ')
                        #log.debug(tblcrtstr)
                        ddlstr = ddlstr + tblcrtstr
                view_names = inspector.get_view_names()
                if self.use_schema:
                    view_names = inspector.get_view_names(schema=self._schema)
                for view_name in view_names:
                    persist_view = False
                    if configindb.Schema_Config['schema_fetch_all_table']:
                        persist_view = True
                    else:
                        if view_name in table_list_set:
                            persist_view = True
                    if persist_view:
                        user_view = Table(view_name, metadata, autoload_with=engine)
                        viewcrtstr = str(CreateTable(user_view).compile(engine))
                        viewcrtstr = viewcrtstr.replace(' ' + self._schema + '.', ' ')
                        viewcrtstr = viewcrtstr.replace(' ' + view_name + ' ', ' `' + view_name + '` ')
                        view_columns = inspector.get_columns(view_name)
                        if self.use_schema:
                            view_columns = inspector.get_columns(view_name, schema=self._schema)
                        for vcolumn in view_columns:
                            viewcrtstr = viewcrtstr.replace('\t' + vcolumn['name'] + ' ', '\t`' + vcolumn['name'] + '` ')
                            viewcrtstr = viewcrtstr.replace('(' + vcolumn['name'] + ')', ' `(' + vcolumn['name'] + '`) ')
                        #log.debug(viewcrtstr)
                        ddlstr = ddlstr + viewcrtstr
                #log.debug(ddlstr)
                with open(ddlfilepath, 'w', encoding='utf-8') as ddlfile:
                    ddlfile.write(ddlstr)
                    ddlfile.close()
            else:
                log.error('Can not get metadata at gen_ddl() ... ')
                raise Exception('Can not get metadata at gen_ddl()')
        except Exception as exp:
            log.error('Exception at dbmeta.gen_ddl() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def gen_models(self):
        basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
        apppath = os.path.abspath(os.path.join(basepath, os.pardir))
        tmplpath = os.path.abspath(os.path.join(apppath, 'tmpl'))
        modelspath = os.path.abspath(os.path.join(apppath, 'models'))
        try:
            tbls = self.get_tables()
            for tbl in tbls:
                dtable = self.gettable(tbl)
                log.debug("Generate model for table: %s" % dtable.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqlmodel_tmpl.py')
                gencode = template.render(dtable.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(modelspath, tbl.lower()+".py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_models() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
        try:
            views = self.get_views()
            for view in views:
                dview = self.gettable(view)
                log.debug("Generate model for view: %s" % dview.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqlmodel_tmpl.py')
                gencode = template.render(dview.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(modelspath, view.lower() + ".py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_models() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def gen_udfmodels(self):
        basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
        apppath = os.path.abspath(os.path.join(basepath, os.pardir))
        tmplpath = os.path.abspath(os.path.join(apppath, 'tmpl'))
        modelspath = os.path.abspath(os.path.join(apppath, 'models'))
        try:
            tbls = self.get_tables()
            for tbl in tbls:
                dtable = self.gettable(tbl)
                log.debug("Generate model for table: %s" % dtable.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqlmodel_tmpl.py')
                gencode = template.render(dtable.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(modelspath, tbl.lower()+"_udf.py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_models() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
        try:
            views = self.get_views()
            for view in views:
                dview = self.gettable(view)
                log.debug("Generate model for view: %s" % dview.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqlmodel_tmpl.py')
                gencode = template.render(dview.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(modelspath, view.lower() + "_udf.py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_models() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def gen_services(self):
        basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
        apppath = os.path.abspath(os.path.join(basepath, os.pardir))
        tmplpath = os.path.abspath(os.path.join(apppath, 'tmpl'))
        servicespath = os.path.abspath(os.path.join(apppath, 'services'))
        try:
            tbls = self.get_tables()
            for tbl in tbls:
                dtable = self.gettable(tbl)
                log.debug("Generate service for table: %s" % dtable.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqltableservice_tmpl.py')
                gencode = template.render(dtable.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(servicespath, tbl.lower() + "service.py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_services() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
        try:
            views = self.get_views()
            for view in views:
                dview = self.gettable(view)
                log.debug("Generate service for view: %s" % dview.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqlviewservice_tmpl.py')
                gencode = template.render(dview.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(servicespath, view.lower() + "service.py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_services() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def gen_udfservices(self):
        basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
        apppath = os.path.abspath(os.path.join(basepath, os.pardir))
        tmplpath = os.path.abspath(os.path.join(apppath, 'tmpl'))
        servicespath = os.path.abspath(os.path.join(apppath, 'services'))
        try:
            tbls = self.get_tables()
            for tbl in tbls:
                dtable = self.gettable(tbl)
                log.debug("Generate service for table: %s" % dtable.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqltableservice_tmpl.py')
                gencode = template.render(dtable.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(servicespath, tbl.lower() + "_udfservice.py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_services() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
        try:
            views = self.get_views()
            for view in views:
                dview = self.gettable(view)
                log.debug("Generate service for view: %s" % dview.name)
                env = Environment(loader=FileSystemLoader(tmplpath), trim_blocks=True, lstrip_blocks=True)
                template = env.get_template('sqlviewservice_tmpl.py')
                gencode = template.render(dview.json)
                #log.debug(gencode)
                modelsfilepath = os.path.abspath(os.path.join(servicespath, view.lower() + "_udfservice.py"))
                with open(modelsfilepath, 'w', encoding='utf-8') as gencodefile:
                    gencodefile.write(gencode)
                    gencodefile.close()
        except Exception as exp:
            log.error('Exception at gen_services() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def response_dbdiagram(self, filename, canvasonly=False):
        basepath = os.path.abspath(os.path.dirname(os.path.abspath(__file__)))
        apppath = os.path.abspath(os.path.join(basepath, os.pardir))
        configpath = os.path.abspath(os.path.join(apppath, 'config'))
        diagramfilepath = os.path.abspath(os.path.join(configpath, filename))
        rjson = {"name":filename,
                 "type": "file",
                 "content": ""}
        with open(diagramfilepath, 'r') as diagramfile:
            rjson['content'] = base64.b64encode(diagramfile.read().encode('utf-8'))
        return rjson

    def response_table_schema(self, value):
        tb = self.gettable(value)
        if tb is not None:
            return tb.json
        else:
            return {}

    def response_table_pagdef(self, value):
        pagedef = Pagedef()
        result = pagedef.get_Pagedef_byname(value)
        if "name" in result:
            return result
        else:
            return {}

    def check_table_schema(self, value):
        tb = self.gettable(value)
        if tb is not None:
            return True
        else:
            return False


if __name__ == '__main__':
    dbmeta = DBMeta()
    tbl = dbmeta.gettable('Customers')
    log.debug(tbl.json)
    log.debug(dbmeta.get_table_primary_keys('Customers'))
    log.debug(dbmeta.get_table_pk_type('Customers','customer_id'))
    log.debug(dbmeta.get_table_pk_qmneed('Customers','customer_id'))
    log.debug(dbmeta.get_tables())
    log.debug(dbmeta.get_views())
    log.debug(dbmeta.response_schema())
    log.debug(dbmeta.check_table_schema('Brands'))
    log.debug(dbmeta.response_table_pagdef('Brands'))

    #dbmeta.gen_models()
    #dbmeta.gen_udfmodels()
    #dbmeta.gen_services()
    #dbmeta.gen_udfservices()