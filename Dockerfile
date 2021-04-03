FROM node:latest

USER node

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
