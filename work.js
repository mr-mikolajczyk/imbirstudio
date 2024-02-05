
  //// ----IMG-Reveal----
  let imgFade = gsap.utils.toArray("img");
  imgFade.forEach((item, index) => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      })
      .from(item, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.out",
      });
  });
  
  gsap.utils.toArray(".portfolio_works_image").forEach((el, i) => {
    let portfolioImg = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "0% 75%",
        end: "100% 5%",
        scrub: true,
      },
    });
    portfolioImg.to(el, {
      yPercent: -8,
      ease: "linear",
    });
  });
  
  // ----Call-To-Action----
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section_portfolio_works",
        start: "35% bottom",
        end: "98% bottom",
        toggleActions: "play reverse play reverse",
      },
    })
    .to(".call-to-action", {
      yPercent: -100,
      duration: 0.8,
      ease: "power2.inOut",
    });