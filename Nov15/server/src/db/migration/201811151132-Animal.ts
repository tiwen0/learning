import { animalDefinition } from "../animal/animalDefinition";

module.exports = {
  up: function(queryInterface, squelize, db) {
    return queryInterface.createTable(
      animalDefinition.name,
      animalDefinition.column
    );
  },
  down: function(queryInterface, squelize, db) {
    return queryInterface.dropTable(animalDefinition.name);
  }
};
