#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
from flask import render_template, request, session
from flask_login import login_required

from admin.apps.authentication.forms import LoginForm
from admin.apps.data import blueprint
from flask import Response

from core import dbmeta
from util import restclient, cryptutil

from util.log import log as log
from config.config import config
from core.dbconfig import configindb

@blueprint.route('/data-view-<viewname>.html',  methods = ['GET', 'POST'])
@login_required
def dataview(viewname):
    sysdbmeta = dbmeta.DBMeta()
    systables = sysdbmeta.get_tables()
    sysviews = sysdbmeta.get_views()
    # get data
    nc = restclient.CapricornusClient(session['username'],
                                      cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
    if nc.token_expired:
        nc.renew_token()
    if (not nc.token_expired) and (nc.access_token is not None):
        ncmeta = get_meta(viewname)
        pagedef = get_pagedef(viewname)
        if not pagedef is None:
            for etfield in pagedef['pagedef']['et_fields']:
                if etfield['type'] == 'jsoneditor':
                    pagedef['has_jsoneditor'] = True
                    pagedef['jsoneditor_options'] = etfield['options']
                    pagedef['jsoneditor_def'] = etfield['def']
                    break
        #log.debug('ncmeta is : %s' % ncmeta)
        #log.debug('pagedef is : %s' % pagedef)
        return render_template('home/data-view.html', segment='data-view-'+viewname,
                           systables=systables, sysviews=sysviews, elename=viewname, meta=ncmeta, pagedef=pagedef)
    else:
        return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())

@blueprint.route('/data-view-<viewname>/data',  methods = ['GET'])
@login_required
def viewdata(viewname):
    nc = restclient.CapricornusClient(session['username'],
                                      cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
    if nc.token_expired:
        nc.renew_token()
    if (not nc.token_expired) and (nc.access_token is not None):
        if request.method == 'GET':  # list
            ncdata = nc.fetch(viewname, '_table', None, request.args.get('start', type=int),
                              request.args.get('length', type=int), True)
            rdata = {
                'data': ncdata['body']['data'],
                'recordsFiltered': ncdata['body']['record_count'],
                'recordsTotal': ncdata['body']['record_count'],
                'draw': request.args.get('draw', type=int),
            }
            return rdata
    else:
        return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())

@blueprint.route('/data-table-<tablename>.html', methods = ['GET', 'POST'])
@login_required
def datatable(tablename):
    sysdbmeta = dbmeta.DBMeta()
    systables = sysdbmeta.get_tables()
    sysviews = sysdbmeta.get_views()
    # get data
    nc = restclient.CapricornusClient(session['username'],
                                      cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
    if nc.token_expired:
        nc.renew_token()
    if (not nc.token_expired) and (nc.access_token is not None):
        ncmeta = get_meta(tablename)
        pagedef = get_pagedef(tablename)
        if not pagedef is None:
            for etfield in pagedef['pagedef']['et_fields']:
                if etfield['type'] == 'jsoneditor':
                    pagedef['has_jsoneditor'] = True
                    pagedef['jsoneditor_options'] = etfield['options']
                    pagedef['jsoneditor_def'] = etfield['def']
                    break
        #log.debug('ncmeta is : %s' % ncmeta)
        #log.debug('pagedef is : %s' % pagedef)
        return render_template('home/data-table.html', segment='data-table-'+tablename,
                           systables=systables, sysviews=sysviews, elename=tablename, meta=ncmeta, pagedef=pagedef)
    else:
        return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())

@blueprint.route('/data-table-<tablename>/data',  methods = ['GET', 'POST'])
@login_required
def tabledata(tablename):
    nc = restclient.CapricornusClient(session['username'],
                                      cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
    if nc.token_expired:
        nc.renew_token()
    if (not nc.token_expired) and (nc.access_token is not None):
        if request.method == 'GET':  # list
            ncdata = nc.fetch(tablename, '_table', None, request.args.get('start', type=int),
                              request.args.get('length', type=int), True)
            rdata = {
                'data': ncdata['body']['data'],
                'recordsFiltered': ncdata['body']['record_count'],
                'recordsTotal': ncdata['body']['record_count'],
                'draw': request.args.get('draw', type=int),
            }
            return rdata
        elif request.method == 'POST':
            # form data
            action = request.form.get('action', type=str)
            reqdict = request.form.to_dict()
            formdict = {}
            for (key, value) in reqdict.items():
                if '][' in key:
                    formdict[key.split(']')[1][1:]] = value
            # meta data
            sysdbmeta = dbmeta.DBMeta()
            pks = sysdbmeta.get_table_primary_keys(tablename)
            if action == 'create':
                if configindb.Admin_Config['admin_ignore_primary_key']:
                    for pk in pks:
                        del formdict[pk]
                formdict['_key'] = formdict['username']
                requestlist = []
                requestlist.append(formdict)
                restbodyjson = {"data": requestlist}
                restbody = json.dumps(restbodyjson)
                ncdata = nc.post(tablename, '_table', restbody)
                #log.debug(ncdata)
                if ncdata['code'] == 200 and "ids" in ncdata['body'] and len(ncdata['body']['ids']) > 0:
                    return Response(json.dumps({'data':ncdata['body']['data']}), status=200)
                else:
                    return Response('{"status":500, "body": "' + str(ncdata['body']) + '"}', status=500)
            elif action == 'edit':
                pknamelist = []
                pklist = []
                for pk in pks:
                    pknamelist.append(pk)
                    pklist.append(formdict[pk])
                pkname = ",".join(pknamelist)
                idvalue = "-".join(list(map(str, pklist)))
                restbody = {}
                restbody['ids'] = pkname
                restbody['data'] = formdict
                ncdata = nc.put(tablename, '_table', json.dumps(restbody), idvalue)
                #log.debug(ncdata)
                if ncdata['code'] == 200 and ncdata['body'] is not None:
                    return Response(json.dumps({'data':ncdata['body']}), status=200)
                else:
                    return Response('{"status":500, "body": "' + str(ncdata['body']) + '"}', status=500)
            elif action == 'remove':
                pknamelist = []
                pklist = []
                for pk in pks:
                    pknamelist.append(pk)
                    pklist.append(formdict[pk])
                pkname = ",".join(pknamelist)
                idvalue = "-".join(list(map(str, pklist)))
                ncdata = nc.deletebyid(tablename, '_table', pkname, str(idvalue))
                if ncdata['code'] == 200 and ncdata['body'] == True:
                    return Response('{"status":200, "body": "' + str(ncdata['body']) + '"}', status=200)
                else:
                    return Response('{"status":500, "body": "' + str(ncdata['body']) + '"}', status=500)
    else:
        return render_template('accounts/login.html', msg='Login time expired !', form=LoginForm())

@login_required
def get_meta(tablename):
    try:
        nc = restclient.CapricornusClient(session['username'],
                                          cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
        if nc.token_expired:
            nc.renew_token()
        ncmeta = nc.fetch(tablename, '_schema/_table')
        if 'body' in ncmeta:
            return ncmeta['body']
        else:
            return None
    except:
        return None

@login_required
def get_pagedef(tablename):
    try:
        nc = restclient.CapricornusClient(session['username'],
                                          cryptutil.decrypt(configindb.Admin_Config['SECRET_KEY'], session['password']))
        if nc.token_expired:
            nc.renew_token()
        result = nc.fetch(tablename, '_pagedef/_table')
        if 'body' in result:
            pagedef = result['body']
            pagedef['pagedef'] = json.loads(pagedef['pagedef'])
            return pagedef
        else:
            return None
    except:
        return None


