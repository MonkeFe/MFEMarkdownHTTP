FROM node:latest
RUN apt update; apt upgrade -y; apt install -y tree
COPY ./assets /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
