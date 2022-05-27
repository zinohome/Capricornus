# Capricornus

REST API autogeneration tool for RDBMS base on fastapi and SQLAlchemy

uvicorn main:app --host 0.0.0.0 --port 8980 --reload --no-server-header --no-date-header --workers 1

uvicorn main:app --host 0.0.0.0 --port 8980 --no-server-header --no-date-header --workers 1

gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880

hypercorn -c config/hypercorn.py -w 1 --reload main:app

/opt/pyAPI/venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880

