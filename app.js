require("dotenv").config();
const express = require('express');
const cors = require('cors');

const morganBody = require('morgan-body');
const loggerstream = require('./utils/handleLoggerSlack');

const dbConnectNosql = require('./config/mongo');
const { dbConnectMysql } = require('./config/mysql');

const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));


morganBody(app, {
  noColors: true,
  stream: loggerstream,
  skip: function(req, res) {
    return res.statusCode < 400;
  }
});

// Se hace uso de las rutas de los archivos de rutas
app.use("/api", require("./routes"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

(ENGINE_DB === 'nosql') ? dbConnectNosql() : dbConnectMysql();
