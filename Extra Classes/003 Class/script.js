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


menucontainer.addEventListener('click', function () {

    if (flag === 0) {
        line1.style.transform = 'rotate(45deg)'
        line2.style.transform = 'rotate(-45deg)'
        lines.style.position = 'absolute'
        slidemenu.style.right = '0'
        main.style.filter = 'blur(0.5rem)'


        flag = 1
    }
    else {
        line1.style.transform = 'rotate(0deg)'
        line2.style.transform = 'rotate(0deg)'
        lines.style.position = 'relative'
        slidemenu.style.right = '-100%'
        main.style.filter = 'blur(0rem)'


        flag = 0
    }


})

Shery.makeMagnet(".menu-container,.box-up h1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.mouseFollower();


setTimeout(() => {
    var popup = document.querySelector('.pop-up')
    var main = document.querySelector('.main')
    popup.style.display = 'block'
    main.style.filter = 'blur(1rem)'

}, 4000);

var cancel = document.querySelector('.cancel i')
var popup = document.querySelector('.pop-up')
var main = document.querySelector('.main')

cancel.addEventListener('click', () => {
    popup.style.display = 'none'
    main.style.filter = 'blur(0rem)'
})




// var page1 = document.querySelector('.page1');
// var button = document.querySelector('.page1 button');


// function getRandomColor() {
//     const getRandomValue = () => Math.floor(Math.random() * 256);
    
//     const r = getRandomValue();
//     const g = getRandomValue();
//     const b = getRandomValue();
    
//     return `rgb(${r},${g},${b})`;
// }

// document.querySelector('.page1').addEventListener('click', () => {
//     page1.body.style.backgroundColor = getRandomColor();
   
// });


    // page1.addEventListener('click', ()=>{
     
    //     page1.style.backgroundColor = getRandomColor();

    // })
    




// javascript me me ek cheex hoti hai jiski help se hum koi random color
// random word 
// random letter
// random number 

// on the basis of click, mousemouse pe change kara skte hain

// Math.floor(Math.random() * 256);

const page1 = document.querySelector('.page1')


function getRandomColor(){

    const getRandomValue = ()=> Math.floor(Math.random() * 256)
    const r = getRandomValue()
    const g = getRandomValue()
    const b = getRandomValue()

    return `rgb(${r},${g},${b})`

}

page1.addEventListener('click', function(){
    page1.style.backgroundColor =  getRandomColor()
})




// ${}  whats is that ????????????????????????


//jo template literals hote hai wohh dynamic value ko show karate hai,  


