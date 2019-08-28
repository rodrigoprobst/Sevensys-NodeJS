import Server from "../../server.class";
import * as dotenv from "dotenv";
import { sequelize } from "./config/mysql";

import app from "./app";

const PORT: Number | any = process.env.STOCK_PORT || 3004;

(async () => {
  const server = new Server(PORT, app);
})();
