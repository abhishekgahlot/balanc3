const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.sendFile('client/index.html', { root: __dirname });
});

module.exports = routes;
