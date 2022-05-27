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

class Customer_Ownership(SQLModel, table=True):
    purchase_date: date = Field(sa_column=Column("purchase_date", default=None, primary_key=False))
    purchase_price: int = Field(sa_column=Column("purchase_price", default=None, primary_key=False))
    warantee_expire_date: Optional[date] = Field(sa_column=Column("warantee_expire_date", default=None, primary_key=False))
    dealer_id: int = Field(sa_column=Column("dealer_id", default=None, primary_key=False))
    customer_id: Optional[int] = Field(default=None, primary_key=True)
    vin: Optional[int] = Field(default=None, primary_key=True)

    def sortJson(self):
        return self.json(sort_keys=True)

    def getTableSchema(self):
        return meta.gettable('Customer_Ownership')

    def getPrimaryKeys(self):
        return meta.gettable('Customer_Ownership').primarykeys

    def getPKType(self,pkname):
        return meta.get_table_pk_type('Customer_Ownership',pkname)

    def getpkqmneed(self,pkname):
        return meta.get_table_pk_qmneed('Customer_Ownership',pkname)