import * as dotenv from "dotenv";
dotenv.config();

export const mysqlDefaults: any = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  options: {
    dialect: "mysql",
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    operatorAliases: false,
    define: {
      charset: "utf8",
      dialectOptions: {
        collate: "utf8_general_ci"
      },
      timestamps: true,
      freezeTableName: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
