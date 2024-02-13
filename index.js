document.addEventListener("DOMContentLoaded", function() {
    let splide = new Splide(".splide", {
      type: "loop",
      easing: "cubic-bezier(1,0,0.5,1)",
      speed: 400,
    });
    splide.mount();
  });
  
  const servicesItems = document.getElementsByClassName("home_services_item");
  
  for (let i = 0; i < servicesItems.length; i++) {
    servicesItems[i].getElementsByClassName("home_services_number")[0].innerText =
      i + 1 + ".";
  }
  // showreel-wrapper
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".showreel-wrapper",
        scrub: true,
        start: "top 80%",
        end: "140% 60%",
      },
    })
    .to(".showreel-wrapper", {
      scale: 1,
      width: "100%",
      borderRadius: `${0}rem`,
      ease: "power1.in",
    }, 0);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".showreel-wrapper",
        scrub: true,
        start: "top 60%",
        end: "80% 100%",
      },
    })
    .to(".hero_component", {
      opacity: 0,
      scale: 0.9,
      yPercent: 15,
    });

    gsap.set(".logo1_logo",{opacity:0, yPercent: 20})
    ScrollTrigger.batch(".logo1_logo", {
      start: "top 90%",
      onEnter: batch => gsap.to(batch, {yPercent: 0, opacity: 1, ease:"power3.out", stagger: 0.1, duration: 1.25}),
    });
    
    gsap.set(".home_services_item",{opacity:0, yPercent: 20})
    ScrollTrigger.batch(".home_services_item", {
      start: "top 70%",
      onEnter: batch => gsap.to(batch, {yPercent: 0, opacity: 1, ease:"power3.out", stagger: 0.1, duration: 1}),
    });

    // gsap.set(".home_portfolio_item",{opacity:0, yPercent: 20})
    // ScrollTrigger.batch(".home_portfolio_item", {
    //   start: "top 85%",
    //   onEnter: batch => gsap.to(batch, {yPercent: 0, opacity: 1, ease:"power3.out", stagger: 0.1}),
    // });
    
