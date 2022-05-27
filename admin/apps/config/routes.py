#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import distutils

from flask import render_template, request, redirect, session
from flask_login import login_required
from jinja2 import TemplateNotFound

from admin.apps.authentication.forms import LoginForm
from admin.apps.config import blueprint
from flask import Response
import json
import configparser
import os

from core import dbmeta
from core.pagedef import Pagedef
from core.users import Users
from util.log import log as log
from config.config import config
from core.dbconfig import configindb, Dbconfig
from util import genpwd, restclient, cryptutil


@blueprint.route('/settings-config.html',  methods = ['GET', 'POST'])
@login_required
def settingsconfig():
    try:
        sysdbmeta = dbmeta.DBMeta()
        systables = sysdbmeta.get_tables()
        sysviews = sysdbmeta.get_views()
        confignamelist = list(configindb.__dict__.keys())
        cfgjson = {}
        for cfgname in confignamelist:
            cfgjson[cfgname] = getattr(configindb,cfgname)
        cfgini = {}
        for cfgname in confignamelist:
            cfgitem = getattr(configindb,cfgname)
            for key in list(cfgitem.keys()):
                cfgini[key] = cfgitem[key]
        return render_template('home/settings-config.html', segment='settings-config', systables=systables, sysviews=sysviews, confignamelist=confignamelist, cfgjson=cfgjson, cfgini=cfgini)
    except TemplateNotFound:
        return render_template('home/page-404.html'), 404
    except Exception as exp:
        log.error('Exception at route config() %s ' % exp)
        return render_template('home/page-500.html'), 500

@blueprint.route('/settings-config/savedata',  methods = ['POST', 'GET'])
@login_required
def configSaveData():
    if request.method == 'POST':
        submitdict = request.form.copy()
        dict_Application_Config = {}
        dict_Application_Config['app_name'] = configindb.Application_Config['app_name']
        dict_Application_Config['app_version'] = configindb.Application_Config['app_version']
        dict_Application_Config['app_description'] = configindb.Application_Config['app_description']
        dict_Application_Config['app_param_prefix'] = configindb.Application_Config['app_param_prefix']
        dict_Security_Config = {}
        dict_Security_Config['security_key'] = submitdict['security_key']
        dict_Security_Config['security_algorithm'] = submitdict['security_algorithm']
        dict_Security_Config['access_token_expire_minutes'] = int(submitdict['access_token_expire_minutes'])
        dict_Admin_Config = {}
        dict_Admin_Config['DEBUG'] = True if submitdict['DEBUG'].lower()=='true' else False if submitdict['DEBUG'].lower()=='false' else submitdict['DEBUG']
        dict_Admin_Config['SECRET_KEY'] = submitdict['SECRET_KEY']
        dict_Admin_Config['SESSION_COOKIE_HTTPONLY'] = True if submitdict['SESSION_COOKIE_HTTPONLY'].lower()=='true' else False if submitdict['SESSION_COOKIE_HTTPONLY'].lower()=='false' else submitdict['SESSION_COOKIE_HTTPONLY']
        dict_Admin_Config['REMEMBER_COOKIE_HTTPONLY'] = True if submitdict['REMEMBER_COOKIE_HTTPONLY'].lower()=='true' else False if submitdict['REMEMBER_COOKIE_HTTPONLY'].lower()=='false' else submitdict['REMEMBER_COOKIE_HTTPONLY']
        dict_Admin_Config['REMEMBER_COOKIE_DURATION'] = int(submitdict['REMEMBER_COOKIE_DURATION'])
        dict_Admin_Config['admin_ignore_primary_key'] = True if submitdict['admin_ignore_primary_key'].lower()=='true' else False if submitdict['admin_ignore_primary_key'].lower()=='false' else submitdict['admin_ignore_primary_key']
        dict_Schema_Config = {}
        dict_Query_Config = {}
        dict_Database_Config = {}
        dict_Connection_Config = {}
        for key in submitdict.keys():
            if key.startswith('app_'):
                if submitdict[key].isnumeric():
                    dict_Application_Config[key] = int(submitdict[key])
                else:
                    dict_Application_Config[key] = True if submitdict[key].lower()=='true' else False if submitdict[key].lower()=='false' else submitdict[key]
            if key.startswith('schema_'):
                if submitdict[key].isnumeric():
                    dict_Schema_Config[key] = int(submitdict[key])
                else:
                    dict_Schema_Config[key] = True if submitdict[key].lower()=='true' else False if submitdict[key].lower()=='false' else submitdict[key]
            if key.startswith('query_'):
                if submitdict[key].isnumeric():
                    dict_Query_Config[key] = int(submitdict[key])
                else:
                    dict_Query_Config[key] = True if submitdict[key].lower()=='true' else False if submitdict[key].lower()=='false' else submitdict[key]
            if key.startswith('db_'):
                if submitdict[key].isnumeric():
                    dict_Database_Config[key] = int(submitdict[key])
                else:
                    dict_Database_Config[key] = True if submitdict[key].lower()=='true' else False if submitdict[key].lower()=='false' else submitdict[key]
            if key.startswith('con_'):
                if submitdict[key].isnumeric():
                    dict_Connection_Config[key] = int(submitdict[key])
                else:
                    dict_Connection_Config[key] = True if submitdict[key].lower()=='true' else False if submitdict[key].lower()=='false' else submitdict[key]
        setattr(configindb, 'Application_Config', dict_Application_Config)
        setattr(configindb, 'Schema_Config', dict_Schema_Config)
        setattr(configindb, 'Query_Config', dict_Query_Config)
        setattr(configindb, 'Security_Config', dict_Security_Config)
        setattr(configindb, 'Database_Config', dict_Database_Config)
        setattr(configindb, 'Connection_Config', dict_Connection_Config)
        setattr(configindb, 'Admin_Config', dict_Admin_Config)
        dc = Dbconfig()
        dc.updateDbconfig(configindb.cfgjson)
        return redirect(request.referrer)


