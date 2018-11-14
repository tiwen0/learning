import * as Sequelize from "sequelize";

export class DbContext {
  public connection: Sequelize.Sequelize;

  constructor(config: Sequelize.Options) {
    this.connection = new Sequelize(config);
  }

  async sync(): Promise<void> {
    return this.connection.sync();
  }
  async close(): Promise<void> {
    return this.connection.close();
  }
}
