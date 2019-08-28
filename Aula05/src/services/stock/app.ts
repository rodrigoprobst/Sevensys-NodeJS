import AppClass from "../../app.class";
import { stockRoutes } from "./routes";
import * as mongoose from "mongoose";
import { configMongo } from "../../config/mongodb";

const routes = new stockRoutes();

class App extends AppClass {
  constructor(routes) {
    super(routes);

    this.mongoSetup();

    this.config();
  }

  private mongoSetup() {
    mongoose.Promise = global.Promise;
    mongoose.connect(configMongo.uri);
  }
}

export default new App(routes).app;
