FROM node:20-alpine 
WORKDIR /app 
COPY package*.json ./ 
RUN npm config set fetch-retries 5 \
    && npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm ci
COPY . . 
RUN npm run build 
EXPOSE 3000 
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
