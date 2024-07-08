document.querySelectorAll('img').forEach(img =>{
    img.addEventListener('click', ()=>{
        const src = img.src;
        document.querySelector('.pop').style.display ="flex"
        document.querySelector('.pop img').src = src
    })
});

document.querySelector('.pop').addEventListener('click' ,()=>{
    document.querySelector('.pop').style.display ="none";
});