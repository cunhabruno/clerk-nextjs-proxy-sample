module.exports = {
  async rewrites() {
    return [
      {
        source: '/__clerk/:path*',
        destination: process.env.TUNNEL_URL + '/:path*',
      },
    ]
  },
}
