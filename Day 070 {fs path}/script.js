// File Handling with path & fs / this core module 
const path = require("path");
const fs = require("fs");

// To get the path user path.join
const mypath = path.join("./", "assets", "image.png");
console.log(mypath);

 // To get the extension name use path.extname
console.log("image.png");
console.log(path.extname("image.png")); //to get the extension name
console.log("image.png".split(".")[1]);

 // TO CREATE FILE
 // Async
fs.writeFile("readme.md", "node 2nd day file system", (err) => {
    if (err) throw err;
    console.log("File Created");
});

 // Sync
fs.writeFileSync(
    path.join( "Readme.md"),
    "Hello Boss"
);
console.log("file created!");

 // TO READ FILE
const data = fs.readFileSync(
    path.join("Readme.md"),
    "utf-8"
);
console.log(data);

 // TO APPEND/UPDATE FILE
fs.appendFileSync(
    path.join("Readme.md"),
    " This is new appended data."
);
console.log("Data Appended!");

 // TO DELETE FILE
fs.unlinkSync(path.join("Readme.md"));
console.log("File Deleted!");

 // TO CREATE FOLDER
fs.mkdirSync(path.join("images"));
console.log("folder created!");

 // TO DELETE FOLDER
fs.rmdirSync(path.join("images"));
console.log("Folder Removed");

 // TO RENAME FOLDER/FILE
fs.renameSync("images", "assets");
console.log("Folder Renamed");

 // TO READ FOLDER
const dirs = fs.readdirSync(path.join("assets"));
console.log(dirs)