module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        host: env('PROD_DATABASE_HOST', 'localhost'),
        port: env.int('PROD_DATABASE_PORT', 27017),
        database: env('PROD_DATABASE_NAME', 'strapi'),
        username: env('PROD_DATABASE_USERNAME', 'strapi'),
        password: env('PROD_DATABASE_PASSWORD', 'strapi'),
      },
      options: {
        authenticationDatabase: env('PROD_AUTHENTICATION_DATABASE', null),
        ssl: env('PROD_DATABASE_SSL', true),
      },
    },
  },
});
