gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

//------------------------------
//animacja header na podstronach
//------------------------------

gsap
  .timeline()
  .from(".header-main_wrapper, .navbar, .about-info_component", {
    ease: "linear",
    autoAlpha: 0
  })
  .from(".navbar-logo-left-container", { opacity: 0, duration: 0.4 }, 0)
  .from("[data-main-heading]", {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power2.out"
  })
  .from(
    "[data-main-tagline]",
    {
      opacity: 0,
      y: 60,
      duration: 0.6,
      ease: "power2.out"
    },
    "<0.4"
  )
  .from("[data-about-heading]", {
    opacity: 0,
    x: -120,
    duration: 1,
    ease: "power2.out"
  })
  .from(
    "[data-about-paragraph]",
    {
      opacity: 0,
      x: 90,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2
    },
    "<0.3"
  )
  .from(
    "[data-about-image]",
    {
      x: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    },
    "<0.3"
  );

//-----------------------
//animacja dropdown arrow
//-----------------------

const dropdownToggles = document.querySelectorAll(".nav_dropdown-component");
dropdownToggles.forEach((toggle) => {
  const iconRotate = gsap.to(toggle.querySelector(".nav_dropdown-icon"), {
    rotate: -180,
    paused: true
  });
  toggle.addEventListener("mouseenter", () => iconRotate.play());
  toggle.addEventListener("mouseleave", () => iconRotate.reverse());
});

//----------------------------------------------------------
//animacja hover in/out na wszystkie buttony oprÄĹcz submit'a
//----------------------------------------------------------

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  const circle = button.querySelector(".button_circle-bg");
  const text = button.querySelector(".button_text");
  const tl = gsap
    .timeline({ paused: true })
    .to(circle, { scale: 14, duration: 0.8, ease: "power2.out" })
    .to(
      text,
      {
        color: "#242b36",
        duration: 0.4,
        ease: "none"
      },
      0
    );
  button.addEventListener("mouseenter", () => tl.play());
  button.addEventListener("mouseleave", () => tl.reverse());
});

//animacja hover in/out dla button submit w formularzu (jest inaczej zbudowany)
const submitButton = document.querySelector(".button_submit");
if (submitButton) {
  const submitTl = gsap
    .timeline({ paused: true })
    .to(submitButton.querySelector(".button_circle-bg"), {
      scale: 14,
      duration: 1,
      ease: "power3.out"
    })
    .to(
      submitButton.querySelector(".button-submit"),
      { color: "#242b36", duration: 0.4, ease: "none" },
      0
    );
  submitButton.addEventListener("mouseenter", () => submitTl.play());
  submitButton.addEventListener("mouseleave", () => submitTl.reverse());
}

//------------------------------------------
//animacja zdjĂÂĂÂ z zielonĂÂ nakÄšÂadkĂÂ na hover
//------------------------------------------

const offerImages = document.querySelectorAll(".green_img-wrapper");
offerImages.forEach((image) => {
  const img = image.querySelector(".green_image");
  const imgBg = image.querySelector(".green_img-overlay");
  const imgTl = gsap
    .timeline({ paused: true })
    .to(img, { scale: 1, duration: 1, ease: "power2.inOut" })
    .to(
      imgBg,
      { backgroundColor: "transparent", duration: 1, ease: "power2.inOut" },
      0
    );
  image.addEventListener("mouseenter", () => imgTl.play());
  image.addEventListener("mouseleave", () => imgTl.reverse());
});

//----------------------
//sekcja about wyrÄĹÄšĹşniki
//----------------------
gsap.from(".about-desc_card", {
  y: 60,
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section-about-desc",
    start: "top 80%"
  },
  stagger: 0.1
});


 const sectionHelp = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-help",
        start: "top 70%"
      }
    });
    sectionHelp
      .from("[data-animation-left=help]", {
        opacity: 0,
        x: -80,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      })
     .from(
    "[data-animation-right=help]",
    {
      x: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1
    },
    "<0.3"
);
 const sectionBhp = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-bhp",
        start: "top 70%"
      }
    });
    sectionHelp
      .from("[data-animation-left=bhp]", {
        opacity: 0,
        x: -80,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      })
     .from(
    "[data-animation-right=bhp]",
    {
      x: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1
    },
    "<0.3"
);

