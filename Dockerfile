# Use the official Node image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the root package.json and package-lock.json to the container
COPY package*.json ./

# Install root-level dependencies (including concurrently)
RUN npm install

# Copy both the server and client code into the container
COPY server/ ./server
COPY client/ ./client

# Install dependencies for both server and client
RUN npm install --prefix ./server
RUN npm install --prefix ./client

# Expose the ports for the client and the server
EXPOSE 5173 5000

# Start both the server and client using concurrently
CMD ["npm", "start"]
