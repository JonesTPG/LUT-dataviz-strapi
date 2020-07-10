module.exports = ({ env }) => ({
  host: env('DEV_HOST', '0.0.0.0'),
  port: env.int('DEV_PORT', 1337),
  url: env('DEV_URL', ''),
});
