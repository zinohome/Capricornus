#!/bin/bash
IMGNAME=jointhero/capricornus
IMGVERSION=v2.1.2
docker build --no-cache -t $IMGNAME:$IMGVERSION .
