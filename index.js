const { promises: fs } = require("fs");

const shloka_list = require('./shloka_list.json');

async function main() {
    const shloka = shloka_list[Math.floor(Math.random() * shloka_list.length)];
    const readmeTemplate = (await fs.readFile("./README.temp.md")).toString("utf-8");
    const readme = readmeTemplate
        .replace("{chapter}", `${shloka.chapter}`)
        .replace("{verse}", `${shloka.verse}`)
        .replace("{shloka}", shloka.shloka.replace(/\n/g, ` `))
        .replace("{translation}", `${shloka.translation}`)
        .replace("{hindi_translation}", `${shloka.hindi_translation}`);
    await fs.writeFile("README.md", readme);
}

main();