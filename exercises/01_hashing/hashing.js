var SHA256 = require("crypto-js/sha256");

function generateHash(object) {
  return SHA256(object).toString();
}

if (process.argv.length == 3) {
  var message = process.argv[2];
  console.log(generateHash(message));

} else if (process.argv.length > 3) {
  console.log("Too many arguments. If there are spaces in the text, enclose text in quotation marks.")

} else {
  console.log("No input text provided.")
}
