const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
    const element = document.querySelector(`.${e.key}`);
    element.style.backgroundColor = "white";
    element.style.color = "black";
    element.children[0].play();
});

body.addEventListener("keyup", (e) => {
    const element = document.querySelector(`.${e.key}`);
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.children[0].pause();
    element.children[0].load();
});
