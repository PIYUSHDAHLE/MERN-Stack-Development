gsap.to(".box",{
    x:600,
    y:400,
    duration:5,
    delay:1,
    repeat:-1,
    yoyo:true,
    backgroundColor:"green",
    borderRadius:"50%",
    rotate:5000
})

// gsap.from(".box",{
//     x:600,
//     y:400,
//     duration:5,
//     delay:1,
//     repeat:-1,
//     yoyo:true,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     rotate:5000,
//     scale:3
// })

gsap.to("h1",{
    top:150,
    stagger:1,
    opacity:1
})

