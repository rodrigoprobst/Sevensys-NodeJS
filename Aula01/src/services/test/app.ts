import AppClass from "../../app.class";
import { testeRoutes } from "./routes";

const routes = new testeRoutes();

class App extends AppClass {
  constructor(routes) {
    super(routes);

    this.config();
  }
}

export default new App(routes);
