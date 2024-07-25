// File Handling with path & fs
const path = require("path");
const fs = require("fs");

// To get th path user path.join
// const mypath = path.join("./", "assets", "image.png");
// console.log(mypath);

// To get the extension name use path.extname
// console.log("image.png");
// console.log(path.extname("image.png")); //to get the extension name
// console.log("image.png".split(".")[1]);

// TO CREATE FILE
// async
// fs.writeFile("readme.md", "node 2nd day file system", (err) => {
//     if (err) throw err;
//     console.log("File Created");
// });

// sync
// fs.writeFileSync(
//     path.join("public", "config", "Readme.md"),
//     "This is Node 2nd day file"
// );
// console.log("file created!");

// TO READ FILE
// const data = fs.readFileSync(
//     path.join("public", "config", "Readme.md"),
//     "utf-8"
// );
// console.log(data);

// TO APPEND/UPDATE FILE
// fs.appendFileSync(
//     path.join("public", "config", "Readme.md"),
//     " This is new appended data."
// );
// console.log("Data Appended!");

// TO DELETE FILE
// fs.unlinkSync(path.join("public", "config", "Readme.md"));
// console.log("File Deleted!");

// TO CREATE FOLDER
// fs.mkdirSync(path.join("public", "images"));
// console.log("folder created!");

// TO DELETE FOLDER
// fs.rmdirSync(path.join("public", "images"));
// console.log("Folder Removed");

// TO RENAME FOLDER/FILE
// fs.renameSync("public/images", "public/assets");
// console.log("Folder Renamed");

// TO READ FOLDER
// const dirs = fs.readdirSync(path.join("public"));
// console.log(dirs)