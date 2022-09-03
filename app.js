// FUNCAO DO ARQUIVO : ARMAZENAR AS PRINCIPAIS IMPORTAÇÕES E INFORMAÇÕES DA APLICACAO

require('dotenv').config();

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//rotas do projeto
const clients = require('./routes/clientRoutes')

//definir a rota principal
app.use("/clients", clients)


module.exports = app;