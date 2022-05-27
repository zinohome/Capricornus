#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus
import traceback
from datetime import date

from arango_orm import Collection
from marshmallow.fields import String, Bool, Date
from core.arangobase import capbase
import simplejson as json
from config.config import config
from core.dbconfig import configindb
from util.log import log as log


class Pagedef(Collection):
    __collection__ = 'pagedef'
    _index = [{'type':'hash', 'fields':['name'], 'unique':True}]
    _key = String(required=True)
    name = String(required=True, allow_none=False)
    pagetype = String(required=True, allow_none=False)
    pagedef = String(required=True, allow_none=False)
    createdate = Date()

    def has_Pagedef_Collection(self):
        try:
            if capbase.has_collection(Pagedef):
                return True
            else:
                capbase.create_collection(Pagedef)
                return True
        except Exception as exp:
            log.error('Exception at Pagedef.has_Pagedef_Collection() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return False;

    def existed_Pagedef(self, document_name):
        try:
            if capbase.has(Pagedef, document_name):
                return True
            else:
                return False
        except Exception as exp:
            log.error('Exception at Pagedef.existed_Pagedef() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return False

    def create_Pagedef(self, jsonobj):
        try:
            addjson = jsonobj
            if not addjson.__contains__('_key'):
                addjson['_key'] = addjson['name']
            if not capbase.has(Pagedef, addjson['_key']):
                addobj = Pagedef._load(addjson)
                capbase.add(addobj)
                return addobj.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at Pagedef.create_Pagedef() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()


    def get_all_Pagedef_names(self):
        try:
            count = self.get_Pagedef_count()
            limit = configindb.Query_Config['query_limit_upset']
            querycount = count if count <= limit else limit
            records = capbase.query(Pagedef).limit(querycount).all()
            resultlist = []
            for record in records:
                resultlist.append(record.name)
            return resultlist
        except Exception as exp:
            log.error('Exception at Pagedef.get_all_Pagedef_names() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_Pagedef_count(self):
        try:
            return capbase.query(Pagedef).count()
        except Exception as exp:
            log.error('Exception at Pagedef.get_Pagedef_count() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_all_Pagedef(self):
        try:
            count = self.get_Pagedef_count()
            limit = configindb.Query_Config['query_limit_upset']
            querycount = count if count <= limit else limit
            records = capbase.query(Pagedef).limit(querycount).all()
            resultlist = []
            for record in records:
                resultlist.append(record.json)
            return resultlist
        except Exception as exp:
            log.error('Exception at Pagedef.get_all_Pagedef() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_Pagedef_bykey(self,keystr):
        try:
            returnjson = {}
            returnjson['count'] = 0
            returnjson['data'] = []
            if capbase.has(Pagedef,keystr):
                record = capbase.query(Pagedef).by_key(keystr)
                #returnjson['count'] = 1
                #returnjson['data'].append(record.json)
                returnjson = record.json
            return returnjson
        except Exception as exp:
            log.error('Exception at Pagedef.get_Pagedef_bykey() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_Pagedef_byname(self,name):
        try:
            returnjson = {}
            returnjson['count'] = 0
            returnjson['data'] = []
            if capbase.has(Pagedef,name):
                records = capbase.query(Pagedef).filter("name=='"+name+"'").all()
                if len(records) >= 1:
                    #returnjson['count'] = 1
                    #returnjson['data'].append(records[0].json)
                    returnjson = records[0].json
            return returnjson
        except Exception as exp:
            log.error('Exception at Pagedef.get_Pagedef_bykey() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def update_Pagedef(self, jsonobj):
        try:
            updatejson = jsonobj
            if not updatejson.__contains__('_key'):
                updatejson['_key'] = updatejson['name']
            if capbase.has(Pagedef, updatejson['_key']):
                updobj = Pagedef._load(updatejson)
                capbase.update(updobj)
                return updobj.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at Pagedef.update_Pagedef() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def delete_Pagedef(self,keystr):
        try:
            if capbase.has(Pagedef, keystr):
                return capbase.delete(capbase.query(Pagedef).by_key(keystr))
            else:
                return None
        except Exception as exp:
            log.error('Exception at Pagedef.delete_Pagedef() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def query_Pagedef(self,queryjson):
        try:
            filter = queryjson['filter'] if 'filter' in queryjson else None
            filteror = queryjson['filteror'] if 'filteror' in queryjson else None
            sort = queryjson['sort'] if 'sort' in queryjson else None
            limit = queryjson['limit'] if 'limit' in queryjson else None
            offset = queryjson['offset'] if 'offset' in queryjson else None
            query = capbase.query(Pagedef)
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
            log.error('Exception at Pagedef.query_Pagedef() %s ' % exp)
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

if __name__ == '__main__':
    tp = Pagedef()
    log.debug(tp.has_Pagedef_Collection())
    result = tp.get_Pagedef_byname('Customers')
    log.debug(result)