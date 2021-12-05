const express = require('express');

const router = require('./routes');

const app = express();
app.use(routes);


app.listen(8000, (console.log('Server iniciou na porta http://localhost:3000')));
