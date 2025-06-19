# FROM cypress/included:latest AS base
# USER root
# ENV PWD=/d/FON/master/Aplikacija/honey-beer-app

# CMD [ "cypress", "run", "-b chrome", "--spec", "\"./cypress/e2e/project/**/*\"", "--no-exit" ]
# Use the official Node.js image
FROM cypress/included:cypress-14.5.0-node-22.16.0-chrome-137.0.7151.119-1-ff-139.0.4-edge-137.0.3296.62-1
# ARG NODE_VERSION=20

# # install curl
# RUN apt update && apt install curl -y  && apt-get clean &&\
# # install nvm
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# # set env
# ENV NVM_DIR=/root/.nvm

# # install node
# RUN bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION"

# # set ENTRYPOINT for reloading nvm-environment
# ENTRYPOINT ["bash", "-c", "source $NVM_DIR/nvm.sh && exec \"$@\"", "--"]

WORKDIR /app
# USER root
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of your application code
COPY . .
# VOLUME [ "/d/FON/master/Aplikacija", "/app" ]
# Set the environment variable for Cypress
# ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress
# Expose the port that Cypress will use
EXPOSE 4200
# Command to run your tests
CMD ["ng serve --configuration=testing"]
# CMD ["npm run start:testing;"]
#  cd /app && seep 30 && npm run cypress:testing"]
# "&&","npm", "run", "cypress:test"]
