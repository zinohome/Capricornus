# Capricornus

REST API autogeneration tool for RDBMS base on fastapi and SQLAlchemy

uvicorn main:app --host 0.0.0.0 --port 8880 --reload --no-server-header --no-date-header --workers 2

uvicorn main:app --host 0.0.0.0 --port 8880 --no-server-header --no-date-header --workers 2

gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880

hypercorn main:app --certfile cert/cert.pem --keyfile cert/key.pem --bind 0.0.0.0:8843 --insecure-bind 0.0.0.0:8880  --worker-class trio 

hypercorn --certfile cert.pem --keyfile key.pem --bind localhost:443 --insecure-bind localhost:80 module:app

/opt/pyAPI/venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8880
