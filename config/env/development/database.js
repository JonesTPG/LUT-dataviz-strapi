module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        host: env('DEV_DATABASE_HOST', 'localhost'),
        port: env.int('DEV_DATABASE_PORT', 27017),
        database: env('DEV_DATABASE_NAME', 'strapi'),
        username: env('DEV_DATABASE_USERNAME', 'strapi'),
        password: env('DEV_DATABASE_PASSWORD', 'strapi'),
      },
      options: {
        authenticationDatabase: env('DEV_AUTHENTICATION_DATABASE', null),
        ssl: env('DEV_DATABASE_SSL', true),
      },
    },
  },
});