//--------------------
//animacja ciekawostek
//--------------------
function lineSet() {
  let pathWhite = document.querySelector(".info_path-svg-wrapper").offsetWidth;
  let pathGreen = document.querySelector(".path_svg-offset");
  pathGreen.style.setProperty("width", pathWhite + "px");
}
lineSet();
window.addEventListener("resize", lineSet);

ScrollTrigger.matchMedia({
  // skrypt dla desktopa powyÄšĹşej 1920px
  "(min-width: 1920px)": function () {
    gsap.defaults({ ease: "none" });
    gsap.set("#circle, .info_path-circle", {
      xPercent: -10,
      yPercent: 80,
      transformOrigin: "50% 50%"
    });

    //kropki rosnĂÂ na scrolla
    const pulses = gsap
      .timeline({
        defaults: {
          scale: 1.5,
          fill: "#00E783",
          transformOrigin: "center",
          ease: "elastic(2.5, 1)"
        }
      })
      .set(".ball01", {
        scale: 1.5,
        color: "#00E783",
        transformOrigin: "center"
      })
      .to(".ball02", {}, 0.9)
      .to(".ball03", {}, 1.75)
      .to(".ball04", {}, 2.8);

    //master timeline, ktory kontruluje scroll'a
    const main = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-info",
          start: "top 0%",
          end: "+=900",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1
        }
      })
      .to(".info_path-circle", { autoAlpha: 1, duration: 0.05 })
      .to(
        ".info_green-line",
        {
          width: "100%",
          duration: 4.2
        },
        0
      )
      .to(
        ".info_path-circle",
        {
          motionPath: {
            path: "#path-2",
            align: "#path-2",
            alignOrigin: [0.5, 0.5]
          },
          duration: 3
        },
        0
      )
      .add(pulses, 0)
      .to(
        ".info_path-circle",
        { visibility: "hidden", duration: 0.01 },
        "-=1.2"
      );

    //animacja contentu:
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-info",
        start: "top 0%",
        end: "+=900",
        scrub: true
      }
    });
    contentTl
      .from(".info_card", {
        opacity: 0,
        y: 80,
        stagger: 0.3
      })
      .to(
        ".info_number",
        {
          color: "#00E783",
          duration: 0.1,
          stagger: 0.3
        },
        "<"
      );
  },
  // skrypt dla desktopa do 1920px
  "(max-width: 1919px and min-width: 992px)": function () {
    gsap.defaults({ ease: "none" });
    gsap.set("#circle, .info_path-circle", {
      xPercent: -10,
      yPercent: 80,
      transformOrigin: "50% 50%"
    });

    //kropki rosna na scrolla
    const pulses = gsap
      .timeline({
        defaults: {
          scale: 1.5,
          fill: "#00E783",
          transformOrigin: "center",
          ease: "elastic(2.5, 1)"
        }
      })
      .set(".ball01", {
        scale: 1.5,
        color: "#00E783",
        transformOrigin: "center"
      })
      .to(".ball02", {}, 0.85)
      .to(".ball03", {}, 1.75)
      .to(".ball04", {}, 2.8);

    //master timeline, ktore kontruluje scroll'a
    const main = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-info",
          start: "top 0%",
          end: "+=900",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1
        }
      })
      .to(".info_path-circle", { autoAlpha: 1, duration: 0.05 })
      .to(
        ".info_green-line",
        {
          width: "100%",
          duration: 3
        },
        0
      )
      .to(
        ".info_path-circle",
        {
          motionPath: {
            path: "#path-2",
            align: "#path-2",
            alignOrigin: [0.5, 0.5]
          },
          duration: 3
        },
        0
      )
      .add(pulses, 0)
      .to(
        ".info_path-circle",
        { visibility: "hidden", duration: 0.01 },
        "-=0.45"
      );

    //animacja contentu:
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-info",
        start: "top 0%",
        end: "+=900",
        scrub: true
      }
    });
    contentTl
      .from(".info_card", {
        opacity: 0,
        y: 80,
        stagger: 0.3
      })
      .to(
        ".info_number",
        {
          color: "#00E783",
          duration: 0.1,
          stagger: 0.3
        },
        "<"
      );
  },
  // skrypt dla mobile
  "(max-width: 991px)": function () {
    //animacja contentu:
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-info",
        start: "top 70%"
      }
    });
    contentTl
      .from("[data-bio-heading]", {
        opacity: 0,
        x: -80,
        duration: 0.6,
        ease: "power2.out"
      })
      .from(".info_card", {
        opacity: 0,
        y: 80,
        stagger: 0.3
      })
      .to(
        ".info_number",
        {
          color: "#00E783",
          duration: 0.5,
          stagger: 0.3
        },
        "<0.2"
      );
  }
});


