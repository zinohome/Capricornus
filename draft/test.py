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
from util.log import log as log
from core.arangobase import capbase
if __name__ == '__main__':
    log.debug(config('app_name', default='Capricornus'))
    log.debug(config('app_version', default='v2.1.5'))
    log.debug(config('app_description', default='REST API for RDBMS'))
    log.debug(config('app_user_func', cast=bool))
    log.debug(config('arangodb_syspassword', default='passw0rd'))
    log.debug(capbase.has_collection('ddd'))