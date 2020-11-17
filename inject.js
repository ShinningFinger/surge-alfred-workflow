var fs = require("fs");

const surgeProfilePath = `${process.env.HOME}/Library/Application\ Support/Surge/Profiles`;

const profileNames = fs.readdirSync(surgeProfilePath);
console.log("profileNames :>> ", profileNames);

profileNames.forEach((name) => append(surgeProfilePath + "/" + name));

function append(path) {
  const body = fs.readFileSync(path).toString();
  const sentence = "http-api = sss@127.0.0.1:6166";

  // If no sentence exists, append it
  if (body.indexOf(sentence) < 0) {
    const data = body.split("\n");
    console.log("data :>> ", data);
    const index = data.indexOf("[General]");
    if (index < 0) {
      console.log("no [General] section");
      return;
    }
    data.splice(index + 1, 0, sentence);
    const output = data.join("\n");
    fs.writeFileSync(path, output);
  }
  console.log("sentence exists");
}
