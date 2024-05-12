import envsConfig from "../envConfigs";

export function checkDbHost() {
  if (!envsConfig.dbHost) {
    console.error("No dbHost in envConfigs");
    process.exit(1);
  }
}
