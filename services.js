gsap.timeline({
    scrollTrigger: {
      trigger: ".section_services_hero",
      toggleActions: "play none none reverse",
  
      toggleClass: { targets: "body", className: "services" },
      start: "top 80",
      end: "bottom 80",
    },
  });