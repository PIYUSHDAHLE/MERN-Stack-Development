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

//step 1

var menucontainer = document.querySelector('.menu-container');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var lines = document.querySelector('#lines');
var slidemenu = document.querySelector('.slide-menu');
var main = document.querySelector('.main');
var flag = 0


menucontainer.addEventListener('click', function(){

    if(flag === 0){
        line1.style.transform = 'rotate(45deg)'
        line2.style.transform = 'rotate(-45deg)'
        lines.style.position = 'absolute'
        slidemenu.style.right = '0'
        main.style.filter = 'blur(0.5rem)'

        flag = 1
    }
    else{
        line1.style.transform = 'rotate(0deg)'
        line2.style.transform = 'rotate(0deg)'
        lines.style.position = 'relative'
        slidemenu.style.right = '-100%'
        main.style.filter = 'blur(0rem)'


        flag = 0
    }
    
  
})

