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

class Models(SQLModel, table=True):
    model_name: str = Field(sa_column=Column("model_name", default=None, primary_key=False))
    model_base_price: int = Field(sa_column=Column("model_base_price", default=None, primary_key=False))
    brand_id: int = Field(sa_column=Column("brand_id", default=None, primary_key=False))
    model_id: Optional[int] = Field(default=None, primary_key=True)

    def sortJson(self):
        return self.json(sort_keys=True)

    def getTableSchema(self):
        return meta.gettable('Models')

    def getPrimaryKeys(self):
        return meta.gettable('Models').primarykeys

    def getPKType(self,pkname):
        return meta.get_table_pk_type('Models',pkname)

    def getpkqmneed(self,pkname):
        return meta.get_table_pk_qmneed('Models',pkname)