FROM node:10-alpine

COPY *.js* /home/node/

WORKDIR /home/node

RUN npm install

CMD [ "node", "/home/node/index.js" ]

EXPOSE 3000