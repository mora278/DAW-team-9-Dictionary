const cors = require('cors');
const express = require('express');
const http = require("https");

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

const app_id = "5197b755"; // insert your APP Id
const app_key = "db4d018579f1b488ab2167d66cd2ce72"; // insert your APP Key
const fields = "definitions,pronunciations";
const strictMatch = "false";

app.get('/', (req, res, next) => {
  res.send('welcome to my API...');
});

app.get('/definitions', (req, res, next) => {
  var word = req.query.word;
  console.log(word);
  var options = {
    host: 'od-api.oxforddictionaries.com',
    port: '443',
    path: '/api/v2/entries/en-gb/' + word + '?fields=' + fields + '&strictMatch=' + strictMatch,
    method: "GET",
    headers: {
      'app_id': app_id,
      'app_key': app_key
    }
  };

  http.get(options, (resp) => {
      let body = '';
      resp.on('data', (d) => {
          body += d;
      });
      resp.on('end', () => {
          const obj = JSON.parse(body);
          
          res.send(obj);
      });
  });
});

app.listen(port, () => {
  console.log('lsitening on port: ' + port);
});