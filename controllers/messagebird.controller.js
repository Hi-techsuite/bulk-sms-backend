// const { messagebird } = require('../helpers/messagebord.config');
require('dotenv').config();
const messagebird = require('messagebird')(
  process.env.MESSAGE_BIRD_API_KEY
);

exports.sendMessage = async (req, res) => {
  messagebird.balance.read((err, data) => {
    if (err) {
      return console.log(err);
    }

    console.log(data);
    return res.status(200).json({
      success: true,
      data,
    });
  });
};

exports.checkBalance = async (req, res) => {
  messagebird.balance.read((err, data) => {
    if (err) {
      return console.log(err);
    }

    console.log(data);
    return res.status(200).json({
      success: true,
      data,
    });
  });
};
