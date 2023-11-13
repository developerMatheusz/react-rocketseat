FROM node:18-alpine

WORKDIR /react-vite-app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5174

CMD ["npm", "run", "dev"]
