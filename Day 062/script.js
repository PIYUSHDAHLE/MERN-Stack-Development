const btn = document.querySelector('button');
const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.close');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
    popUp.style.display = 'flex';
});

close.addEventListener('click', () => {
    popUp.style.display = 'none';
});

popUp.addEventListener('click', (event) => {
    if (event.target !== img) {
        popUp.style.display = 'none';
    }
});

