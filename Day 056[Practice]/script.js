const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

btn.addEventListener("click",()=>{
    if (h2.innerHTML === "Strange") {
        h2.innerHTML ="Friends";
        h2.style.color = "green";
        btn.innerHTML = "Unfollow";
        btn.style.backgroundColor ="green";
    } else {
        h2.innerHTML ="Strange";
        h2.style.color = "tomato";
        btn.innerHTML = "Follow";
        btn.style.backgroundColor ="tomato";
    }
});
