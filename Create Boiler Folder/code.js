const os = require("os");
const path = require("path");
const fs = require("fs");

const desktoppath = path.join(os.homedir(), "Desktop/MERN");

fs.mkdirSync(path.join(desktoppath, "Day 072"));

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
    path.join(desktoppath, "Day 072", "index.html"),
    htmlboilerplate
);
fs.writeFileSync(
    path.join(desktoppath, "Day 072", "style.css"),
    cssboilerplate
);
fs.writeFileSync(
    path.join(desktoppath, "Day 072", "script.js"),
    "//start coding here..."
);
console.log("Boilerplate Created on MERN Folder!");