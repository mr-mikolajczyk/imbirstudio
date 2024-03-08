document.addEventListener("DOMContentLoaded", function () {
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
  }, 0)
  .from(".scroll-wrapper", {
    yPercent: 1000,
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

gsap.set(".logo1_logo", { opacity: 0, yPercent: 20 })
ScrollTrigger.batch(".logo1_logo", {
  start: "top 90%",
  onEnter: batch => gsap.to(batch, { yPercent: 0, opacity: 1, ease: "power3.out", stagger: 0.1, duration: 1.25 }),
});

gsap.set(".home_services_item", { opacity: 0, yPercent: 20 })
ScrollTrigger.batch(".home_services_item", {
  start: "top 70%",
  onEnter: batch => gsap.to(batch, { yPercent: 0, opacity: 1, ease: "power3.out", stagger: 0.1, duration: 1 }),
});


document.addEventListener('DOMContentLoaded', function () {
  // Ustawienie źródeł wideo
  const videoSources = {
    mobile: "https://imbirvideowww.s3.eu-central-1.amazonaws.com/Video_Case/Showreel_10x16.mp4",
    desktop: "https://imbirvideowww.s3.eu-central-1.amazonaws.com/Video_Case/Showreel_16x9_nowy.mov",
  };
  const videoElement = document.getElementById("showreel-video");
  let videoSource = videoSources.mobile;
  if (viewportWidth >= 768) {
    videoSource = videoSources.desktop;
  }

  // Store the window width
  let viewportWidth = window.innerWidth

  // Resize Event
  window.addEventListener("resize", function () {

    // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
    if (viewportWidth.innerWidth != viewportWidth) {

      // Update the window width for next time
      viewportWidth = window.innerWidth

      videoElement.src = videoSource;

    }

    // Otherwise do nothing
  })

})

$(".svg-code-logo").each(function (index) {
  let svgCode = $(this).text();
  $(svgCode).insertAfter($(this));
});
