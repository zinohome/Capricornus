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

from arango import ArangoClient
from arango_orm import Database
from cachetools import LRUCache

from config.config import config
from util.log import log as log

Capricornusbase_Name = config('arangodb_app_profile_prefix', default = 'capricornus_')+config('app_profile', default = 'default')

class Arangobase:
    def __init__(self):
        log.info("Arangobase Connect to: %s" % config('arangodb_hosts', default = 'http://127.0.0.1:8529'))
        self._client = ArangoClient(hosts = config('arangodb_hosts', default = 'http://127.0.0.1:8529'))
        self._sysdb = self._client.db(name=config('arangodb_sysdatabase', default = '_system'), username=config('arangodb_sysuser', default = 'root'), password=config('arangodb_syspassword', default = 'passw0rd'))
        self._capdbexist = self._sysdb.has_database(Capricornusbase_Name)
        try:
            if not self._sysdb.has_database(Capricornusbase_Name):
                self._sysdb.create_database(
                    name = Capricornusbase_Name,
                    users = [{'username':config('arangodb_capuser', default = 'capricornus'), 'password':config('arangodb_cappassword', default = 'passw0rd'), 'active':True}])
        except Exception as exp:
            log.logger.error('Exception at Arangobase.__init__() %s ' % exp)
            if config('app_exception_detail', cast = bool, default = True):
                traceback.print_exc()
    @property
    def db(self):
        return Database(self._sysdb)

arangobase = Arangobase().db

class Capricornusbase:
    def __init__(self):
        log.info("Capricornusbase Connect to: %s" % config('arangodb_hosts', default='http://127.0.0.1:8529'))
        self._client = ArangoClient(hosts=config('arangodb_hosts', default='http://127.0.0.1:8529'))
        self._db = self._client.db(name=Capricornusbase_Name,
                                      username=config('arangodb_capuser', default='capricornus'),
                                      password=config('arangodb_cappassword', default='passw0rd'))
    @property
    def db(self):
        return Database(self._db)

capbase = Capricornusbase().db

if __name__ == '__main__':
    '''log.debug('Capricornusbase_Name: %s' % Capricornusbase_Name)
    log.debug('capbase: %s' % dir(capbase))'''
