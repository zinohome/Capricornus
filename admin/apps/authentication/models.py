#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#  #
#  Copyright (C) 2021 ZinoHome, Inc. All Rights Reserved
#  #
#  @Time    : 2021
#  @Author  : Zhang Jun
#  @Email   : ibmzhangjun@139.com
#  @Software: Capricornus

from flask_login import UserMixin
import simplejson as json
from admin.apps import login_manager
from core import users as sysusers
from util.restclient import CapricornusClient

class Users(UserMixin):

    __tablename__ = 'users'

    def __init__(self, username):
        self.username = username
        self.password = None
        self.full_name = None
        self.email = None
        self.hashed_password = None
        self.role = None
        self.disabled = None
        sc = sysusers.Users()
        udict = sc.getUsersbyname(username)
        if udict is not None:
            self.full_name = udict['full_name']
            self.email = udict['email']
            self.hashed_password = udict['hashed_password']
            self.role = udict['role']
            self.disabled = udict['disabled']

    def __repr__(self):
        return str(self.username)

    def get_id(self):
        return self.username

    def user_login(self):
        nc = CapricornusClient(self.username, self.password)
        logined = nc.user_login()
        return logined

    def get_id(self):
        return self.username

    @staticmethod
    def get(user_id):
        if not user_id:
            return None
        else:
            return Users(user_id)

@login_manager.user_loader
def user_loader(id):
    return Users.get(id)


@login_manager.request_loader
def request_loader(request):
    username = request.form.get('username')
    user = Users.get(username)
    return user if user else None