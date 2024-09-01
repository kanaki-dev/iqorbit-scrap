import { fileURLToPath } from "url";
import { dirname } from "path";

export const DB_NAME = "test_db"; // Original DB Name: "IQorbit_db"
export const OUTFILENAME: string = "data.json";


export const SLEEPTIME: number = 50000; // in ms

export const __FILENAME = fileURLToPath(import.meta.url);
export const __DIRNAME = dirname(__FILENAME);
export const ACTUALPATH = `${__DIRNAME}\\dataFile\\${OUTFILENAME}`;

export const APTITUDETOPICS: string[] = [
  "aptitude",
  "data-interpretation",
  "verbal-ability",
  "logical-reasoning",
  "verbal-reasoning",
  "non-verbal-reasoning",
  "puzzles",
  "c-programming",
  "c-plus-plus-programming",
  "c-sharp-programming",
  "java-programming",
];

