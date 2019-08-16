FROM node:11.10.1
WORKDIR /

# Copy app dependencies
COPY package.json ./

# Installing yarn
RUN yarn install && yarn cache clean

# Bundle app source
COPY . .

CMD ["yarn", "start"]

EXPOSE 3002

