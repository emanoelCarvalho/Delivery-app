const User = require("../models/user");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "secreto";

class UserController {
  async createUser(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      const newUser = await User.create({ name });

      return res.status(201).json({ content: newUser.dataValues });
    } catch (error) {
      console.error("Erro ao criar usuário: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name'] });
      return res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao listar usuários: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { attributes: ['id', 'name'] });

      if (user) {
        return res.status(200).json({ user });
      } else {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      console.log("Erro ao buscar o usuário, verifique o ID: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      await User.update({ name }, { where: { id } });

      const updatedUser = await User.findByPk(id, { attributes: ['id', 'name'] });

      return res.status(200).json({
        message: "Usuário atualizado com sucesso",
        updatedUser,
      });
    } catch (error) {
      console.error("Erro ao atualizar usuário: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const deletedUser = await User.findByPk(id, { attributes: ['id', 'name'] });

      if (!deletedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      await User.destroy({ where: { id } });

      return res.status(200).json({
        message: "Usuário deletado com sucesso",
        deletedUser,
      });
    } catch (error) {
      console.error("Erro ao deletar usuário: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async authenticateUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, { attributes: ['id', 'name'] });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.status(200).json({
        token,
        user: { id: user.id, name: user.name },
      });
    } catch (error) {
      console.error("Erro ao autenticar usuário por JWT: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
}

module.exports = new UserController();
