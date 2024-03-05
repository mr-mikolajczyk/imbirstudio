let pS = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".section_photos",
      start: "top center",
      scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollba
    },
  });

  pS.to(".service_photos-scroller", {
    xPercent: -10
  })

let sections = gsap.utils.toArray(".branding_scroll-item");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".branding-wrapper",
      pin: true,
      scrub: 2,
    //   snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=2000"
    }
  });

  let strategy = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#strategy",
      scrub: 1,
      start: "-50% center",
      end: "bottom top",
      
    }
  })
  .from(".branding_strategy-illustration", { rotation: 270, yPercent:75, xPercent:150, ease: "power2.out"})
  
  gsap.from("#strategy .heading-style-h2, #strategy p",{
    opacity:0,
    yPercent:15,
    stagger:0.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#strategy",
        toggleActions: "play none none reverse",
        start:"0% 75%",
     }
});

  let logo = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#logo",
      containerAnimation: scrollTween,
      start: "-25% center",
      end: "right center",
      scrub: 1.5
    }
  })
  .from(".branding-logo-element",{
    backgroundColor:"#64704b",  ease: "power4.out"
  })
  .from(".branding_animation-grid",{
    opacity:0.25,  ease: "power4.out"
  },0)
  .to(".branding_animation-grid", { rotation: -90, ease: "power2.out"},0)
  .to(".branding-logo-element", { borderRadius: `${1}rem`, rotation: 225, scale: 1.02, ease: "power2.out",},0);

let logoText = gsap
    .timeline({
        scrollTrigger:{
        trigger: "#logo",
        containerAnimation: scrollTween,
        start:"25% center",
        end: "100% center",
        toggleActions: "play none none reverse",
    }
     })
     .from("#logo .heading-style-h2, #logo p",{
        opacity:0,
        yPercent:15,
        stagger:0.1,
        ease: "power2.out"},0)


  
  let keyvisual = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#keyvisual",
      containerAnimation: scrollTween,
      start: "15% center",
      end: "right center",
      toggleActions: "play none none reverse",
      
    }
  })
  .from(".branding_animation-id-grid",{xPercent:-5, rotation:5,scale:0.9, ease: "power4.inOut",duration: 1})
  .from(".color1", { yPercent:100, rotation: 45, scale: 0.5, ease: "power3.out"},0)
  .from(".color2", { yPercent:100, rotation: 45, scale: 0.5, ease: "power3.out"},0.25)
  .from(".color3", { yPercent:100, rotation: 45, scale: 0.5, ease: "power3.out"},0.5)
  .from(".color4", { yPercent:120, rotation: 45, scale: 0.5, ease: "power3.out"},0.75);

  let kvText = gsap
    .timeline({
        scrollTrigger:{
        trigger: "#keyvisual",
        containerAnimation: scrollTween,
        start: "10% center",
      end: "right center",
        toggleActions: "play none none reverse",
    }
     })
     .from("#keyvisual .heading-style-h2, #keyvisual p",{
        opacity:0,
        yPercent:15,
        stagger:0.1,
        ease: "power2.out"},0)
  
  let path = document.querySelector(".branding-path");
  let pathLenght = 500;

  let communication = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#communication",
      containerAnimation: scrollTween,
      start: "left center",
      end: "right center",
      toggleActions: "play none none reverse",      
    }
  })
  .set(path, {strokeDashoffset: pathLenght})
  .from(".branding_comunication-illustration", {rotate: 180, ease: "power2.inOut", duration: 0.5},0)
  .fromTo(path,{strokeDashoffset: pathLenght}, {strokeDashoffset: 0, ease: "power3.inOut", duration: 1},0.1)
  .from (".branding-letter",{opacity:0, stagger: 0.1},0.35)

  let communicationText = gsap
  .timeline({
      scrollTrigger:{
      trigger: "#communication",
      containerAnimation: scrollTween,
      start:"25% center",
      end: "100% center",
      toggleActions: "play none none reverse",
  }
   })
   .from("#communication .heading-style-h2, #communication p",{
      opacity:0,
      yPercent:15,
      stagger:0.1,
      ease: "power2.out"},0);


      let pSrtl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".section_photos.rtl",
          start: "top center",
          scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollba
        },
      });
    
      pSrtl.from(".service_photos-scroller.rtl", {
        xPercent: -10
      })


      let hiw = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".timeline-component",
          start: "top 75%",
          end: "bottom center",
          markers:true,
          scrub:1, // smooth scrubbing, takes 1 second to "catch up" to the scrollba
        },
      });
    
      hiw.to(".timeline-line", {
        height: "100%"
      })

     