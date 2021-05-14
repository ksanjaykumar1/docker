
# specify a base image 
FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

# Install dependencies
RUN npm install

COPY ./ ./


# Start up command 
CMD ["npm","start"]



