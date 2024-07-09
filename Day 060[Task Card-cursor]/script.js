const card = document.querySelector(".card");
const heart = document.querySelector(".heart");

card.addEventListener("dblclick", () => {
    heart.style.opacity = 1;
    heart.style.scale = 1;

    setTimeout(() => {
        heart.style.opacity = 0;
        heart.style.scale = 0;
    }, 350);
});

const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", (event) => {
    cursor.style.top = `${event.y + 10}px`;
    cursor.style.left = `${event.x + 10}px`;
    console.log(body.event)
});

card.addEventListener("mouseenter", (event) => {
    cursor.style.scale = 3;
    console.log(event)
});

card.addEventListener("mouseleave", (event) => {
    cursor.style.scale = 1;
});


console.dir(document.childNodes);
console.dir(document);