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

class Car_Options(SQLModel, table=True):
    model_id: Optional[int] = Field(sa_column=Column("model_id", default=None, primary_key=False))
    engine_id: int = Field(sa_column=Column("engine_id", default=None, primary_key=False))
    transmission_id: int = Field(sa_column=Column("transmission_id", default=None, primary_key=False))
    chassis_id: int = Field(sa_column=Column("chassis_id", default=None, primary_key=False))
    premium_sound_id: Optional[int] = Field(sa_column=Column("premium_sound_id", default=None, primary_key=False))
    color: str = Field(sa_column=Column("color", default=None, primary_key=False))
    option_set_price: int = Field(sa_column=Column("option_set_price", default=None, primary_key=False))
    option_set_id: Optional[int] = Field(default=None, primary_key=True)

    def sortJson(self):
        return self.json(sort_keys=True)

    def getTableSchema(self):
        return meta.gettable('Car_Options')

    def getPrimaryKeys(self):
        return meta.gettable('Car_Options').primarykeys

    def getPKType(self,pkname):
        return meta.get_table_pk_type('Car_Options',pkname)

    def getpkqmneed(self,pkname):
        return meta.get_table_pk_qmneed('Car_Options',pkname)