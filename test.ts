// const cards = $(".card .__question-wrap");

//   if (!cards) {
//     console.log("return, ", idx);
//     return;
//   }

//   cards.each((i, el) => {
//     const id = $(el).find(".__question-count").text().trim();
//     const question = $(el).find(".__question").text().trim();
//     let optList: OptList[] = [];

//     const options = $(el)
//       .find(".__options .js-choose-answer")
//       .each((i, el) => {
//         const opt = $(el).text();
//         const charId = opt[0];
//         const optName = opt.slice(1);

//         optList.push({ charId, optName });
//       });

//     const correctAnswer = $(el)
//       .find(".__answer .__title")
//       .text()
//       .trim()
//       .split(" ")
//       .slice(-1)[0];
//     const desc = $(el).find(".__description > p").text().trim();

//     const data = {
//       id,
//       question,
//       options: optList,
//       correctAnswer,
//       desc,
//     };
//     aptiList.push(data);
//   });