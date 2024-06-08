FROM node:8

# Define build arguments
# ARG APP_VERSION

WORKDIR /usr/src/app
COPY . ./
RUN npm install
EXPOSE 8080
CMD [ "node", "index.js" ]
