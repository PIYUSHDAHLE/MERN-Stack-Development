const boxes = document.querySelectorAll('.box')
const img = document.querySelector('.image')

boxes.forEach((box)=>{
    box.addEventListener('dragover',(dets)=>{
        dets.preventDefault();
    })

    box.addEventListener('drop',()=>{
        box.appendChild(img);
    })
})