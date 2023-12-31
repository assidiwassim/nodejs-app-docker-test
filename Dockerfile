# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /my-app

# Copy the application files to the working directory.
COPY . .

# Install application dependencies
RUN npm i

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app // npm run lanc
CMD [ "npm", "start" ]






 





