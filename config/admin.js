module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7899c2f7111904e246e899d169a78495'),
  },
});
