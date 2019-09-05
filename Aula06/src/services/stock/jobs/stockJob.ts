import * as cron from "cron";
import { StockController } from "../controllers/StockController";

export class StockJobs {
  public stockController: StockController = new StockController();

  public async startJobs() {
    const jobProcessStockIN = new cron.CronJob({
      // Seconds: 0-59
      // Minutes: 0-59
      // Hours: 0-23
      // Day of Month: 1-31
      // Months: 0-11 (Jan-Dec)
      // Day of Week: 0-6 (Sun-Sat
      cronTime: "*/30 * * * * *", // A cada 30s
      onTick: async () => {
        try {
          const resultJob = await this.stockController.processJob("IN");
          console.log(resultJob + "IN");
        } catch (e) {
          console.log(e.message);
        }
      },
      start: true,
      timeZone: "America/Sao_Paulo"
    });
    const jobProcessStockOUT = new cron.CronJob({
      // Seconds: 0-59
      // Minutes: 0-59
      // Hours: 0-23
      // Day of Month: 1-31
      // Months: 0-11 (Jan-Dec)
      // Day of Week: 0-6 (Sun-Sat
      cronTime: "*/30 * * * * *", // A cada 30s
      onTick: async () => {
        try {
          const resultJob = await this.stockController.processJob("OUT");
          console.log(resultJob + "OUT");
        } catch (e) {
          console.log(e.message);
        }
      },
      start: true,
      timeZone: "America/Sao_Paulo"
    });
  }
}
