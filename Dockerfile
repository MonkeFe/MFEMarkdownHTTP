FROM node:latest
COPY ./assets /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
