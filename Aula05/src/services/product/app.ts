import AppClass from "../../app.class";
import { productRoutes } from "./routes";

const routes = new productRoutes();

class App extends AppClass {
  constructor(routes) {
    super(routes);

    this.config();
  }
}

export default new App(routes).app;
