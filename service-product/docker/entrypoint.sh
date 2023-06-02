#!/bin/bash
set -e


if [ ! -d "./vendor" ]; then

  (cd /var/www/ && composer install --ignore-platform-reqs)
fi

if [ ! -f "/var/www/.env" ]; then
  cp /var/www/.env.example /var/www/.env
  php artisan key:generate
fi

if [ "${1#-}" != "$1" ]; then
  set -- php-fpm "$@"
fi

exec "$@"
