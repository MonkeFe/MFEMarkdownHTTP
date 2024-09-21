FROM node:latest
COPY ./assets /app
WORKDIR /app
RUN npm install
CMD ["node", "server.js"]
