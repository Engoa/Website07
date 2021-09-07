function animatePage(selector) {
  gsap
    .from(document.querySelectorAll(selector), {
      autoAlpha: 0,
      y: 100,
      ease: Power1.easeIn,
      stagger: 0.2,
      clearProps: 'all',
    })
    .totalDuration(0.8);
}
