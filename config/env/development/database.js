module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DEV_DATABASE_URI'),
      },
      options: {
        authenticationDatabase: env('DEV_AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DEV_DATABASE_SSL', true),
      },
    },
  },
});
