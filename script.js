function homepageAnimation() {
  gsap.set(".slidesm", { scale: 4 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".videodiv",
    {
      "--circle": "0%",
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );
  tl.from(
    ".ctext",
    {
      y: -100,
      duration: 1,
      ease: Power4,
    },
    "a"
  );
  tl.to(
    ".lft",
    {
      xPercent: -15,
      //   stagger: 0.2,
      ease: Power2,
    },
    "b"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 15,
      //   stagger: 0.2,
      ease: Power2,
    },
    "b"
  );
}

function realpgAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".Real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -300,
    ease: Power4,
  });
}

function teampictureAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.7,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.7,
      });
    });
  });
}

function teampicturebg() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mouseenter", function (dets) {
      gsap.to(this.querySelector(".bluelayer"), {
        opacity: 1,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".bluelayer"), {
        opacity: 0,
      });
    });
  });
}

function paraAnimation() {
  var clutter = "";

  document
    .querySelector(".text .textpara")
    .textContent.split("")
    .forEach(function (dets) {
      if (dets === "") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${dets}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;
  gsap.set(".textpara span", { opacity: 0.1 });

  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 110%",
      scrub: 1,
      // markers: true
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });

  var clutter = "";

  document
    .querySelector(".rtext .rtextpara")
    .textContent.split("")
    .forEach(function (dets) {
      if (dets === "") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${dets}</span>`;
    });
  document.querySelector(".rtextpara").innerHTML = clutter;
  gsap.set(".rtextpara span", { opacity: 0.1 });

  gsap.to(".rtextpara span", {
    scrollTrigger: {
      trigger: ".rtext",
      start: "top 90%",
      end: "bottom 60%",
      scrub: 1,
      // markers: true,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

function navbarEffect() {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      gsap.to(navbar, {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(navbar, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    }
    lastScrollTop = scrollTop;
  });
}


function capsuleMovingY (){
  gsap.to(".right .capsule2", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 10,
    ease: Power4,
  });
}

function colorSetting() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      // markers: true,
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

gsap.from(".sec2", {
  y: 100,
  stagger: 1,
  opacity: 0,
  ease: Expo,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: ".footer",
    scrub: 1,
  },
});

function Locomotive() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

homepageAnimation();
realpgAnimation();
teampictureAnimation();
teampicturebg();
Locomotive();
paraAnimation();
navbarEffect();
colorSetting();
capsuleMovingY();