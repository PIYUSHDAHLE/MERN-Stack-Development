// document object model 

// js me dom ka matlv document object model hota hai, 
// yehweb documents jo ki ek structured way me represent 
// karta hai dom ke through aap html
// ko manipulate karskte hai or dusri bhaasha me bole to html me 
//changes karskte hai by the help of 
// dom 


// dom me hotey hai kuch event 

// jese ki kese events


// click, mouseenter, mouseleave, mousemove, key down

//first step 
// first step
var main = document.querySelector('.main')
var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var check = 2


//step2 


button.addEventListener('click',function(){
    if(check === 2 ){
        main.style.backgroundColor = 'salmon'
        h1.innerHTML = 'salmon'
        check = 1
    }
    else{
        main.style.backgroundColor = 'yellow'
        h1.innerHTML = 'yellow'
        check = 2
    }
})

