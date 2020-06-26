FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build:prod

EXPOSE 1337

CMD ["npm", "run", "start:prod"]


