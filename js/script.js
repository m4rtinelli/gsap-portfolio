document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
  });
  gsap.registerPlugin(ScrollTrigger);
  Splitting();
  window.addEventListener("load", function () {
    luxy.init();
  });

  const gTl = gsap.timeline();

  gTl.from(".title .char", 1, {
    opacity: 0,
    yPercent: 130,
    stagger: 0.06,
    ease: "back.out",
  });
  gTl.to(
    ".header_img",
    2,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1,
      ease: "expo.out",
    },
    "-=1"
  );
  gTl.from(
    ".header_marq",
    2,
    { opacity: 0, yPercent: 100, ease: "expo.out" },
    "-=1.5"
  );

  const gsapSq = gsap.utils.toArray(".section-title_square");
  gsapSq.forEach((gSq, i) => {
    const rotat = gsap.from(gSq, 3, { rotation: 720 });
    ScrollTrigger.create({
      trigger: gSq,
      animation: rotat,
      start: "top bottom",
      scrub: 1.9,
    });
  });

  //header
  function header() {
    gsap.to(".title_parallax", {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        scrub: 1.9,
      },
      yPercent: -150,
    });
    gsap.to(".header .stroke", {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        scrub: 1.9,
      },
      xPercent: 50,
    });
    gsap.to(".header_img", {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        scrub: 1.9,
      },
      xPercent: -70,
    });
    gsap.to(".header_img img", {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        scrub: 1.9,
      },
      scale: 1.3,
    });
    gsap.to(".header_marq-wrap", {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        scrub: 1.9,
      },
      xPercent: -50,
    });
    gsap.to(".header_marq-star img", {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        scrub: 1.9,
      },
      rotate: -720,
    });
  }
  header();

  //about
  function about() {
    gsap.from(".about_img", {
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        scrub: 1.9,
      },
      yPercent: 80,
    });
    gsap.from(".about_img img", {
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        scrub: 1.9,
      },
      scale: 1.6,
    });
    gsap.to(".about_txt", {
      scrollTrigger: {
        trigger: ".about_wrap",
        start: "top bottom",
        scrub: 1.9,
      },
      yPercent: 20,
    });
  }
  about();

  //benefits
  function benefits() {
    gsap.from(".benefits_num", {
      x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: {
        trigger: ".benefits_list",
        start: "top bottom",
        scrub: 1.9,
      },
    });
  }
  benefits();

  //portfolio
  function portfolio() {
    gsap.from(".work_item, .work_item-num", {
      y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: {
        trigger: ".work",
        start: "top bottom",
        scrub: 1.9,
      },
    });
    gsap.from(".work_item-img img", {
      scale: 1.6,
      scrollTrigger: {
        trigger: ".work_wrap",
        start: "top bottom",
        scrub: 1.9,
      },
    });
  }
  portfolio();

  //serv
  function serv() {
    gsap.from(".serv_item-arrow", {
      x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: {
        trigger: ".serv_list",
        start: "top bottom",
        scrub: 1.9,
      },
    });
  }
  serv();

  //footer
  function footer() {
    gsap.from(".footer_div span", {
      y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      opacity: 0,
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1.9,
      },
    });
  }
  footer();
});
