import * as cheerio from "cheerio";
import { writeFile } from "fs";
import { ACTUALPATH, APTITUDETOPICS } from "../constant";
import { AptiList, OptList } from "../types";
import { sleep } from "./utils";

// global variable

let aptiList: AptiList[] = [];
const data: any = {};

// fetcher Helper Func

export async function fetcherHelper(aptitudeLabel: string, idx: number) {
  const response = await fetch(
    `https://www.ambitionbox.com/topics/${aptitudeLabel}/questions-and-answers?page=${idx}`
  );
  const HTMLdata: string = await response.text();
  const $ = cheerio.load(HTMLdata);
  const cards = $(".card .__question-wrap");

  const isPresent = $(cards).find(".__question-count").text().trim();
  if (!cards || !isPresent) {
    console.log("return, ", idx);
    return;
  }

  cards.each((i, el) => {
    const id = $(el).find(".__question-count").text().trim();
    const question = $(el).find(".__question").text().trim();
    let optList: OptList[] = [];

    const options = $(el)
      .find(".__options .js-choose-answer")
      .each((i, el) => {
        const opt = $(el).text();
        const optId = opt[0];
        const optName = opt.slice(1);

        optList.push({ optId, optName });
      });

    const correctAnswer = $(el)
      .find(".__answer .__title")
      .text()
      .trim()
      .split(" ")
      .slice(-1)[0];
    const desc = $(el).find(".__description > p").text().trim();

    const singleApti = {
      id: Number(id),
      question,
      options: optList,
      correctAnswer,
      desc,
    };
    aptiList.push(singleApti);
  });
  await sleep(2000);
  await fetcherHelper(aptitudeLabel, idx + 1);
  if (idx == 1) {
    data[aptitudeLabel] = aptiList;
    aptiList = [];
  }
}

// Fetcher

export async function fetcher() {
  try {
    console.log("Fetching is running ...");
    for (let searchURI of APTITUDETOPICS) {
      await sleep(1000);
      await fetcherHelper(searchURI, 1)
        .then(() => console.log("Fetch is done for: ", searchURI))
        .catch((err) => console.error(err));
    }

    const serializedData = JSON.stringify(data, null, 2);
    writeFile(ACTUALPATH, serializedData, (err) => {
      if (err) {
        console.error("Error: while writing json data ", err);
        return;
      }

      console.log("Data is write in file successfully");
    });
  } catch (error) {
    console.error("ERROR :: Fetcher is not working ", error);
  }
}
