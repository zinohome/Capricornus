#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus
import distutils
import traceback
from datetime import date

from arango_orm import Collection
from marshmallow.fields import String, Bool, Date
from core.arangobase import capbase
import simplejson as json
from config.config import config
from util.log import log as log

class Dbconfig(Collection):
    __collection__ = 'dbconfig'
    _index = [{'type': 'hash', 'fields': ['name'], 'unique': True}]
    _key = String(required=True)
    name = String(required=True, allow_none=False)
    Application_Config = String(required=True, allow_none=False)
    Schema_Config = String(required=True, allow_none=False)
    Query_Config = String(required=True, allow_none=False)
    Security_Config = String(required=True, allow_none=False)
    Database_Config = String(required=True, allow_none=False)
    Connection_Config = String(required=True, allow_none=False)
    Admin_Config = String(required=True, allow_none=False)
    createdate = Date()

    def getDbconfigcount(self):
        try:
            return capbase.query(Dbconfig).count()
        except Exception as exp:
            log.error('Exception at dbconfig.getDbconfigcount() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def createDbconfig(self, jsonstr):
        try:
            addjson = jsonstr
            if not addjson.__contains__('_key'):
                addjson['_key'] = addjson['name']
            if not capbase.has(Dbconfig, addjson['_key']):
                addobj = Dbconfig._load(addjson)
                capbase.add(addobj)
                return addobj.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at dbconfig.createDbconfig() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def getDbconfigbykey(self,keystr):
        try:
            if capbase.has(Dbconfig,keystr):
                record = capbase.query(Dbconfig).by_key(keystr)
                return record.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at dbconfig.getDbconfigbykey() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def updateDbconfig(self, jsonstr):
        try:
            updatejson = jsonstr
            if not updatejson.__contains__('_key'):
                updatejson['_key'] = updatejson['name']
            if capbase.has(Dbconfig, updatejson['_key']):
                updatejson = Dbconfig._load(updatejson)
                capbase.update(updatejson)
                return updatejson.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at dbconfig.updateDbconfig() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def deleteDbconfig(self,keystr):
        try:
            if capbase.has(Dbconfig, keystr):
                return capbase.delete(capbase.query(Dbconfig).by_key(keystr))
            else:
                return None
        except Exception as exp:
            log.error('Exception at dbconfig.deleteDbconfig() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def queryDbconfig(self,queryjson):
        try:
            filter = queryjson['filter'] if 'filter' in queryjson else None
            filteror = queryjson['filteror'] if 'filteror' in queryjson else None
            sort = queryjson['sort'] if 'sort' in queryjson else None
            limit = queryjson['limit'] if 'limit' in queryjson else None
            offset = queryjson['offset'] if 'offset' in queryjson else None
            query = capbase.query(Dbconfig)
            if filter is not None:
                for flstr in filter:
                    query.filter(flstr)
            if filteror is not None:
                for flstr in filteror:
                    query.filter(flstr, _or=True)
            if sort is not None:
                query.sort(sort)
            if limit is not None:
                query.limit(limit)
            if ( limit is not None ) & ( offset is not None ):
                query.limit(limit, start_from=offset)
            returnjson = {}
            returnjson['count'] = query.count()
            returnjson['data'] = []
            for obj in query.all():
                returnjson['data'].append(obj.json)
            return returnjson
        except Exception as exp:
            log.error('Exception at dbconfig.queryDbconfig() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def initsysDbconfig(self):
        # Only called at application start
        try:
            if not capbase.has_collection(Dbconfig):
                capbase.create_collection(Dbconfig)
            if not capbase.has(Dbconfig, config('app_profile', default='default')):
                Application_Config_json = {'app_name': 'Capricornus',
                                           'app_version': 'v2.1.5',
                                           'app_description': 'REST API for RDBMS',
                                           'app_prefix': '/api/v2',
                                           'app_cors_origins': "'*'",
                                           'app_service_model': 'Standalone',
                                           'app_param_prefix': 'up_b_',
                                           'app_force_generate_meta': True,
                                           'app_log_level': 'INFO',
                                           'app_user_func': True,
                                           'app_exception_detail': True,
                                           'app_admin_use_https': False,
                                           'app_confirm_key': 'Confirmed',
                                           'app_http_port': 8980,
                                           'app_https_port': 8943,
                                           'app_http_timeout': 10,
                                           'app_load_metadat_on_load': True,
                                           'app_clear_metadat_on_startup': True,
                                           'app_clear_metadat_on_shutdown': True}
                Schema_Config_json = {'schema_cache_enabled': True,
                                      'schema_model_refresh': True,
                                      'schema_cache_filename': 'capricornus_metadata',
                                      'schema_db_metafile': 'metadata.json',
                                      'schema_db_logicpkfile': 'logicpk.json',
                                      'schema_db_logicpkneedfile': 'logicpk-need.json',
                                      'schema_fetch_all_table': True,
                                      'schema_fetch_tables': 'table1, table2'}
                Query_Config_json = {'query_limit_upset': 2000,
                                     'query_default_limit': 10,
                                     'query_default_offset': 0}
                Security_Config_json = {
                    'security_key': '47051d5e3bafcfcba3c80d6d1119a7adf78d2967a8972b00af1ea231ca61f589',
                    'security_algorithm': 'HS256',
                    'access_token_expire_minutes': 30}
                Database_Config_json = {'db_gendburi': False,
                                        'db_dialect': 'sqlite',
                                        'db_drivername': 'sqlite',
                                        'db_host': '127.0.0.1',
                                        'db_port': 3306,
                                        'db_name': 'sample',
                                        'db_schema': 'sample',
                                        'db_use_schema': False,
                                        'db_username': 'root',
                                        'db_password': 'passw0rd',
                                        'db_uri': 'sqlite:////Users/zhangjun/PycharmProjects/NewCapricornus/data/sample.db',
                                        'db_exclude_tablespaces': 'SYSTEM,SYSAUX'}
                Connection_Config_json = {'con_pool_size': 20,
                                          'con_max_overflow': 5,
                                          'con_pool_use_lifo': True,
                                          'con_pool_pre_ping': True,
                                          'con_pool_recycle': 3600}
                Admin_Config_json = {'DEBUG': True,
                                     'SECRET_KEY': 'bgt56yh@Passw0rd',
                                     'SESSION_COOKIE_HTTPONLY': True,
                                     'REMEMBER_COOKIE_HTTPONLY': True,
                                     'REMEMBER_COOKIE_DURATION': 3600,
                                     'admin_ignore_primary_key': False}
                td = Dbconfig(name=config('app_profile', default='default'),
                              Application_Config=json.dumps(Application_Config_json),
                              Schema_Config=json.dumps(Schema_Config_json),
                              Query_Config=json.dumps(Query_Config_json),
                              Security_Config=json.dumps(Security_Config_json),
                              Database_Config=json.dumps(Database_Config_json),
                              Connection_Config=json.dumps(Connection_Config_json),
                              Admin_Config=json.dumps(Admin_Config_json),
                              createdate=str(date.today()))
                td.createDbconfig(td.json)
        except Exception as exp:
            log.error('Exception at dbconfig.initsysDbconfig() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    @property
    def json(self):
        jdict = self.__dict__.copy()
        if jdict.__contains__('_dirty'):
            del jdict['_dirty']
        if jdict.__contains__('_refs_vals'):
            del jdict['_refs_vals']
        if jdict.__contains__('_instance_schema'):
            del jdict['_instance_schema']
        if jdict.__contains__('_db'):
            del jdict['_db']
        if jdict.__contains__('_key'):
            del jdict['_key']
        if jdict.__contains__('__collection__'):
            del jdict['__collection__']
        # jdict.update((k, str(v)) for k, v in jdict.items())
        return jdict

class configOut(object):
    def __init__(self):
        td = Dbconfig()
        td.initsysDbconfig()
        dfcfg = td.getDbconfigbykey(config('app_profile', default='default'))
        self.Application_Config = json.loads(dfcfg['Application_Config'])
        self.Schema_Config = json.loads(dfcfg['Schema_Config'])
        self.Query_Config = json.loads(dfcfg['Query_Config'])
        self.Security_Config = json.loads(dfcfg['Security_Config'])
        self.Database_Config = json.loads(dfcfg['Database_Config'])
        self.Connection_Config = json.loads(dfcfg['Connection_Config'])
        self.Admin_Config = json.loads(dfcfg['Admin_Config'])

    @property
    def cfgjson(self):
        rtnjson = {}
        rtnjson['name'] = config('app_profile', default='default')
        rtnjson['createdate'] = str(date.today())
        rtnjson['Application_Config'] = json.dumps(self.Application_Config)
        rtnjson['Schema_Config'] = json.dumps(self.Schema_Config)
        rtnjson['Query_Config'] = json.dumps(self.Query_Config)
        rtnjson['Security_Config'] = json.dumps(self.Security_Config)
        rtnjson['Database_Config'] = json.dumps(self.Database_Config)
        rtnjson['Connection_Config'] = json.dumps(self.Connection_Config)
        rtnjson['Admin_Config'] = json.dumps(self.Admin_Config)
        return rtnjson





configindb = configOut()

if __name__ == '__main__':
    db_settings_json = {'db_dialect':'mysql'}
    connection_settings = {'db_dialect':'mysql'}
    schema_settings = {'db_dialect':'mysql'}
    td = Dbconfig()
    td.initsysDbconfig()
    log.debug(configindb.Application_Config)
    log.debug(configindb.Schema_Config['schema_cache_enabled'])
    log.debug(configindb.Database_Config)
    log.debug(dir(configindb))
    log.debug(list(configindb.__dict__.keys()))
    log.debug(configindb.cfgjson)
    log.debug(configindb.Database_Config.keys())
    log.debug(dir(distutils.util))


