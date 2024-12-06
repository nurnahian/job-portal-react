FROM node:20-alpine

#Set the working directory in the container
WORKDIR /code

#Copy the package.json and package-lock.json to working directory
COPY package.json ./
COPY package-lock.json ./

# Install project dependancy
RUN npm install 

COPY . .

RUN npm build

EXPOSE 80

CMD [ "npm","start" ]