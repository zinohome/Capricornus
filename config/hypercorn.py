#!/usr/bin/env python3
# -*- coding: utf-8 -*-

loglevel = "info"
workers = 4
bind = "0.0.0.0:8843"
insecure_bind = "0.0.0.0:8880"
graceful_timeout = 120
worker_class = "trio"
keepalive = 5
errorlog = "/Users/zhangjun/PycharmProjects/Capricornus/log/hypercorn_error.log"
accesslog = "/Users/zhangjun/PycharmProjects/Capricornus/log/hypercorn_access.log"
keyfile = "/Users/zhangjun/PycharmProjects/Capricornus/cert/key.pem"
certfile = "/Users/zhangjun/PycharmProjects/Capricornus/cert/cert.pem"