const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
        console.log(`Database Connection Established!`);
    })
    .catch((err) => {
        console.log(`Database Error: ${err.message}`);
    });
