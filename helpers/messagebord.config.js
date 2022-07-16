require('dotenv').config();
const messagebird = require('messagebird')(
  process.env.MESSAGE_BIRD_API_KEY
);

module.exports = { messagebird };
