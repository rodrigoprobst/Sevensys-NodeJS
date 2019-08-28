FROM node:11.10.1

WORKDIR /var/www/

# Copy app dependencies
ADD package.json .

# Installing yarn
RUN yarn && yarn cache clean

# Bundle app source
ADD dist ./dist

# variaveis de ambiente

# NODE ENVIRONMENT
ENV NODE_ENV development

# APPLICATION PORTS
ENV GATEWAY_PORT 3000
ENV TEST_PORT 3001
ENV PRODUCTS_PORT 3002
ENV USER_PORT 3003

# DB CONFIGURATIONS
ENV DB_HOSTNAME "mysql-nodejs.mauricioschmitz.com.br"
ENV DB_USERNAME "nodejs"
ENV DB_PORT 3307
ENV DB_PASSWORD "sevensys"
ENV DB_NAME "rodrigo"

# SECRET KEY FOR TOKENS
ENV SECRET "rodrigob"

# OTHERS
ENV USE_SSL false

CMD [ "yarn", "start-product" ]

EXPOSE 3002



# FROM    -- imagem que o container vai ser base
# WORKDIR -- pasta raiz no container
# COPY    -- copia arquivos
# RUN     -- executa um comando durante o build
# CMD     -- executa o comando quando o container iniciar
# EXPOSE  -- expoe a porta no container
