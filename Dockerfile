FROM node:18.10-alpine3.15

WORKDIR /app

COPY . .
RUN npm install
EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]