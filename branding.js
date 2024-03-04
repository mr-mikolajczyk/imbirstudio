var path = document.querySelector('.svg-line_service-list');
var l = 10000;

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_service_about",
      start: "top top",
      scrub: true,
      pin: true,
      end: "bottom+=2500px"
    }
  })
  .to(".branding_item_list", { xPercent: -100 })
  .set(path, {strokeDasharray:l},0)
  .fromTo(path, {strokeDashoffset:l}, {strokeDashoffset:0},0);

