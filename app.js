//app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
