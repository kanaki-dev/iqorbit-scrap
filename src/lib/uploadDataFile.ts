import { readFile } from "node:fs/promises";
import { ACTUALPATH, APTITUDETOPICS } from "../constant";
import connectDB from "../db";
import { Aptitudes } from "../model/aptitude.model";
import { AptiList, OptList } from "../types";

export async function uploadDataFile() {
  try {
    console.log("Uploading is start.");
    await connectDB();
    const data = await readFile(ACTUALPATH, { encoding: "utf8" });
    let jsonObj = await JSON.parse(data);
    for (let x of APTITUDETOPICS) {
      let tempJsonObj = jsonObj[x];

      tempJsonObj = tempJsonObj?.map((el: AptiList) => ({
        ...el,
        options: el.options.map((item: OptList) => ({
          ...item,
          optId: item.optId?.toUpperCase(),
        })),
        correctAnswer: el.correctAnswer?.toUpperCase(),
      }));

      tempJsonObj?.forEach(async (aptitude: AptiList) => {
        await Aptitudes.create({
          question: aptitude.question || null,
          label: x || "",
          options: aptitude.options || "",
          answer: aptitude.correctAnswer || "",
          desc: aptitude.desc || "",
        });
      });
    }
  } catch (err) {
    console.log("ERROR :: While Seeding ", err);
  }
}

uploadDataFile();
