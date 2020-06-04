const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

nunjucks.configure('src/views', {
  express: server,
  noCache: true
});

server.use(express.static('public'));

server.get('/', (request, response) => {
  return response.render("index.html");
});

server.get('/create-point', (request, response) => {
  return response.render("create-point.html");
});

server.get('/search', (request, response) => {
  return response.render("search-results.html");
});

server.listen(3000);