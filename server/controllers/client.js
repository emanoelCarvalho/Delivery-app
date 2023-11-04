const database = require('../database/connection');

class clientController {
    novoCliente(req, res) {
        const {nome, email, endereço, telefone, cpf} = req.body;

        console.log(nome, email, endereço, telefone, cpf);

        database.insert({nome, email, endereço, telefone, cpf}).table("cliente").then(data => {
            console.log(data);
            res.json({message: "Cliente criado com sucesso"});
        }
        ).catch(error => {
            console.log(error);
        });
    }
}

module.exports = new clientController();