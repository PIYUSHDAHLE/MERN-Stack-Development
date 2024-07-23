var tl = gsap.timeline()

tl.from("#nav h2",{
  y:-50,
  duration:0.5,
  delay:0.2,
  opacity:0
})

tl.from("#nav h4",{
  y:-50,
  opacity:0,
  duration:0.6,
  stagger:0.2
})

tl.from("#center h1",{
  opacity:0,
  duration:0.5,
  y:50
})
tl.from("#img3,#img2",{
  y:-50,
  opacity:0,
  scale:0.5,
  duration:0.5
})
tl.from("#center p",{
  opacity:0,
  duration:0.5,
  y:50
})
tl.from("button",{
  scale:1.3,
  duration:0.5,
  opacity:0
})
tl.from("#img1",{
  x:-100,
  opacity:0,
  duration:0.3
})
tl.from("#img4",{
  x:100,
  opacity:0,
  duration:0.3
})
tl.to("#img3,#img2",{
  y:10,
  duration:3,
  repeat:-1,
  yoyo:true
})

