const { request } = require("http");
const { response } = require("../app");
const clients = require("../models/client.json");

const axios = require("axios");

const getAll = (request, response) => {
    response.status(200).send({
        "message": "OLÁ MUNDO!!"
    })
};

//EDITAR ESSA PARTE ABAIXO PARA A NOSSA FINALIDADE
const getAllClients = async (request, response) => {
    try{
    const apiResponse = await axios.get("https://ghibliapi.herokuapp.com/films")
    const data = apiResponse.data;
   
    response.status(200).send(data);
    } catch(err) {
        console.error(err)
    }
};

// Objetivo: cadastrar cliente
const registerClient = (request, response) => {
    console.log("BODY DA REQUISIÇÃO", request.body)
    const name = request.body.name;
    const email = request.body.email;
    const phone = request.body.phone;

    let newClient = {
        "id": Math.random().toString(32).substring(2, 6),
        "name": name,
        "email": email,
        "phone": phone
    
    }

    console.log("NOVO CLIENTE", newClient);

    clients.push(newClient);

    //enviar uma resposta
    response.status(201).send({
        "message": "Cliente adicionado com sucesso",
        "data": newClient


})
};


module.exports = {
    getAll,
    registerClient
}