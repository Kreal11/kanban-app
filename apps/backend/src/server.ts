import app from "./app";
import mongoose from "mongoose";
import "dotenv/config";
import envsConfig from "./config/envConfigs";
import { checkDbHost } from "./config/envChecks/dbHostCheck";

mongoose.set("strictQuery", true);

checkDbHost();

mongoose
  .connect(envsConfig.dbHost)
  .then(() => {
    app.listen(envsConfig.port, () => {
      console.log(`Server running. Use our API on port: ${envsConfig.port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
