require('dotenv').config();

const config = {
  server: {
    port: process.env.SERVER_PORT || 3000,
    hostname: process.env.SERVER_HOSTNAME,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  pagination: {
    limit: 10,
    skip: 0,
    page: 1,
  },
};

module.exports = config;
