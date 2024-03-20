FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

COPY .next ./.next

CMD ["yarn", "dev"]