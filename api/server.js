const express = require('express');
const app = express();

const news = require('./app/news');

const mysql = require('mysql');
const cors = require('cors');

const port = 7000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1qaz@WSX29',
  database : 'exam_10'
});


app.use('news', news(connection));

app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});
