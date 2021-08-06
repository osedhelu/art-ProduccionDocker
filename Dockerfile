FROM node:16.3.0-alpine3.13
WORKDIR /usr/app
COPY package.json .
COPY ./backend .
RUN npm install -g npm@7.19.0
RUN npm i
CMD [ "src", "index.js" ]
