const express = require('express');
const path = require('path');
const app = express();
const PORT = 3500;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'))
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact.html'))
})

app.get('*', (req, res) => {
  res.status(404)
  res.sendFile(path.join(__dirname, 'views/404.html'))
})

app.listen(PORT, ()=> { console.log(`App listening at https://localhost:${PORT}`)})