const { promises: fs } = require("fs");

const shlok_list = require('./shlok_list.json');

async function main() {
    const shlok = shlok_list[Math.floor(Math.random() * shlok_list.length)];
    const readmeTemplate = (await fs.readFile("./README.temp.md")).toString("utf-8");
    const readme = readmeTemplate.replace("{shlok}", shlok.shlok.replace(/\n/g, ` `)).replace("{chapter}", `${shlok.chapter}`).replace("{verse}", `${shlok.verse}`);
    await fs.writeFile("README.md", readme);
}

main();