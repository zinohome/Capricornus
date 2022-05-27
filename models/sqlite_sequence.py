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

class sqlite_sequence(SQLModel, table=True):
    name: Optional[str] = Field(sa_column=Column("name", default=None, primary_key=False))
    seq: Optional[str] = Field(sa_column=Column("seq", default=None, primary_key=False))

    def sortJson(self):
        return self.json(sort_keys=True)

    def getTableSchema(self):
        return meta.gettable('sqlite_sequence')

    def getPrimaryKeys(self):
        return meta.gettable('sqlite_sequence').primarykeys

    def getPKType(self,pkname):
        return meta.get_table_pk_type('sqlite_sequence',pkname)

    def getpkqmneed(self,pkname):
        return meta.get_table_pk_qmneed('sqlite_sequence',pkname)