#!/bin/bash
set -e
server=$1

cd `dirname $0`/..

ssh $server << 'ENDSSH'
cd plom-frontend
git checkout .
git checkout master
git pull origin master
npm install
npm run build
pm2 restart frontend

ENDSSH
