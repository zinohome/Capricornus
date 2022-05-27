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

from arango_orm import Collection
from marshmallow.fields import String, Bool
from core.arangobase import capbase
import simplejson as json
from config.config import config
from util.genpwd import get_password_hash, verify_password
from util.log import log as log

class Users(Collection):
    __collection__ = 'users'
    _index = [{'type':'hash', 'fields':['username'], 'unique':True}]
    _key = String(required=True)
    username = String(required=True, allow_none=False)
    full_name = String(required=True, allow_none=False)
    email = String(required=True, allow_none=False)
    hashed_password = String(required=True, allow_none=False)
    role = String(required=True, allow_none=False)
    disabled = Bool(required=True, allow_none=False)

    def getUserscount(self):
        try:
            return capbase.query(Users).count()
        except Exception as exp:
            log.error('Exception at users.getUserscount() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def createUsers(self, jsonstr):
        try:
            addjson = jsonstr
            if not addjson.__contains__('_key'):
                addjson['_key'] = addjson['username']
            if not capbase.has(Users, addjson['_key']):
                addobj = Users._load(addjson)
                capbase.add(addobj)
                return addobj.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at users.createUsers() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def getUsersbykey(self,keystr):
        try:
            if capbase.has(Users,keystr):
                record = capbase.query(Users).by_key(keystr)
                return record.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at users.getUsersbykey() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def updateUsers(self, jsonstr):
        try:
            updatejson = jsonstr
            if not updatejson.__contains__('_key'):
                updatejson['_key'] = updatejson['username']
            if capbase.has(Users, updatejson['_key']):
                updatejson = Users._load(updatejson)
                capbase.update(updatejson)
                return updatejson.json
            else:
                return None
        except Exception as exp:
            log.error('Exception at users.updateUsers() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def deleteUsers(self,keystr):
        try:
            if capbase.has(Users, keystr):
                return capbase.delete(capbase.query(Users).by_key(keystr))
            else:
                return None
        except Exception as exp:
            log.error('Exception at users.deleteUsers() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def queryUsers(self,queryjson):
        try:
            filter = queryjson['filter'] if 'filter' in queryjson else None
            filteror = queryjson['filteror'] if 'filteror' in queryjson else None
            sort = queryjson['sort'] if 'sort' in queryjson else None
            limit = queryjson['limit'] if 'limit' in queryjson else None
            offset = queryjson['offset'] if 'offset' in queryjson else None
            query = capbase.query(Users)
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
            log.error('Exception at users.queryUsers() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def userlogin(self,username,password):
        try:
            if capbase.has(Users,username):
                records = capbase.query(Users).filter("username=='"+username+"'").filter("disabled==False").all()
                if len(records) >= 1:
                    if verify_password(password, records[0].hashed_password):
                        authreturn = {"Authentication":True}
                        authreturn['username'] = records[0].username
                        authreturn['full_name'] = records[0].full_name
                        authreturn['email'] = records[0].email
                        authreturn['hashed_password'] = records[0].hashed_password
                        authreturn['role'] = records[0].role
                        authreturn['disabled'] = records[0].disabled
                        return authreturn
                    else:
                        return {"Authentication": False}
                else:
                    return {"Authentication": False}
            else:
                return {"Authentication":False}
        except Exception as exp:
            log.error('Exception at users.userlogin() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def getUsersbyname(self,username):
        try:
            if capbase.has(Users,username):
                records = capbase.query(Users).filter("username=='"+username+"'").all()
                if len(records) >= 1:
                    authreturn = {}
                    authreturn['username'] = records[0].username
                    authreturn['full_name'] = records[0].full_name
                    authreturn['email'] = records[0].email
                    authreturn['hashed_password'] = records[0].hashed_password
                    authreturn['role'] = records[0].role
                    authreturn['disabled'] = records[0].disabled
                    return authreturn
                else:
                    return {"Authentication":False}
            else:
                return {"Authentication":False}
        except Exception as exp:
            log.error('Exception at users.getUsersbyname() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def initsysUsers(self):
        # Only called at application start
        try:
            if not capbase.has_collection(Users):
                capbase.create_collection(Users)
            admin = Users(_key="admin", username="admin", full_name="Admin", email="admin@zino.com", hashed_password="$2b$12$WGpjvAAjcew9hylrN0RdBOuzFPhdpj9OBp4Hqkz3xLUXuBh72u7xu", role="Superadmin", disabled=False)
            reader = Users(_key="reader", username="reader", full_name="Reader", email="reader@zino.com", hashed_password="$2b$12$yXVcWEHglbxjF4STXnpFaeNhJ4mCxGpbPuDwHohg3V/wlbxG2tBQa", role="Reader", disabled=False)
            writer = Users(_key="writer", username="writer", full_name="Writer", email="writer@zino.com", hashed_password="$2b$12$keQAorYzGkrYU10ya9OwHuAlgtvueay.dHhqxtMWjYP4daGQXsjGO", role="Writer", disabled=False)
            if not capbase.has(Users, 'admin'):
                admin.createUsers(admin.json)
            if not capbase.has(Users, 'reader'):
                admin.createUsers(reader.json)
            if not capbase.has(Users, 'writer'):
                admin.createUsers(writer.json)
        except Exception as exp:
            log.error('Exception at users.initsysUsers() %s ' % exp)
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
    tu = Users()
    '''plain_password = 'passw0rd'
    hashed_password = get_password_hash(plain_password)
    print('The hashed password of [ %s ] is [ %s ]' % (plain_password, hashed_password))
    print('Verify again: [ %s ]' % verify_password(plain_password, hashed_password))'''
    tu.initsysUsers()
    queryjson = {'sort':'username'}
    log.debug(json.dumps(tu.queryUsers(queryjson)))
    log.debug(tu.getUsersbyname('ggg'))
