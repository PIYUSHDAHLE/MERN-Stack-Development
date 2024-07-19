const main = document.querySelector('.main');
const cursur = document.querySelector('.cursur');

main.addEventListener('mousemove',(dets)=>{
    cursur.style.top = dets.y + "px";
    cursur.style.left = dets.x + "px";
});