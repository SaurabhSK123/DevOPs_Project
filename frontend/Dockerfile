FROM node:16
RUN mkdir /app
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY src/package*.json ./
#COPY src/server.js ./
#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY /src /app/
RUN npm install
EXPOSE 8080
CMD [ "node", "server.js" ]        
