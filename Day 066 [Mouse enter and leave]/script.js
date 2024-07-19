const video = document.querySelector('.main video')
const button = document.querySelector('.main button')

button.addEventListener('mouseenter', ()=> {
    video.style.opacity = 1
    button.style.opacity = 0
})

button.addEventListener('mouseleave', () => {
    video.style.opacity = 0
    button.style.opacity = 1
})