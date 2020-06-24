# Strapi CMS

## Creating content

### Using only existing content types and not modifying content types

Creating new content doesn't require you to set up the development environment as long as you don't need to create new content types or modify the data structure of existing ones. You can log in at

http://195.148.21.13:3001/admin/auth/login

and do the work there.

## Creating new content types or modifying existing content types

If you need to create new content types or modify the data structure of existing ones, you need to start up the CMS in development mode (with npm run develop). This can be done by setting up a local development environment. After you are done with the modifications, you must push your changes to the master branch of this repository.

## Setting up a development environment

### Downloading source code and dependencies

1. git clone https://github.com/JonesTPG/LUT-dataviz-strapi

2. npm install

### Connecting to database

You need to have a .env file with the correct dev environment related values. You can check out the .env.example file that shows the different environment variables used by strapi.

### Starting Strapi

1. npm run develop

2. go to localhost:1337/admin and login with admin credentials (same credentials as in production server)
