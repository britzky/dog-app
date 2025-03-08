#### Most common instructions ####
# Base image -> best to use an official docker image if it can be helped
# Best practice to specify version instead of using latest
# Node recommends using the default image node:<version>
# node:<version>-alpine is super lightweight meaning I'll need to install any os tools needed to run the app (git, bash etc...)
# Alpine uses apk instead of apt for package management
FROM node:20.0.0


# Set the working directory in the container for any RUN, COPY, CMD, ENTRYPOINT, ADD instructions that follow it. 
WORKDIR /app


# Copies files or directories. Syntax <source> <destination>
# Copy the dependencies first to cache them and speed up the build time
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

# use clean install to make the build faster
RUN npm ci

# Get all the rest of the code needed to run the app after
COPY . .


# Create a non-root user and change ownership of /app
RUN useradd -s /bin/bash -m user && chown -R user /app

# run the container as a non-root user
USER user


# Defualt program thats run once the container is started. Should only use one CMD per dockerfile
# for this backend I just need to run node app.js
# syntax: CMD ["each", "word", "of", "the", "command"]
CMD  ["node", "app.js"]



