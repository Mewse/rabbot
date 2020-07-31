FROM node:latest

WORKDIR /app
COPY src/package-lock.json
RUN npm install
COPY src/*

ENTRYPOINT ["node", "app.js"]