@blueprint.route('/settings-users.html',  methods = ['GET', 'POST'])
@login_required
def userstable():
    try:
        nc = restclient.CapricornusClient(session['username'],
                                          cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
        if nc.token_expired:
            nc.renew_token()
        if (not nc.token_expired) and (nc.access_token is not None):
            sysdbmeta = dbmeta.DBMeta()
            systables = sysdbmeta.get_tables()
            sysviews = sysdbmeta.get_views()
            userskeylist = ['Username','Fullname','Email','Role','Hashed_Password','Disabled']
            return render_template('home/settings-users.html', segment='settings-users',
                               systables=systables, sysviews=sysviews, userskeylist=userskeylist)
        else:
            return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())
    except TemplateNotFound:
        return render_template('home/page-404.html'), 404
    except:
        return render_template('home/page-500.html'), 500

@blueprint.route('/settings-users/data',  methods = ['GET', 'POST'])
@login_required
def usersdata():
    nc = restclient.CapricornusClient(session['username'],
                                      cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
    if nc.token_expired:
        nc.renew_token()
    if (not nc.token_expired) and (nc.access_token is not None):
        if request.method == 'GET':  # list
            sysusers = Users()
            count = sysusers.getUserscount()
            queryjson = {'sort': 'username','offset':request.args.get('start', type=int),'limit':request.args.get('length', type=int)}
            userrecord = sysusers.queryUsers(queryjson)
            rdata = {
                'data': userrecord['data'],
                'recordsFiltered': count,
                'recordsTotal': count,
                'draw': request.args.get('draw', type=int),
            }
            #log.debug(rdata)
            return rdata
        elif request.method == 'POST':
            # form data
            action = request.form.get('action', type=str)
            reqdict = request.form.to_dict()
            formdict = {}
            for (key, value) in reqdict.items():
                if '][' in key:
                    formdict[key.split(']')[1][1:]] = value
            if action == 'create':
                if not formdict['hashed_password'] == formdict['password_repeat']:
                    return Response('{"status":500, "password must equal with password_repeat! "}', status=500)
                else:
                    if (len(formdict['hashed_password'].strip()) == 0) or (len(formdict['password_repeat'].strip()) == 0):
                        return Response('{"status":500, "password must input ! "}', status=500)
                    else:
                        if "Authentication" in Users().getUsersbyname(formdict['username']):
                            formdict['hashed_password'] = genpwd.get_password_hash(formdict['hashed_password'])
                            useradd = Users().createUsers(formdict)
                            return Response(json.dumps({'data':useradd}), status=200)
                        else:
                            return Response('{"status":500, "User already exists ! "}', status=500)
            elif action == 'edit':
                if not formdict['hashed_password'] == formdict['password_repeat']:
                    return Response('{"status":500, "password must equal with password_repeat! "}', status=500)
                else:
                    if (len(formdict['hashed_password'].strip()) == 0) or (
                            len(formdict['password_repeat'].strip()) == 0):
                        return Response('{"status":500, "password must input ! "}', status=500)
                    else:
                        if "Authentication" in Users().getUsersbyname(formdict['username']):
                            return Response('{"status":500, "Can not change username ! "}', status=500)
                        else:
                            formdict['hashed_password'] = genpwd.get_password_hash(formdict['hashed_password'])
                            moduser = Users().updateUsers(formdict)
                            return Response(json.dumps({'data': moduser}), status=200)

            elif action == 'remove':
                if "Authentication" in Users().getUsersbyname(formdict['username']):
                    return Response('{"status":500, "User does not exists ! "}', status=500)
                else:
                    deluser = Users().deleteUsers(formdict['username'])
                    return Response(json.dumps({'data':deluser}), status=200)
    else:
        return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())

