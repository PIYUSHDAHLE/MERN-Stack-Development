const os = require("os");
const path = require("path");
const fs = require("fs");
// console.log(os.userInfo());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.homedir());

const desktoppath = path.join(os.homedir(), "Desktop");

fs.mkdirSync(path.join(desktoppath, "boilerplate"));

const htmlboilerplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet" />
</head>
<body>
    
<script src="script.js"></script>
</body>
</html>`;

const cssboilerplate = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    width: 100%;
}
`;

fs.writeFileSync(
    path.join(desktoppath, "boilerplate", "index.html"),
    htmlboilerplate
);
fs.writeFileSync(
    path.join(desktoppath, "boilerplate", "style.css"),
    cssboilerplate
);
fs.writeFileSync(
    path.join(desktoppath, "boilerplate", "script.js"),
    "//start coding here..."
);
console.log("Boilerplate Created on Desktop!");