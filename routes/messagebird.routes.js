const axios = require('axios');
const router = require('express').Router();
const message_controller = require('../controllers/messagebird.controller');

router.post('/send', message_controller.sendMessage);
router.get('/check', message_controller.checkBalance);

module.exports = router;
