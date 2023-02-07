const fs = require("fs");

const routes = fs.readFileSync("./routes.js", "utf-8");
const funcString = `${routes}`;

fs.writeFileSync("./writtenRoutes.js", funcString);

const importedFunc = require("./writtenRoutes.js");
console.log("Written to and read");
importedFunc.readOnly();
