# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy client files and build the React app
COPY client/package*.json /app/client/

# Install client dependencies
RUN npm install -f --prefix client

# Copy the rest of the client files
COPY client/ /app/client/

# Build the React app
RUN npm run build --prefix client

# Copy all files
COPY . .

# Expose the server port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
