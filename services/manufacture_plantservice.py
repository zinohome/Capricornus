#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus

import ast
import collections
import distutils
import traceback

import simplejson as json
from sqlalchemy import func, text
from sqlmodel import Session, select
from core import dbengine
from models.manufacture_plant import Manufacture_Plant
from util.log import log as log
from config.config import config
from core.dbconfig import configindb
from util import toolkit

from sqlmodel.sql.expression import Select, SelectOfScalar
SelectOfScalar.inherit_cache = True  # type: ignore
Select.inherit_cache = True  # type: ignore


class Manufacture_PlantService(object):
    def __init__(self):
        self._modelName = 'Manufacture_Plant'

    def new_model(self, modeljson):
        newmodel = Manufacture_Plant()
        for field in newmodel.__fields__.values():
            if field.name in modeljson:
                newmodel.__setattr__(field.name, modeljson[field.name])
        return newmodel

    def dump_model(self, model):
        return model.sortJson()

    def dump_model_list(self, modellist):
        jsonlist = json.loads('{"data":""}')
        jlst = list()
        for model in modellist:
            jlst.append(model.sortJson())
        jsonlist['data'] = jlst
        return jsonlist


    def getall_Manufacture_Plant(self):
        try:
            engine = dbengine.DBEngine().connect()
            with Session(engine) as session:
                results = session.query(Manufacture_Plant).limit(configindb.Query_Config['query_limit_upset'])
                return results.all()
        except Exception as e:
            log.error('Exception at getall_Manufacture_Plant(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None
        finally:
            session.close()

    def get_Manufacture_Plant_count(self):
        try:
            engine = dbengine.DBEngine().connect()
            with Session(engine) as session:
                pks = Manufacture_Plant.getPrimaryKeys(Manufacture_Plant)
                stmt = text("select count(" + pks[0] + ") as rowcount from Manufacture_Plant")
                results = session.execute(stmt)
                return results.one()[0]
        except Exception as e:
            log.error('Exception at get_Manufacture_Plant_count(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None
        finally:
            session.close()

    def create_Manufacture_Plant(self, modelobj):
        try:
            engine = dbengine.DBEngine().connect()
            with Session(engine) as session:
                session.add(modelobj)
                session.commit()
                if configindb.Schema_Config['schema_model_refresh']:
                    session.refresh(modelobj)
                pks = Manufacture_Plant.getPrimaryKeys(Manufacture_Plant)
                returnjson = {}
                for pk in pks:
                    returnjson[pk] = modelobj.__getattribute__(pk)
                return returnjson
        except Exception as e:
            log.error('Exception at create_Manufacture_Plant(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None
        finally:
            session.close()

    def batch_create_Manufacture_Plant_byjson(self, jsonstr):
        batchjson = json.loads(jsonstr)
        batchdata = batchjson['data'] if 'data' in batchjson else None
        returnjson = {"ids": [], "data": []}
        try:
            for bdata in batchdata:
                newentity = self.new_model(bdata)
                newid = self.create_Manufacture_Plant(newentity)
                returnjson['ids'].append(newid)
                returnjson['data'].append(newentity)
            return returnjson
        except Exception as e:
            log.error('Exception at batch_create_Manufacture_Plant(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None

    def get_Manufacture_Plant_byid(self, idstr):
        try:
            engine = dbengine.DBEngine().connect()
            with Session(engine) as session:
                statement = select(Manufacture_Plant).where(text(idstr))
                result = session.exec(statement).one()
                #log.debug('get_Manufacture_Plant_byid() result is : %s' % result)
                return result
        except Exception as e:
            log.error('Exception at get_Manufacture_Plant_byid(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None
        finally:
            session.close()

    def update_Manufacture_Plant(self, modelobj):
        try:
            engine = dbengine.DBEngine().connect()
            with Session(engine) as session:
                session.add(modelobj)
                session.commit()
                session.refresh(modelobj)
                return modelobj
        except Exception as e:
            log.error('Exception at update_Manufacture_Plant(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None
        finally:
            session.close()

    def update_Manufacture_Plant_byjson(self, updatejson):
        log.debug('The update JSON is: %s' % updatejson)
        pks = Manufacture_Plant.getPrimaryKeys(Manufacture_Plant)
        statement = select(Manufacture_Plant)
        for pk in pks:
            if Manufacture_Plant.getpkqmneed(Manufacture_Plant,pk):
                statement = statement.where(text("Manufacture_Plant." + pk + "='" + str(updatejson[pk])+"'"))
            else:
                statement = statement.where(text("Manufacture_Plant."+ pk + "=" +str(updatejson[pk])))
        try:
            engine = dbengine.DBEngine().connect()
            with Session(engine) as session:
                modmodelobj = session.exec(statement).one()
                for field in modmodelobj.__fields__.values():
                    if field.name in updatejson:
                        modmodelobj.__setattr__(field.name, updatejson[field.name])
                session.add(modmodelobj)
                session.commit()
                if configindb.Schema_Config['schema_model_refresh']:
                    session.refresh(modmodelobj)
                return modmodelobj
        except Exception as e:
            log.error('Exception at update_Manufacture_Plant_byjson(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None
        finally:
            session.close()

    def batch_update_Manufacture_Plant_byjson(self, jsonstr):
        batchjson = json.loads(jsonstr)
        batchdata = batchjson['data'] if 'data' in batchjson else None
        returnjson = {"data": []}
        try:
            for bdata in batchdata:
                updentity = self.update_Manufacture_Plant_byjson(bdata)
                returnjson['data'].append(updentity)
            return returnjson
        except Exception as e:
            log.error('Exception at batch_update_Manufacture_Plant_byjson(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return None

    def delete_Manufacture_Plant_byid(self, idstr):
        try:
            engine = dbengine.DBEngine().connect()
            with Session(engine) as session:
                statement = select(Manufacture_Plant).where(text(idstr))
                result = session.exec(statement).one()
                log.debug('delete_Manufacture_Plant_byid() result is : %s' % result)
                session.delete(result)
                session.commit()
                return True
        except Exception as e:
            log.error('Exception at delete_Manufacture_Plant_byid(): %s ' % e)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return False
        finally:
            session.close()

    def query_Manufacture_Plant(self,querystr):
        tablename = "Manufacture_Plant"
        if toolkit.validQueryJson(querystr):
            queryjson = json.loads(querystr)
            log.debug('The query JSON is: %s' % queryjson)
            #queryfields
            fullqueryfields = "Manufacture_Plant." + ",Manufacture_Plant.".join(tuple(Manufacture_Plant.__fields__.keys()))
            queryfields = fullqueryfields
            querystr = queryjson['queryfields'] if 'queryfields' in queryjson else None
            if querystr is not None:
                queryfields = querystr.replace(' ','')
                if "*" in queryfields:
                    queryfields=fullqueryfields
            textclauststr = "SELECT "
            #distinct
            bdistinct = queryjson['distinct'] if 'distinct' in queryjson else None
            if bdistinct is not None and distutils.util.strtobool(str(bdistinct)):
                textclauststr = textclauststr + "DISTINCT "
            # field + from
            textclauststr = textclauststr + queryfields + " FROM " + tablename
            #where
            wherefields = queryjson['where_query'] if 'where_query' in queryjson else None
            wherebind = queryjson['where_bind'] if 'where_bind' in queryjson else None
            if ( wherefields is not None ) & ( wherebind is not None ):
                textclauststr = textclauststr + " WHERE " + wherefields
            # where bind parameters
            wherebindjson = {}
            if wherebind is not None:
                wherebindstrlist = wherebind.split(',')
                for wb in wherebindstrlist:
                    key, val = wb.split('=')
                    wherebindjson[key] = val
            #log.debug("where bind params: %s" % wherebindjson)
            # order_by
            orderfields = queryjson['order_by'] if 'order_by' in queryjson else None
            if orderfields is not None:
                textclauststr = textclauststr + " ORDER BY " + orderfields
            #TODO group_by

            # limit & offset
            dlimit = queryjson['limit'] if 'limit' in queryjson else None
            if dlimit is not None:
                textclauststr = textclauststr + " LIMIT :limitparam"
                wherebindjson['limitparam'] = dlimit
            doffset = queryjson['offset'] if 'offset' in queryjson else None
            if doffset is not None:
                textclauststr = textclauststr + " OFFSET :offsetparam"
                wherebindjson['offsetparam'] = doffset
            #log.debug("textclauststr : %s" % textclauststr)
            statement = text(textclauststr)
            log.debug("The query Statement is: %s" % statement)
            include_count = False
            count_only = False
            record_count = 0
            # include_count
            binclude_count = queryjson['include_count'] if 'include_count' in queryjson else None
            if binclude_count is not None and distutils.util.strtobool(str(binclude_count)):
                include_count = True
            # count_only
            bcount_only = queryjson['count_only'] if 'count_only' in queryjson else None
            if bcount_only is not None and distutils.util.strtobool(str(bcount_only)):
                count_only = True
            try:
                engine = dbengine.DBEngine().connect()
                with Session(engine) as session:
                    #get record count
                    if include_count | count_only:
                        pks = Manufacture_Plant.getPrimaryKeys(Manufacture_Plant)
                        qfields = "Manufacture_Plant." + ",Manufacture_Plant.".join(tuple(pks))
                        if len(qfields.split(',')) == 1:
                            cqueryfields = "count(" + qfields + ") as rowcount"
                        else:
                            cqueryfields = "count(" + qfields.split(',')[0] + ") as rowcount"
                        counttextclauststr = "SELECT "
                        # distinct
                        if bdistinct is not None and distutils.util.strtobool(str(bdistinct)):
                            counttextclauststr = counttextclauststr + "DISTINCT "
                        # field + from
                        counttextclauststr = counttextclauststr + cqueryfields + " FROM " + tablename
                        # where
                        if (wherefields is not None) & (wherebind is not None):
                            counttextclauststr = counttextclauststr + " WHERE " + wherefields
                        cstate = text(counttextclauststr)
                        log.debug("The record count query Statement is: %s" % cstate)
                        record_count = session.execute(cstate,wherebindjson).one()[0]
                    returnjson = {}
                    if count_only:
                        returnjson["record_count"] = record_count
                    else:
                        result = session.execute(statement,wherebindjson)
                        data = []
                        rawdata = []
                        fields = ''
                        for row in result:
                            rawdata.append(row._data)
                            fields = row._fields
                            data.append(row._asdict())
                        log.debug('query_Manufacture_Plant() result is : %s' % result)
                        if include_count:
                            returnjson["record_count"] = record_count
                            returnjson['fields'] = fields
                            returnjson['data'] = data
                            returnjson['rawdata'] = rawdata
                        else:
                            returnjson['fields'] = fields
                            returnjson['data'] = data
                            returnjson['rawdata'] = rawdata
                    # log.debug('query_Manufacture_Plant() returndict is : %s' % returndict)
                    return returnjson
            except Exception as e:
                log.error('Exception at query_Manufacture_Plant(): %s ' % e)
                if config('app_exception_detail', cast=bool, default=True):
                    traceback.print_exc()
                return None
            finally:
                session.close()
        else:
            return None

if __name__ == '__main__':
    pass