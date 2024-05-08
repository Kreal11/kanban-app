import dotenv from "dotenv";

dotenv.config();
const { DB_HOST, PORT, BASE_URL } = process.env;

interface EnvsConfig {
  port?: string;
  dbHost?: string;
  baseUrl?: string;
}

const envsConfig: EnvsConfig = {
  port: PORT,
  dbHost: DB_HOST,
  baseUrl: BASE_URL,
};

export default envsConfig;
