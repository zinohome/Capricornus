# Capricornus

REST API autogeneration tool for RDBMS base on fastapi and SQLAlchemy

uvicorn main:app --host 0.0.0.0 --port 8880 --reload --no-server-header --no-date-header --workers 2

uvicorn main:app --host 0.0.0.0 --port 8880 --no-server-header --no-date-header --workers 2

gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880

hypercorn main:app --bind 0.0.0.0:8880 --worker-class trio 

/opt/pyAPI/venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880
