import * as Sequelize from "sequelize";

export const animalDefinition = {
  name: "Animal",
  column: {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    sex: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.DATE
    },
    farmId: {
      type: Sequelize.INTEGER,
      reference: {
        model: "Farm",
        key: "id"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    }
  }
};