//-------------------------
// //animacja sekcji z map
//-------------------------

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-map",
      start: "top 70%"
    }
  })
  .from("[data-lpg-heading]", {
    opacity: 0,
    x: -120,
    duration: 1,
    ease: "power2.out"
  })
  .from(
    ".map_content-card, .map_separator",
    {
      opacity: 0,
      y: 70,
      ease: "power1.out",
      stagger: 0.15
    },
    "<0.3"
  )
  .from(
    ".map_wrapper",
    {
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: "circle.out"
    },
    0
  );

//-----------------------------------------
//animacja sekcji dokumenty firmowe Solumus - kopia z about
//-----------------------------------------

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-docs",
      start: "top 50%"
    }
  })
  .from("[data-docs-heading]", {
    opacity: 0,
    x: -120,
    duration: 1.2,
    ease: "power2.out"
  })
  .from(
    ".docs_card",
    {
      y: 60,
      opacity: 0,
      ease: "power1.out",
      stagger: 0.1
    },
    "<0.4"
  );

//-----------------
//sekcja formularza
//-----------------
const form = document.querySelector(".section-form");
if (form) {
  const formTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-form",
      start: "top 70%"
    }
  });
  formTl
    .from(".form_component", { opacity: 0, y: 90, duration: 0.8 })
    .from(
      "[data-form-heading]",
      {
        opacity: 0,
        x: -120,
        duration: 1.2,
        ease: "power2.out"
      },
      "0.2"
    )
    .from(
      ".form_content-card",
      {
        opacity: 0,
        y: -50,
        ease: "power2.out",
        stagger: 0.2
      },
      "0.4"
    );
}

//------------------------
//sekcja dla obcokrajowcÄĹw
//------------------------
const foreign = document.querySelector(".foreign_component");
if (foreign) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".foreign_component",
        start: "top 60%"
      }
    })
    .from("[data-foreign-heading]", {
      opacity: 0,
      x: -120,
      duration: 1.2,
      ease: "power2.out"
    })
    .from(
      "[data-foreign-paragraph]",
      {
        opacity: 0,
        x: 90,
        duration: 0.7,
        ease: "power2.out"
      },
      "<"
    )
    .from(
      "[data-button-foreign]",
      {
        opacity: 0,
        y: 100,
        duration: 0.7,
        ease: "power3.out"
      },
      "<0.2"
    );
}

//-----------------------------
//animacja footer'a
//-----------------------------

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 70%"
    }
  })
  .from(".footer_top", { opacity: 0, y: 60 })
  .from(".footer_bottom", { opacity: 0, y: 60 });

ScrollTrigger.refresh();

//-----------------------------
//map
//-----------------------------

// const mapElements = document.querySelectorAll('[data-map]');
// const mapPoints = document.querySelectorAll('.map_point');

// mapElements.forEach(element => {
//   element.addEventListener('click', () => {
//     const mapName = element.getAttribute('data-map');
//     const mapPoint = document.querySelector(`.map_point[data-map-name="${mapName}"]`);

//     // PrzeĹÄcz klasÄ .active na elemencie z dopasowanÄ nazwÄ mapy
//     mapPoint.classList.toggle('active');
//   });
// });

const mapElements = document.querySelectorAll('[data-map]');
const mapPoints = document.querySelectorAll('.map_point');

mapElements.forEach(element => {
  element.addEventListener('click', () => {
    const mapName = element.getAttribute('data-map');
    const mapPoint = document.querySelector(`.map_point[data-map-name="${mapName}"]`);
    mapPoint.classList.toggle('active');

    const mapWrapper = document.querySelector('.map_wrapper');
    console.log(mapWrapper)
    const hasActiveChild = mapWrapper.querySelector('.map_point.active');

    const mapLine = document.querySelector('.map_line');
    if (hasActiveChild) {
      mapLine.classList.add('active-line');
    } else {
      mapLine.classList.remove('active-line');
    }
  });
});

const mirrorClick = () => {
    const elements = document.querySelectorAll('[data-point]');
  
    elements.forEach(element => {
      const pointValue = element.getAttribute('data-point');
      const targetElement = document.querySelector(`[data-map="${pointValue}"]`);
  
      element.addEventListener('click', () => {
        if (targetElement) {
          targetElement.click();
        }
      });
    });
  };
  
  mirrorClick();



