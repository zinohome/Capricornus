#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus


from pydantic import BaseModel, Required
from pydantic.class_validators import Optional
from pydantic.types import Json, List, Dict

from config import config

class TableQueryBody(BaseModel):
    queryfields: Optional[str] = '*'  # eg. "Customers.first_name,Customers.last_name,Customers.customer_id"
    distinct: Optional[bool] = False
    where_query: Optional[str] = None  # eg. "(Customers.first_name != :first_name OR Customers.household_income > :household_income)"
    where_bind: Optional[str] = None   # eg. "first_name=\'Tony\',household_income=8100"
    order_by: Optional[str] = None     # eg. "Customers.first_name ASC"
    group_by: Optional[str] = None
    limit: Optional[int] = 10
    offset: Optional[int] = 0
    include_count: Optional[bool] = True
    count_only: Optional[bool] = False
    class Config:
        title = 'Table Query Model'
        anystr_strip_whitespace = True

class TableBody(BaseModel):
    data: List[Dict] = None
    class Config:
        title = 'Table Model'
        anystr_strip_whitespace = True

class RecordBody(BaseModel):
    data: Dict = None
    class Config:
        title = 'Record Model'
        anystr_strip_whitespace = True

class PutRecordBody(BaseModel):
    data: Dict = None
    ids: str = None
    class Config:
        title = 'Put Record Model'
        anystr_strip_whitespace = True

