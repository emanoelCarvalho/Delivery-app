const Admin = require("../models/admin");
const bcrypt = require("bcrypt");

class AdminController {
  async criarAdmin(req, res) {
    try {
      const { name, phoneNumber, address, email, password } = req.body;

      if (!name || !phoneNumber || !address || !email || !password) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const novoAdmin = await Admin.create({
        name,
        phoneNumber,
        address,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({ content: novoAdmin.dataValues });
    } catch (error) {
      console.error("Erro ao criar administrador: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async listarAdmins(req, res) {
    try {
      const admins = await Admin.findAll();
      return res.status(200).json(admins);
    } catch (error) {
      console.error("Erro ao listar administradores: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async atualizarAdmin(req, res) {
    try {
      const { id } = req.params;
      const { name, phoneNumber, address, email, password } = req.body;

      if (!name || !phoneNumber || !address || !email || !password) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await Admin.update(
        {
          name,
          phoneNumber,
          address,
          email,
          password: hashedPassword,
        },
        {
          where: { id },
        }
      );

      const updatedAdmin = await Admin.findByPk(id);

      return res.status(200).json({
        message: "Admin atualizado com sucesso",
        updatedAdmin,
      });
    } catch (error) {
      console.error("Erro ao atualizar admin: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async deletarAdmin(req, res) {
    try {
      const { id } = req.params;

      const deletedAdmin = await Admin.findByPk(id);

      if (!deletedAdmin) {
        return res.status(404).json({ message: "Admin não encontrado" });
      }

      await Admin.destroy({
        where: { id },
      });

      return res.status(200).json({
        message: "Admin deletado com sucesso",
        deletedAdmin,
      });
    } catch (error) {
      console.error("Erro ao deletar admin: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
  
  async loginAdmin(req, res) {
    try {
      const { email, password } = req.body;

      // Encontrar o admin pelo email
      const admin = await Admin.findOne({ where: { email } });

      // Verificar se o admin existe
      if (!admin) {
        return res.status(404).json({
          message: "Admin não encontrado",
        });
      }

      // Verificar a correspondência da senha
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (!passwordMatch) {
        return res.status(401).json({
          message: "Credenciais inválidas",
        });
      }

      // Aqui, você pode gerar um token de autenticação e enviá-lo no corpo da resposta
      // ou configurar uma sessão de usuário, dependendo da sua estratégia de autenticação.

      res.status(200).json({ admin });
    } catch (error) {
      console.error("Erro ao autenticar admin: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

}

module.exports = new AdminController();
