const fs = require("fs");
// First I want to read the file

const languageToSwitch = process.argv[process.argv.length - 2];

console.log(languageToSwitch, process.argv);

const path = "./.env";

fs.readFile(path, "utf8", function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data;

  if (languageToSwitch === "it") {
    var result = content.replace(
      /REACT_APP_MAIN_LANGUAGE=en/g,
      "REACT_APP_MAIN_LANGUAGE=it"
    );
  } else {
    var result = content.replace(
      /REACT_APP_MAIN_LANGUAGE=it/g,
      "REACT_APP_MAIN_LANGUAGE=en"
    );
  }

  fs.writeFile(path, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
