import { DbContext } from "../DbContext";
import { config } from "../../config";
import * as Umzug from "umzug";

const db = new DbContext(config);
const options = buildOptions(db, "dist/db/migration");

migrate(new Umzug(options));

function migrate(migrator: Umzug.Umzug) {
  migrator
    .up()
    .then(() => process.exit(0))
    .catch(e => console.error(e, "Migrations failed"));
}

function buildOptions(db, path): Umzug.UmzugOptions {
  return {
    storage: "sequelize",
    storageOptions: {
      sequelize: db.connection
    },
    migrations: {
      params: [
        db.connection.getQueryInterface(),
        db.connection,
        db,
        function() {
          throw new Error(
            'Migration tried to use old style "done" callback. Please return a promise instead.'
          );
        }
      ],
      path: path || "migration",
      pattern: /^\d+[\w-]+\.js$/,
      wrap: <T>(fun: T) => {
        return fun;
      }
    }
  };
}
