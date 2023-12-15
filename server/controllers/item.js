const { Item, Category } = require("../models")
const sequelize = require("../database/connection")

class ItemController {
  async createItem(req, res) {
    const t = await sequelize.transaction()

    try {
      const {
        name,
        unitPrice,
        amount,
        itemDescription,
        imageLink,
        isSpecial,
        category,
      } = req.body

      let categoryObject = await Category.findOne(
        { where: { name: category } },
        { transaction: t }
      )

      if (!categoryObject) {
        categoryObject = await Category.create(
          { name: category },
          { transaction: t }
        )
      }

      const requiredFields = [name, unitPrice, amount, imageLink, category]

      if (requiredFields.some((field) => !field)) {
        return res.status(400).json({ error: "Preencha todos os campos" })
      }

      const newItem = await Item.create(
        {
          name,
          unitPrice,
          amount,
          itemDescription,
          imageLink,
          isSpecial,
          CategoryId: categoryObject.dataValues.id,
        },
        { transaction: t }
      )

      console.log(newItem)

      await t.commit()

      return res.status(201).json({
        content: newItem.dataValues,
      })
    } catch (error) {
      await t.rollback()
      console.log("Erro ao criar item: ", error)
      return res.status(500).json({ error: "Erro interno no servidor" })
    }
  }

  async getItems(req, res) {
    try {
      const items = await Item.findAll({
        include: [Category],
      })
      return res.status(200).json({ items })
    } catch (error) {
      console.log("Erro ao encontrar o cardápio: ", error)
      return res.status(500).json({ error: "Erro interno no servidor" })
    }
  }

  async getItemById(req, res) {
    try {
      const item = await Item.findByPk(req.params.id, {
        include: [Category],
      })
      if (item) {
        return res.status(200).json({ item })
      } else {
        return res.status(404).json({ error: "Item não encontrado" })
      }
    } catch (error) {
      console.log("Erro ao buscar o item, verifique o ID: ", error)
      return res.status(500).json({ error: "Erro interno no servidor" })
    }
  }

  async updateItem(req, res) {
    try {
      const { id } = req.params
      const {
        name,
        unitPrice,
        amount,
        itemDescription,
        imageLink,
        isSpecial,
        CategoryId,
      } = req.body

      const requiredFields = [
        name,
        unitPrice,
        amount,
        imageLink,
        isSpecial,
        CategoryId,
      ]

      if (requiredFields.some((field) => !field)) {
        return res
          .status(400)
          .json({ error: "Preencha o campo para atualizar" })
      }

      await Item.update(
        {
          name,
          unitPrice,
          amount,
          itemDescription,
          imageLink,
          isSpecial,
          CategoryId,
        },
        {
          where: { id: id },
        }
      )

      const updatedItem = await Item.findByPk(id)

      return res
        .status(200)
        .json({ message: "Cardápio atualizado com sucesso ", updatedItem })
    } catch (error) {
      console.log("Erro ao atualizar item: ", error)
      return res.status(500).json({ error: "Erro interno no servidor " })
    }
  }

  async deleteItem(req, res) {
    try {
      const { id } = req.params

      const deletedItem = await Item.findByPk(id)

      if (!deletedItem) {
        return res.status(404).json({ message: "Item não encontrado" })
      }

      await Item.destroy({
        where: { id: id },
      })

      return res
        .status(200)
        .json({ message: "Item deletado com sucesso ", deletedItem })
    } catch (error) {
      console.log("Erro ao deletar item: ", error)
      return res.status(500).json({ error: "Erro interno no servidor" })
    }
  }
}

module.exports = new ItemController()
