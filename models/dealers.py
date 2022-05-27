#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus

from typing import Optional
from sqlalchemy import Column, VARCHAR
from sqlmodel import Field, SQLModel
from datetime import date, timedelta, time, datetime
import decimal

from config import config
from core.dbmeta import DBMeta
from util.log import log as log
from config.config import config
from core.dbconfig import configindb

'''meta'''
meta = DBMeta()

class Dealers(SQLModel, table=True):
    dealer_name: str = Field(sa_column=Column("dealer_name", default=None, primary_key=False))
    dealer_address: Optional[str] = Field(sa_column=Column("dealer_address", default=None, primary_key=False))
    dealer_id: Optional[int] = Field(default=None, primary_key=True)

    def sortJson(self):
        return self.json(sort_keys=True)

    def getTableSchema(self):
        return meta.gettable('Dealers')

    def getPrimaryKeys(self):
        return meta.gettable('Dealers').primarykeys

    def getPKType(self,pkname):
        return meta.get_table_pk_type('Dealers',pkname)

    def getpkqmneed(self,pkname):
        return meta.get_table_pk_qmneed('Dealers',pkname)