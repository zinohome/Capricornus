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


class Metastore(Collection):
    __collection__ = 'metastore'
    _index = [{'type':'hash', 'fields':['name'], 'unique':True}]
    _key = String(required=True)
    name = String(required=True, allow_none=False)
    schema = String(required=True, allow_none=False)
    type = String(required=True, allow_none=False)
    primarykeys = String(required=False, allow_none=True)
    logicprimarykeys = String(required=False, allow_none=True)
    indexes = String(required=False, allow_none=True)
    columns = String(required=False, allow_none=True)
    createdate = Date()

    def has_Metastore_Collection(self):
        try:
            if capbase.has_collection(Metastore):
                return True
            else:
                capbase.create_collection(Metastore)
                return True
        except Exception as exp:
            log.error('Exception at metastore.has_Metastore_Collection() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return False;

    def existed_Metastore(self, document_name):
        try:
            if capbase.has(Metastore, document_name):
                return True
            else:
                return False
        except Exception as exp:
            log.error('Exception at metastore.existed_Metastore() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
            return False

    def create_Metastore(self, jsonobj):
        try:
            addjson = jsonobj
            if not addjson.__contains__('_key'):
                addjson['_key'] = addjson['name']
            if not capbase.has(Metastore, addjson['_key']):
                addobj = Metastore._load(addjson)
                capbase.add(addobj)
                return addobj.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at metastore.create_Metastore() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_all_Metastore_names(self):
        try:
            count = self.get_Metastore_count()
            limit = configindb.Query_Config['query_limit_upset']
            querycount = count if count <= limit else limit
            records = capbase.query(Metastore).limit(querycount).all()
            resultlist = []
            for record in records:
                resultlist.append(record.name)
            return resultlist
        except Exception as exp:
            log.error('Exception at metastore.get_all_Metastore_names() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_Metastore_count(self):
        try:
            return capbase.query(Metastore).count()
        except Exception as exp:
            log.error('Exception at metastore.get_Metastore_count() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_all_Metastore(self):
        try:
            count = self.get_Metastore_count()
            limit = configindb.Query_Config['query_limit_upset']
            querycount = count if count <= limit else limit
            records = capbase.query(Metastore).limit(querycount).all()
            resultlist = []
            for record in records:
                resultlist.append(record.json)
            return resultlist
        except Exception as exp:
            log.error('Exception at metastore.get_all_Metastore() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_Metastore_bykey(self,keystr):
        try:
            returnjson = {}
            returnjson['count'] = 0
            returnjson['data'] = []
            if capbase.has(Metastore,keystr):
                record = capbase.query(Metastore).by_key(keystr)
                #returnjson['count'] = 1
                #returnjson['data'].append(record.json)
                returnjson = record.json
            return returnjson
        except Exception as exp:
            log.error('Exception at metastore.get_Metastore_bykey() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def get_Metastore_byname(self,name):
        try:
            returnjson = {}
            returnjson['count'] = 0
            returnjson['data'] = []
            if capbase.has(Metastore,name):
                records = capbase.query(Metastore).filter("name=='"+name+"'").all()
                if len(records) >= 1:
                    #returnjson['count'] = 1
                    #returnjson['data'].append(records[0].json)
                    returnjson = records[0].json
            return returnjson
        except Exception as exp:
            log.error('Exception at metastore.get_Metastore_bykey() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def update_Metastore(self, jsonobj):
        try:
            updatejson = jsonobj
            if not updatejson.__contains__('_key'):
                updatejson['_key'] = updatejson['name']
            if capbase.has(Metastore, updatejson['_key']):
                updobj = Metastore._load(updatejson)
                capbase.update(updobj)
                return updobj.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at metastore.update_Metastore() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def delete_Metastore(self,keystr):
        try:
            if capbase.has(Metastore, keystr):
                return capbase.delete(capbase.query(Metastore).by_key(keystr))
            else:
                return None
        except Exception as exp:
            log.error('Exception at metastore.delete_Metastore() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def query_Metastore(self,queryjson):
        try:
            filter = queryjson['filter'] if 'filter' in queryjson else None
            filteror = queryjson['filteror'] if 'filteror' in queryjson else None
            sort = queryjson['sort'] if 'sort' in queryjson else None
            limit = queryjson['limit'] if 'limit' in queryjson else None
            offset = queryjson['offset'] if 'offset' in queryjson else None
            query = capbase.query(Metastore)
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
            log.error('Exception at metastore.query_Metastore() %s ' % exp)
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
    ms = Metastore()
    ms.has_Metastore_Collection()
