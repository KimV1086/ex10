const express = require('express');
const app = express();

const news = require('./app/news');

const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use('news', news);

const port = 8000;

app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});
