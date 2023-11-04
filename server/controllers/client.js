const User = require("../models/user")
class clientController {
  novoCliente(req, res) {
    User.create({
        name: 'Emanoel', 
        phoneNumber: '545154802', 
        address: 'Rua caxagá', 
        email: 'hemanoel@gmail.com', 
    }).then((response) => {
        console.log('Retorno da query ',response);
        return res.json({
            content: response.dataValues
        })
    })
  }
}

module.exports = new clientController();
