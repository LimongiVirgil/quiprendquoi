const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
  res.render('index');
});

app.post('/party', function(req, res) {
  console.log(req.body);

  //res.send(res.send('Post ok !'))

  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({data}) => console.log(data))
    .catch((err) => console.error(err));
});

app.get('/party/:id', function(req, res) {
  
  //res.render('party', { title: "C'est la fête" });

  axios
  .get(`${process.env.API_URL}/party/${req.params.id}`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: data.name
    }),
  )
  .catch((err) => console.log(err));

  //res.render('party');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));