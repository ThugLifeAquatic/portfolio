'use strict';

let express = require('express');
const bodyParser = require('body-parser').urlencoded({
  extended: true
});
let app = express();
const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./'));

app.get('', function(request, response) {
  response.sendfile('index.html', {root: './'})
});

app.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  console.log(`'Listening on port: ${PORT}'`);
});
