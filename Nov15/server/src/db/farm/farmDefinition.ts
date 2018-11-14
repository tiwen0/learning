import * as Sequelize from "sequelize";

export const farmDefinition = {
  name: "Farm",
  column: {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    lat: {
      type: Sequelize.FLOAT
    },
    size: {
      type: Sequelize.FLOAT
    },
    long: {
      type: Sequelize.FLOAT
    }
  }
  //   options: {
  //     tableName: "Farm"
  //   }
};
