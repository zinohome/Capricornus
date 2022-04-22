#!/bin/bash
IMGNAME=jointhero/capricornus
IMGVERSION=v2.1.1
docker build --no-cache -t $IMGNAME:$IMGVERSION .
