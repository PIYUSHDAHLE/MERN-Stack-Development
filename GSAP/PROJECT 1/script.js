function smoothScrolling() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function randomImage() {
  var arr = [
    "https://www.datocms-assets.com/106915/1717687178-betteroffstudio_work-loop_10.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687414-betteroffstudio_work-loop_18-1.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687460-betteroffstudio_work-loop_26.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687440-betteroffstudio_work-loop_22.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687454-betteroffstudio_work-loop_25.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687450-betteroffstudio_work-loop_24.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687471-betteroffstudio_work-loop_29.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
  ];

  var randomNumber = Math.floor(Math.random() * arr.length);

  var img = document.querySelector(".textdiv img");

  img.setAttribute("src", arr[randomNumber]);
}

function loader() {
  var growth = document.querySelector(".growth");
  var percent = document.querySelector(".loading-time h3");
  var grow = 0;

  var loadingInterval = setInterval(function () {
    grow++;

    percent.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, 40);

  setTimeout(function () {
    clearInterval(loadingInterval);

    gsap.to("#loader", {
      y: "-100%",
      duration: 0.6,
      delay: 0.4,
    });
  }, 4040);
}

function page1Animation() {
  gsap.to("#page1-heading", {
    scale: 1.3,
    marginTop: "15%",
    scrollTrigger: {
      trigger: "#page1-heading",
      scroller: "body",

      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });
}

function page2Animation() {
  gsap.from("#page2-content1 p", {
    y: 100,
    stagger: 0.15,
    rotate: 1,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page2-content1",
      scroller: "body",
      start: "top 80%",
    },
  });
  gsap.from("#page2-content2 p", {
    y: 100,
    stagger: 0.15,
    rotate: 1,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page2-content2",
      scroller: "body",
      start: "top 80%",
    },
  });
}

function page3Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top -13%",
      end: "top -80%",
      scrub: 1,
      pin: true,
    },
  });

  tl.to(".page3-heading", {
    gap: "500px",
    duration: 0.6,
  });
  tl.to("#page3 .page3-video", {
    opacity: 1,
    duration: 0.5,
  });
  tl.to("#page3 .page3-video", {
    scale: 3,
    top: "45%",
    left: "35%",
    duration: 1,
  });
}

function cursorAnimation() {
  var body = document.querySelector("body");
  var cursor = document.querySelector(".cursor");
  var videoDiv = document.querySelector(".page3-video");

  body.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  videoDiv.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      opacity: 1,
    });
  });
  videoDiv.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      opacity: 0,
    });
  });
}

smoothScrolling();
randomImage();
loader();
page1Animation();
page2Animation();
page3Animation();
cursorAnimation();
