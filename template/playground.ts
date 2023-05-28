import fs from "fs";
import path from "path";

const str = fs.readFileSync(path.join(__dirname, "./template.txt"));
const newStr = str
  .toString()
  .split("\n")
  .map((item) => `${item.replaceAll('"', '\\"')}\\n`);

console.log(newStr.join(""));