@blueprint.route('/settings-pagedef.html',  methods = ['GET', 'POST'])
@login_required
def pagedeftable():
    try:
        nc = restclient.CapricornusClient(session['username'],
                                          cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
        if nc.token_expired:
            nc.renew_token()
        if (not nc.token_expired) and (nc.access_token is not None):
            sysdbmeta = dbmeta.DBMeta()
            systables = sysdbmeta.get_tables()
            sysviews = sysdbmeta.get_views()
            pagedefinekeylist = ['Name','PageType','PageDefine','CreateDate']
            return render_template('home/settings-pagedef.html', segment='settings-pagedef',
                               systables=systables, sysviews=sysviews, pagedefinekeylist=pagedefinekeylist)
        else:
            return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())
    except TemplateNotFound:
        return render_template('home/page-404.html'), 404
    except:
        return render_template('home/page-500.html'), 500

@blueprint.route('/settings-pagedef/data',  methods = ['GET', 'POST'])
@login_required
def pagedefdata():
    nc = restclient.CapricornusClient(session['username'],
                                      cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
    if nc.token_expired:
        nc.renew_token()
    if (not nc.token_expired) and (nc.access_token is not None):
        if request.method == 'GET':  # list
            pgdf = Pagedef()
            count = pgdf.get_Pagedef_count()
            queryjson = {'sort': 'name','offset':request.args.get('start', type=int),'limit':request.args.get('length', type=int)}
            pgdfrecord = pgdf.query_Pagedef(queryjson)
            for item in pgdfrecord['data']:
                item['createdate']=str(item['createdate'])
            rdata = {
                'data': pgdfrecord['data'],
                'recordsFiltered': count,
                'recordsTotal': count,
                'draw': request.args.get('draw', type=int),
            }
            #log.debug(rdata)
            return rdata
        elif request.method == 'POST':
            # form data
            action = request.form.get('action', type=str)
            reqdict = request.form.to_dict()
            formdict = {}
            for (key, value) in reqdict.items():
                if '][' in key:
                    formdict[key.split(']')[1][1:]] = value
            if action == 'create':
                if "count" in Pagedef().get_Pagedef_byname(formdict['name']):
                    pgdfadd = Pagedef().create_Pagedef(formdict)
                    pgdfadd['createdate'] = str(pgdfadd['createdate'])
                    return Response(json.dumps({'data':pgdfadd}), status=200)
                else:
                    return Response('{"status":500, "PageDefine already exists ! "}', status=500)
            elif action == 'edit':
                if "count" in Pagedef().get_Pagedef_byname(formdict['name']):
                    return Response('{"status":500, "Can not change PageDef name ! "}', status=500)
                else:
                    pgdfmod = Pagedef().update_Pagedef(formdict)
                    pgdfmod['createdate'] = str(pgdfmod['createdate'])
                    return Response(json.dumps({'data': pgdfmod}), status=200)

            elif action == 'remove':
                if "count" in Pagedef().get_Pagedef_byname(formdict['name']):
                    return Response('{"status":500, "PageDefine does not exists ! "}', status=500)
                else:
                    pgdfdel = Pagedef().delete_Pagedef(formdict['name'])
                    return Response(json.dumps({'data':pgdfdel}), status=200)
    else:
        return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())
