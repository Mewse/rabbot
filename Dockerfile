FROM node:latest

WORKDIR /app
COPY src/package.json .
COPY src/package-lock.json .
RUN npm install
COPY src/* /app/

ENTRYPOINT ["node", "app.js"]
