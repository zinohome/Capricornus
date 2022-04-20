#!/bin/bash
FIND_FILE="/opt/Capricornus/config/settings.ini"
FIND_STR="settings"
if [ `grep -c "$FIND_STR" $FIND_FILE` -ne '0' ];then
    echo "settings exist"
else
    cp /opt/Capricornus/config/settings_default.ini /opt/Capricornus/config/settings.ini
fi
FIND_FILE="/opt/Capricornus/config/gunicorn.py"
FIND_STR="workers"
if [ `grep -c "$FIND_STR" $FIND_FILE` -ne '0' ];then
    echo "gunicorn config exist"
else
    cp /opt/Capricornus/config/gunicorn_default.py /opt/Capricornus/config/gunicorn.py
fi
cd /opt/Capricornus && \
nohup /opt/Capricornus/venv/bin/gunicorn -c /opt/Capricornus/config/gunicorn.py main:app >> /tmp/Capricornus.log 2>&1 &