FROM node:20-alpine
WORKDIR /app

# copy package*.json before the rest of the code so Docker can cache the dependency layer
COPY package*.json ./

# use npm ci for reproducible installs
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]