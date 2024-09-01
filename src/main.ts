import { fetcher } from "./lib/fetcher";
import { config } from "dotenv";
import { uploadDataFile } from "./lib/uploadDataFile";
import mongoose from "mongoose";

config({
  path: ".env",
});

(async () => {
  try {
    console.log("Seeding is start ...");
    // await fetcher();
    await uploadDataFile();
  } catch (error) {
    console.error("ERROR :: In main File ", error);
  } finally {
    console.log("Seeding is completed");
  }
})();
