import * as express from "express";
import * as dotenv from "dotenv";
import * as http from "http";

dotenv.config();

class Server {
  public app: express.Application;
  public PORT: Number;

  constructor(port: Number, app) {
    this.PORT = port;
    this.app = app;
  }

  private start() {
    http.createServer(this.app).listen(this.PORT, () => {
      console.log(`Started as ${this.PORT}`);
    });
  }

  public Hello() {
    console.log("Hello World");
  }
}
export default Server;
