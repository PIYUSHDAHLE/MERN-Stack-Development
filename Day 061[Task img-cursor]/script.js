const element = document.querySelectorAll(".element");

element.forEach((ele, i) => {
    ele.addEventListener("mouseenter", (e) => {
        ele.children[1].style.opacity = 1;
    });
    ele.addEventListener("mouseleave", (e) => {
        ele.children[1].style.opacity = 0;
    });
    ele.addEventListener("mousemove", (e) => {
        ele.children[1].style.left = `${e.x}px`;
    });
    
});
