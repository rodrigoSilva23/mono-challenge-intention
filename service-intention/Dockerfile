FROM node:18.16-alpine


WORKDIR /home/node/app

RUN apk add --no-cache bash

RUN  apk add --no-cache xdg-utils \
&& yarn global add @nestjs/cli 
RUN yarn config set cache /home/node/app/.yarn-cache --global


USER node


