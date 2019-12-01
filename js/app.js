function animationOnScroll () {
    let toRevealContent = document.querySelectorAll('.reveal');
    let revealLimit = 10;

    if (toRevealContent.length > 0) {

      toRevealContent.forEach((el) => {

        if (el.getBoundingClientRect().top < (window.innerHeight - revealLimit)) {
            TweenMax.to(el, 3, {
            opacity:1,
            ease: Expo.easeOut,
            y:0
          })
        }
      })
    }
  };
window.addEventListener('scroll', () => {
    animationOnScroll();
});
TweenMax.fromTo('.title--home', 3,
{
    opacity:0,
    y: 50
}
, {
    opacity:1,
    ease: Expo.easeOut,
    y:0
})

  