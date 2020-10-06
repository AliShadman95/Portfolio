const fs = require("fs");
// First I want to read the file

const languageToSwitch = process.argv[process.argv.length - 2];
const envType = process.argv[process.argv.length - 1];

console.log(process.argv);

let path = ".env";

switch (envType) {
  case "development":
    path = ".env.development";
    break;
  case "production":
    path = ".env.production";
    break;
  default:
    path = ".env.development";
    break;
}

fs.readFile(path, "utf8", function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data;
  var result = content;

  if (languageToSwitch === "it") {
    result = content.replace(
      /REACT_APP_MAIN_LANGUAGE=en/g,
      "REACT_APP_MAIN_LANGUAGE=it"
    );
  } else {
    result = content.replace(
      /REACT_APP_MAIN_LANGUAGE=it/g,
      "REACT_APP_MAIN_LANGUAGE=en"
    );
  }

  fs.writeFile(path, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
