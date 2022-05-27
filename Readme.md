# Capricornus

REST API autogeneration tool for RDBMS base on fastapi and SQLAlchemy

uvicorn main:app --host 0.0.0.0 --port 8890 --reload --no-server-header --no-date-header --workers 1

uvicorn main:app --host 0.0.0.0 --port 8890 --no-server-header --no-date-header --workers 1

gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880

hypercorn -c config/hypercorn.py -w 1 --reload main:app

/opt/pyAPI/venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880


docker run -it -d --name capricornus --hostname capricornus --restart unless-stopped -p 8880:8880 -p 8843:8843 -e arangodb_hosts='http://192.168.32.120:8529' -e app_profile='demo' -e app_log_level='DEBUG' jointhero/capricornus:latest
