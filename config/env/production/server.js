module.exports = ({ env }) => ({
  host: env('PROD_HOST', '0.0.0.0'),
  port: env.int('PROD_PORT', 1337),
  url: env('PROD_URL', ''),
});
