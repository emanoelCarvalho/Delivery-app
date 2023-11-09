const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Cardapio extends Model {
  dia;
}

Cardapio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cardapio",
    freezeTableName: true,
  }
);

Cardapio.sync({
  force: true,
}).then(() => {
  console.log("A tabela Cardapio foi criada");
});

module.exports = Cardapio;
