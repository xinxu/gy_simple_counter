#!/bin/bash

cd frontend
npm run build
cd ../backend
python3 manage.py runserver
