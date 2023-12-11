const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "secreto";

class AdminController {
  async createAdmin(req, res) {
    try {
      const {
        name,
        phoneNumber,
        address,
        email,
        password,
        confirmPassword,
        cnpj,
        bank,
        agency,
        account,
      } = req.body;
  
      if (
        !name ||
        !phoneNumber ||
        !address ||
        !email ||
        !password ||
        !confirmPassword ||  // Certifique-se de usar o nome correto aqui
        !cnpj ||
        !bank ||
        !agency ||
        !account
      ) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }
  
  if (password !== confirmPassword) {
        return res.status(400).json({ error: "As senhas não coincidem" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const novoAdmin = await Admin.create({
        name,
        phoneNumber,
        address,
        email,
        password: hashedPassword,
        confirmPassword: hashedPassword, 
        cnpj,
        bank,
        agency,
        account,
      });

      return res.status(201).json({ content: novoAdmin.dataValues });
    } catch (error) {
      console.error("Erro ao criar administrador: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async getAdmins(req, res) {
    try {
      const admins = await Admin.findAll();
      return res.status(200).json(admins);
    } catch (error) {
      console.error("Erro ao listar administradores: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async getAdminById(req, res) {
    try {
      const admin = await Admin.findByPk(req.params.id);

      if (admin) {
        return res.status(200).json({ admin });
      } else {
        return res.status(404).json({ error: "Admin não encontrado" });
      }
    } catch (error) {
      console.log("Erro ao buscar o admin, verifique o ID: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async updateAdmin(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        phoneNumber,
        address,
        email,
        password,
        cnpj,
        confirmPassword,
        bank,
        agency,
        account,
      } = req.body;

      if (
        !name ||
        !phoneNumber ||
        !address ||
        !email ||
        !password ||
        !cnpj ||
        !confirmPassword ||
        !bank ||
        !agency ||
        !account
      ) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ error: "As senhas não coincidem" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await Admin.update(
        {
          name,
          phoneNumber,
          address,
          email,
          password: hashedPassword,
          confirmPassword: hashedPassword,
          cnpj,
          bank,
          agency,
          account,
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

  async deleteAdmin(req, res) {
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

      const admin = await Admin.findOne({ where: { email } });

      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (!passwordMatch || !admin) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      const token = jwt.sign({ adminId: admin.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      return res
        .status(200)
        .json({
          token,
          admin: { id: admin.id, name: admin.name, email: admin.email },
        });
    } catch (error) {
      console.error("Erro ao autenticar usuário", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
}

module.exports = new AdminController();
