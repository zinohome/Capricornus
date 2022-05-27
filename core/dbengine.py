#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus
from config.config import config
from core.dbconfig import configindb
from util.log import log as log
from urllib import parse
from sqlalchemy import create_engine
from util import toolkit

def singleton(class_):
    instances = {}

    def getinstance(*args, **kwargs):
        if class_ not in instances:
            instances[class_] = class_(*args, **kwargs)
        return instances[class_]
    return getinstance

@singleton
class DBEngine(object):
    def __init__(self):
        uri = ''
        if configindb.Database_Config['db_gendburi']:
            uri = str(toolkit.gen_dburi())
        else:
            olduri = configindb.Database_Config['db_uri']
            if 'UNQUOTEPASSWORD' in olduri:
                uri = olduri.replace("UNQUOTEPASSWORD", parse.unquote_plus(configindb.Database_Config['db_password']))
            else:
                uri = olduri
        log.debug('Connect use uri [ %s ]' % uri)
        if configindb.Database_Config['db_dialect'] == 'oracle':
            self.__engine = create_engine(uri,
                                          echo=False,
                                          pool_size=configindb.Connection_Config['con_pool_size'],
                                          max_overflow=configindb.Connection_Config['con_max_overflow'],
                                          pool_use_lifo=configindb.Connection_Config['con_pool_use_lifo'],
                                          pool_pre_ping=configindb.Connection_Config['con_pool_pre_ping'],
                                          pool_recycle=configindb.Connection_Config['con_pool_recycle'],
                                          exclude_tablespaces=toolkit.to_list(configindb.Database_Config['db_exclude_tablespaces']))
        elif configindb.Database_Config['db_dialect'] == 'sqlite':
            self.__engine = create_engine(uri,
                                          echo=False,
                                          pool_pre_ping=configindb.Connection_Config['con_pool_pre_ping'],
                                          pool_recycle=configindb.Connection_Config['con_pool_recycle'])
        else:
            self.__engine = create_engine(uri,
                                          echo=False,
                                          pool_size=configindb.Connection_Config['con_pool_size'],
                                          max_overflow=configindb.Connection_Config['con_max_overflow'],
                                          pool_use_lifo=configindb.Connection_Config['con_pool_use_lifo'],
                                          pool_pre_ping=configindb.Connection_Config['con_pool_pre_ping'],
                                          pool_recycle=configindb.Connection_Config['con_pool_recycle'])

    def connect(self):
        return self.__engine

if __name__ == '__main__':

    engine = DBEngine().connect()
    print(engine.__class__)
    #print(engine.pool.size())
    for item in dir(engine):
        print(item)
