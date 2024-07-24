// knexfile.js
import dotenv from "dotenv";

dotenv.config();

const knexConfig = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST || "127.0.0.1",
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    },
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    },
  },
};

export default knexConfig;
