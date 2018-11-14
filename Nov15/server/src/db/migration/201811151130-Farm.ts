import { farmDefinition } from "../farm/farmDefinition";

module.exports = {
  up: function(queryInterface, squelize, db) {
    return queryInterface.createTable(
      farmDefinition.name,
      farmDefinition.column
    );
  },
  down: function(queryInterface, squelize, db) {
    return queryInterface.dropTable(farmDefinition.name);
  }
};
