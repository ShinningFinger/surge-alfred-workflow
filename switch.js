const got = require("got");

async function main() {
  var name = process.argv[2];

  try {
    await got.post("http://127.0.0.1:6166/v1/profiles/switch", {
      json: true,
      body: { name },
      headers: {
        "X-key": "sss",
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(name);
}

main();
