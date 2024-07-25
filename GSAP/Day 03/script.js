gsap.from("#page2 h1",{
    scale:1.3,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:"#page2 h1",
      scroller:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
      scrub:2
    }
  })
  
  gsap.from(".card",{
    y:130,
    opacity:0,
    duration:0.8,
    stagger:0.3,
    scrollTrigger:{
      trigger:".card",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
  })