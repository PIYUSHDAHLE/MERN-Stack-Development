gsap.to("#page1-heading",{
    scale:1.3,
    marginTop:"15%",
    scrollTrigger:{
        trigger:"#page1-heading",
        scroller:"body",

        start:"top 50%",
        end:"top 0",
        scrub:2
    }
})


gsap.from('#page2-content1 p',{
    y:100,
    stagger:0.15,
    rotate:1,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:"#page2-content1",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from('#page2-content2 p',{
    y:100,
    stagger:0.15,
    rotate:1,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:"#page2-content2",
        scroller:"body",
        start:"top 80%",
    }
})