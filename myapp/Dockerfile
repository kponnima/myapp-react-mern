# Pull base image
FROM node:lts-alpine AS builder
ENV NODE_ENV production

# Set the working directory.
WORKDIR /app

# Install app dependencies
COPY ./package*.json ./
RUN npm install

# Upload source
COPY . .
RUN npm run build

# Build nginx
FROM nginx:stable-alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/build .

# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]