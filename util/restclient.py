#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus

import asyncio
import operator
import traceback

from datetime import datetime, timedelta
from config.config import config
from core.dbconfig import configindb
from util.log import log as log
import simplejson as json

from util.simple_rest_client.api import API


class CapricornusClient():
    def __init__(self, username, password):
        self._username = username
        self._password = password
        self._lastlogin = 0
        self._token_expired = True
        self._access_token = None
        self._token_type = 'bearer'
        httpstr = 'https' if configindb.Application_Config['app_admin_use_https'] else 'http'
        self._api_root_url = httpstr + '://127.0.0.1:' + str(configindb.Application_Config['app_https_port']) + configindb.Application_Config['app_prefix'] + '/' if configindb.Application_Config['app_admin_use_https'] else httpstr + '://127.0.0.1:' + str(configindb.Application_Config['app_http_port']) + configindb.Application_Config['app_prefix'] + '/'
        self._api_client = API(api_root_url = self._api_root_url, params = {}, headers = {}, timeout = configindb.Application_Config['app_http_timeout'], append_slash = False, json_encode_body = False, ssl_verify=False)


    @property
    def username(self):
        return self._username

    @property
    def password(self):
        return self._password

    @property
    def lastlogin(self):
        return self._lastlogin

    @property
    def token_expired(self):
        if self._lastlogin == 0:
            self._token_expired = True
        else:
            self._token_expired = datetime.utcnow() - self._lastlogin > timedelta(minutes=configindb.Security_Config['access_token_expire_minutes'] - 1)
        return self._token_expired

    @property
    def access_token(self):
        return self._access_token

    @property
    def token_type(self):
        return self._token_type

    @property
    def api_root_url(self):
        return self._api_root_url

    def renew_token(self):
        api = self._api_client
        api.add_resource(resource_name='token')
        request_body = {"username": self.username,"password": self.password}
        try:
            response = api.token.create(body = request_body)
            if response.status_code == 200:
                self._access_token = response.body['access_token']
                self._token_type = response.body['token_type']
                self._lastlogin = datetime.utcnow()
            else:
                log.error('Can not get renew_token at renew_token() ... ')
                raise Exception('Can not get renew_token at renew_token()')
        except Exception as exp:
            log.error('Exception at renew_token() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def user_login(self):
        login_pass = False
        api = self._api_client
        api.add_resource(resource_name='token')
        request_body = {"username": self.username,"password": self.password}
        try:
            response = api.token.create(body = request_body)
            log.debug(response)
            if response.status_code == 200:
                self._access_token = response.body['access_token']
                self._token_type = response.body['token_type']
                self._lastlogin = datetime.utcnow()
                login_pass = True
            else:
                log.error('Can not get user login at user_login() ... ')
        except Exception as exp:
            log.error('Exception at user_login() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()
        return login_pass

    def fetchusers(self):
        api = self._api_client
        api.headers = {'Authorization': 'Bearer ' + self.access_token}
        api.api_root_url = self.api_root_url
        api.add_resource(resource_name='users')
        try:
            response = api.users.list()
            return response.body
        except Exception as exp:
            log.error('Exception at fetchusers() %s ' % exp)
            if config('app_exception_detail', cast=bool, default=True):
                traceback.print_exc()

    def fetch(self, resource_name, url_prefix='', body=None, offset=None, limit=None, withcounters=None):
        action = 'list'
        if self.token_expired:
            self.renew_token()
        if (not self.token_expired) and (self.access_token is not None):
            # log.debug('access_token : %s' % self.access_token)
            api = self._api_client
            api.headers = {'Authorization': 'Bearer ' + self.access_token}
            if offset is not None:
                api.headers['offset'] = str(offset)
            if limit is not None:
                api.headers['limit'] = str(limit)
            if withcounters is not None:
                api.headers['include-count'] = str(withcounters)
            api.api_root_url = self.api_root_url + url_prefix
            api.add_resource(resource_name=resource_name)
            try:
                res = api._resources[api.correct_attribute_name(resource_name)]
                #res = api._resources[resource_name]
                #log.debug(res.actions)
                #log.debug(res.get_action_full_url(action))
                #log.debug(res.get_action(action))
                func = getattr(res,action)
                response = None
                if body is not None:
                    response = func(body)
                else:
                    response = func()
                res = {'code': response.status_code, 'body': response.body}
                return res
            except Exception as exp:
                log.error('Exception at fetch() %s ' % exp)
                if config('app_exception_detail', cast=bool, default=True):
                    traceback.print_exc()

    def post(self, resource_name, url_prefix='', body=None):
        log.debug(body)
        action = 'create'
        if self.token_expired:
            self.renew_token()
        if (not self.token_expired) and (self.access_token is not None):
            # log.debug('access_token : %s' % self.access_token)
            api = self._api_client
            api.headers = {'Authorization': 'Bearer ' + self.access_token}
            api.api_root_url = self.api_root_url + url_prefix
            api.add_resource(resource_name=resource_name)
            try:
                res = api._resources[api.correct_attribute_name(resource_name)]
                #res = api._resources[resource_name]
                func = getattr(res,action)
                response = None
                if body is not None:
                    response = func(body=body)
                    res = {'code': response.status_code, 'body': response.body}
                else:
                    res = {'code': response.status_code, 'body': response.body}
                return res
            except Exception as exp:
                log.error('Exception at post() %s ' % exp)
                if config('app_exception_detail', cast=bool, default=True):
                    traceback.print_exc()


    def put(self, resource_name, url_prefix='', body=None, idvalue=None):
        log.debug(body)
        action = 'update'
        if self.token_expired:
            self.renew_token()
        if (not self.token_expired) and (self.access_token is not None):
            # log.debug('access_token : %s' % self.access_token)
            api = self._api_client
            api.headers = {'Authorization': 'Bearer ' + self.access_token}
            api.api_root_url = self.api_root_url + url_prefix
            api.add_resource(resource_name=resource_name, full_action_url=api.api_root_url + '/' + resource_name + '/' + idvalue)
            try:
                res = api._resources[api.correct_attribute_name(resource_name)]
                #res = api._resources[resource_name]
                func = getattr(res,action)
                response = None
                if body is not None:
                    response = func(body=body)
                    res = {'code': response.status_code, 'body': response.body}
                else:
                    res = {'code': response.status_code, 'body': response.body}
                return res
            except Exception as exp:
                log.error('Exception at post() %s ' % exp)
                if config('app_exception_detail', cast=bool, default=True):
                    traceback.print_exc()


    def deletebyid(self, resource_name, url_prefix='', idfield=None, idvalue=None):
        action = 'destroy'
        if self.token_expired:
            self.renew_token()
        if (not self.token_expired) and (self.access_token is not None):
            # log.debug('access_token : %s' % self.access_token)
            api = self._api_client
            api.headers = {'Authorization': 'Bearer ' + self.access_token}
            if idfield is not None:
                api.headers['idfield'] = str(idfield)
            api.api_root_url = self.api_root_url + url_prefix
            api.add_resource(resource_name=resource_name, full_action_url=api.api_root_url + '/' + resource_name + '/' + idvalue)
            try:
                res = api._resources[api.correct_attribute_name(resource_name)]
                #res = api._resources[resource_name]
                # log.debug(res.actions)
                # log.debug(res.get_action_full_url(action))
                # log.debug(res.get_action(action))
                func = getattr(res,action)
                response = None
                response = func()
                res = {'code':response.status_code, 'body':response.body}
                return res
            except Exception as exp:
                log.error('Exception at deletebyid() %s ' % exp)
                if config('app_exception_detail', cast=bool, default=True):
                    traceback.print_exc()


if __name__ == '__main__':
    nc = CapricornusClient('admin', 'admin')
    log.debug(nc.user_login())
    nc.renew_token()
    if nc.token_expired:
        nc.renew_token()
    if ( not nc.token_expired ) and ( nc.access_token is not None ):
        log.debug(nc.fetchusers())
        ncdb = nc.fetch('database','_schema')
        log.debug(ncdb)
        ncmeta = nc.fetch('Brands', '_schema/_table')
        log.debug(ncmeta)
        resultstr = nc.fetch('Customer_Ownership','_schema/_table')
        log.debug(resultstr)
        resultstr = nc.fetch('Customer_Ownership', '_table', None, 0, 5, True)
        log.debug(resultstr)
        resultstr = nc.post('Brands', '_table', json.dumps({"data": [{"brand_name":"Mini"}]}))
        log.debug(resultstr)
        resultstr = nc.put('Brands', '_table', json.dumps({"data": {"brand_name": "MG"}, "ids": "brand_id"}), str(resultstr['body']['ids'][0]['brand_id']))
        log.debug(resultstr)
        log.debug(resultstr['body']['brand_id'])
        idfield = 'Customers.id,Customers.id2'
        table_name = 'Customers'
        shortidfield = idfield.replace(table_name+'.','') if operator.contains(idfield,table_name+'.') else idfield
        log.debug(shortidfield)
        idfield = 'id,id2'
        longidfield = idfield if operator.contains(idfield,table_name+'.') else table_name+'.'+(','+table_name+'.').join(idfield.split(','))
        log.debug(longidfield)
        resultstr = nc.deletebyid('Brands', '_table', 'brand_id', str(resultstr['body']['brand_id']))
        log.debug(resultstr)
        idks = ['brand_id']
        ids = [8]
        log.debug(",".join(idks))
        log.debug("-".join(list(map(str, ids))))