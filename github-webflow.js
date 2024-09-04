gsap.registerPlugin(ScrollTrigger);

const titles = gsap.utils.toArray(".skill_item");

titles.forEach((text, i) => {
  gsap.to(text, {
    scrollTrigger: {
      trigger: text,
      start: "top center",
      end: "center 40%",
      markers: true,
      toggleClass: "green",
      toggleActions: "restart none none none",
      scrub: true,
    },
  });
});
