const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
  res.render('index');
});

app.post('/party', function(req, res) {
  console.log(req.body);
  res.send(res.send('Post ok !'))
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));