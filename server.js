'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));

app.get('', function(request, response) {
  response.sendfile('index.html', {root: './'})
});

app.listen(PORT, function() {
  console.log(`'Listening on port: ${PORT}'`);
});
