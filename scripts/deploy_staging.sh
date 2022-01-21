#!/bin/bash
set -e
server=$1

cd `dirname $0`/..

ssh $server << 'ENDSSH'
cd plom-frontend
git checkout .
git checkout staging
git pull origin staging
npm install
npm run build
pm2 restart frontend

ENDSSH
