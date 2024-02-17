// gsap.to("#box", {
//   duration: 5,
//     opacity: 0.5,
//     rotation: 360,
//     scaleX: 1.5,
//     scaleY: 1.5,
// })

// gsap.to("#box", { rotation: 360, duration: 2, ease: "bounce.out" });

gsap.registerPlugin(TextPlugin)

const textElement = document.getElementById("text");
gsap.to("#text", {
    text: "Lorem, ipsum dolor sit amet",
    duration: 5,
    ease: "power1.in",
})

gsap.to('.typewriter', {
    text : "Typewriter Effect with GSAP 3!",
    duration: 2, 
    //slow then speeds up easing
    ease :  'power1.in'
  })