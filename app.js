const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
  res.render('index');
});

app.post('/party', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch((err) => res.send(err));
});

app.get('/party/:id', function(req, res) {
  axios
  .get(`${process.env.API_URL}/party/${req.params.id}`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: data.name,
      id:req.params.id,
      url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
    }),
  )
  .catch((err) => console.log(err));
});

app.post('/party/:id/items', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
    .then(({ data }) => res.redirect(`/party/${req.params.id}`))
    .catch((err) => res.send(err));
});

app.post('/party/:id/items/:idItem', function(req, res) {
  axios
    .delete(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.idItem} `)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch((err) => res.send(err));
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));

//http://localhost:3000/party/5e6fa9703d57b970f3812790