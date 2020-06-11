# Strapi CMS

## Setting up a development environment

### Connecting to database locally

TBD.

### Starting Strapi

1. git clone https://github.com/JonesTPG/LUT-dataviz-strapi

2. npm install

3. npm run develop

4. go to localhost:1337/admin and login with admin credentials

## Creating content

### Using only existing content types and not modifying content types

Creating new content doesn't require you to set up the development environment as long as you don't need to create new content types or modify existing ones. You can log in at

https://lut-dataviz-strapi.herokuapp.com/admin

and do the work there.

## Creating new content types or modifying existing content types

If you need to create new content types or modify existing ones, you need to start up the CMS in development mode (with npm run develop). This can be done by setting up a local development environment. After you are done with the modifications, you must push your changes to the master branch of this repository. That will trigger an automated deployment of the changes to the remote backend.
