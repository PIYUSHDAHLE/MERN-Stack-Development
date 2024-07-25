gsap.to("img",{
    width:'80%',
    scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      start:"top 0",
      end:'top -80%',
      scrub:2,
      pin:true
    }
  })
  
  
  gsap.to("#page3 h1",{
    transform:'translateX(-230%)',
    scrollTrigger:{
      trigger:"#page3",
      scroller:"body",
      start:"top 0",
      end:"top -150%",
      scrub:3,
      pin:true
    }
  })