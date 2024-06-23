//Default Parameters
function dets(name,age,batchcode="MERN 11") {
    console.log(name,age,batchcode);
}

// 1. default parameter should be placed at the end of thr parameter list

function dets(name,age,batchcode="MERN 11",city) {
    console.log(name,age,batchcode,city);
}

//2. there should be single default parameter in a function\

function dets(name,age=20,batchcode="MERN 11") {
    console.log(name,age,batchcode);
}

dets("Piyush",25,"MERN 10","BHOPAL")

