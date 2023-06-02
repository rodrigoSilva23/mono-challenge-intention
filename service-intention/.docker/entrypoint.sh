#!/bin/bash
cp ./.env.example .env

yarn install 
npx prisma migrate dev
npx prisma generate

yarn start:dev
exec "$@"