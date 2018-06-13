const express = require('express')
const app = express()
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/build')));

const contacts = require('./controller/contactController');
app.use('/contacts/', contacts)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}!`))