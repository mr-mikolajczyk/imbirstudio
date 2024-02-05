gsap.timeline({
    scrollTrigger: {
      trigger: ".section_services_hero",
      toggleActions: "play none none reverse",
  
      toggleClass: { targets: "body", className: "services" },
      start: "top 80",
      end: "bottom 80",
    },
  });

  gsap.set(".aside_item",{opacity:0, y: 50})
  ScrollTrigger.batch(".aside_item", {
    start: "top 70%",
    onEnter: batch => gsap.to(batch, {yPercent: 0, opacity: 1, ease:"power3.out", stagger: 0.1, duration: 1}),
  });

  gsap.set(".services_item",{opacity:0, yPercent: 20})
  ScrollTrigger.batch(".services_item", {
    start: "top 70%",
    onEnter: batch => gsap.to(batch, {yPercent: 0, opacity: 1, ease:"power3.out", stagger: 0.1, duration: 1}),
  });
