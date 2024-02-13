  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  const body = document.querySelector("body"),
  themeToggle = document.querySelector("#theme-toggle"),
  currentTheme = localStorage.getItem("theme");
currentTheme && (body.setAttribute("data-theme", currentTheme), "dark" === currentTheme && themeToggle.classList.add("active")), themeToggle.addEventListener("click", () => {
  let e = body.getAttribute("data-theme"),
    t = "light" === e ? "dark" : "light";
  body.setAttribute("data-theme", t), themeToggle.classList.toggle("active"), localStorage.setItem("theme", t)
});


  gsap.registerPlugin(ScrollTrigger);
  
   //navbar
   const showAnim = gsap
   .from(".navbar-element", {
     yPercent: -150,
     paused: true,
     duration: 0.8,
     ease: "power2.inOut",
   })
   .progress(1);
 
 ScrollTrigger.create({
   start: "top top",
   end: 99999,
   onUpdate: (self) => {
     self.direction === -1 ? showAnim.play() : showAnim.reverse();
   },
 }); 
 gsap.from(".navbar_link", {
  yPercent: -100,
  opacity: 0,
  stagger: 0.1,
});

  //utilities
  let spacerFade = gsap.utils.toArray(".spcr-line");
  spacerFade.forEach((item, index) => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
      .from(item, {
        scaleX: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
  });
  
  let imgFade = gsap.utils.toArray(".home_portfolio_img");
  imgFade.forEach((item, index) => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      })
      .from(item, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.out",
      });
  });
  
  
  $(function() {  
    $('.button')
      .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      });
  });

  //date
  let today = new Date();
  let year = today.getFullYear();
  let showYear = document.querySelectorAll("[data-year]");
  
  showYear.forEach((element) => {
    element.innerText = year;
  });


  const scrollToTopButton = document.querySelector('.footer-top');

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
