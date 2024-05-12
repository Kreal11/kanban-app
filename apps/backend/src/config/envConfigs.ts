import dotenv from "dotenv";

dotenv.config();
const { DB_HOST = "", PORT = "" } = process.env;

interface EnvsConfig {
  port: string;
  dbHost: string;
}

const envsConfig: EnvsConfig = {
  port: PORT,
  dbHost: DB_HOST,
};

export default envsConfig;
