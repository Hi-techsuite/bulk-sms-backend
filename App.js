const express = require('express');

require('dotenv').config();

const cors = require('cors');

const app = express();

var allowedOrigins = ['*', 'http://localhost:3000'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const message = `The cors policy for this site does not permit the specified origin to access`;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);

app.use(
  express.json({
    extended: false,
    limit: '50mb',
  })
);

app.use(
  express.urlencoded({
    limit: '50mb',
    extended: false,
    parameterLimit: 50000,
  })
);

app.get('/', (req, res) => {
  console.log("You've visited home");
});

app.use('/messenger', require('./routes/messagebird.routes'));
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT http://localhost:${PORT}`);
});
