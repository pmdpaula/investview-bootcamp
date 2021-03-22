const withImages = require('next-images');
const redirects = require('./config/redirects');

module.exports = withImages({
  esModule: true,
});

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
