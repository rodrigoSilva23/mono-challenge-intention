#!/bin/bash
cp ./.env.example .env

yarn install 
prisma migrate dev
npx prisma generate

yarn start:dev
exec "$@"