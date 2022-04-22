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
import json
import traceback

from util import log
from config import config

'''config'''
cfg = config.app_config

'''logging'''
log = log.Logger(level=cfg['Application_Config'].app_log_level)


def singleton(class_):
    instances = {}

    def getinstance(*args, **kwargs):
        if class_ not in instances:
            instances[class_] = class_(*args, **kwargs)
        return instances[class_]
    return getinstance


@singleton
class Users(object):
    def __init__(self):
        auth_dir = os.path.dirname(os.path.abspath(__file__))
        try:
            with open(os.path.join(auth_dir, 'users.json'), 'r') as usersfile:
                self.users = json.loads(usersfile.read())
        except Exception as err:
            log.logger.error('Exception load Users file %s ' % err)
            if cfg['Application_Config'].app_exception_detail:
                traceback.print_exc()

    def deluser(self,username):
        auth_dir = os.path.dirname(os.path.abspath(__file__))
        try:
            with open(os.path.join(auth_dir, 'users.json'), 'r') as usersfile:
                self.users = json.loads(usersfile.read())
                self.users.pop(username)
        except Exception as err:
            log.logger.error('Exception load Users file %s ' % err)
            if cfg['Application_Config'].app_exception_detail:
                traceback.print_exc()

    def writeback(self):
        auth_dir = os.path.dirname(os.path.abspath(__file__))
        try:
            with open(os.path.join(auth_dir, 'users.json'), 'w', encoding='utf-8') as usersfile:
                json.dump(self.users,usersfile,indent=4,ensure_ascii=False)
        except Exception as err:
            log.logger.error('Exception writeback Users file %s ' % err)
            if cfg['Application_Config'].app_exception_detail:
                traceback.print_exc()

    def reload(self):
        auth_dir = os.path.dirname(os.path.abspath(__file__))
        try:
            with open(os.path.join(auth_dir, 'users.json'), 'r') as usersfile:
                self.users = json.loads(usersfile.read())
        except Exception as err:
            log.logger.error('Exception reload Users file %s ' % err)
            if cfg['Application_Config'].app_exception_detail:
                traceback.print_exc()


if __name__ == '__main__':
    log.logger.info('Users().users ==> %s' % Users().users)
    log.logger.info('json.dumps(Users().users) ==> %s' % json.dumps(Users().users))
    Users().writeback()
    userslist = list(Users().users.values())
    userskeylist = list(list(Users().users.values())[0].keys())
    log.logger.info('userslist ==> %s' % userslist)
    log.logger.info('userskeylist ==> %s' % userskeylist)
    log.logger.info('len(userslist) ==> %s' % len(userslist))

