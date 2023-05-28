var SHA256 = require("crypto-js/sha256");

var data1 = "Blockchain Rock!";
var dataObject = {
    id: 1,
    body: "With Object Works too",
    time: new Date().getTime().toString().slice(0,-3)
};

function generateHash(obj) {
  var str = JSON.stringify(obj);
  return SHA256(str);
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);
