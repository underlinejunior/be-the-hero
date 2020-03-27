const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());// {origin: onde esta hospedado}git
app.use(express.json()); 
app.use(routes);

app.listen(3333);