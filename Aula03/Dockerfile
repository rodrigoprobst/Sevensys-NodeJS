FROM node:11.10.1

WORKDIR /var/www/

# Copy app dependencies
COPY package.json .

# Installing yarn
RUN yarn install && yarn cache clean

# Bundle app source
COPY /dist ./dist

CMD [ "yarn", "start" ]

EXPOSE 3002



# FROM    -- imagem que o container vai ser base
# WORKDIR -- pasta raiz no container
# COPY    -- copia arquivos
# RUN     -- executa um comando durante o build
# CMD     -- executa o comando quando o container iniciar
# EXPOSE  -- expoe a porta no container
