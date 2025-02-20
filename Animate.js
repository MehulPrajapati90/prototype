// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation for .sec3 h1
gsap.to(".sec3 h1", {
  x: "-110%", // Use 'x' instead of 'transform' for better performance
  scrollTrigger: {
    trigger: ".sec3",
    scroller: "body",
    // markers: true, // Debugging markers
    start: "top 0%",
    end: "top -150%", // Fixed typo
    scrub: 3,
    pin: true,
  },
});

const tl = gsap.timeline();

tl.from(".content-logo h1", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 3,
})
tl.from(".menu-item", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.5
})



// sec2.
var path = "M 10 100 Q 100 100 990 100";
var final = "M 10 100 Q 100 100 990 100";
const str = document.querySelector(".string");
str.addEventListener("mousemove", function(e){
    path = `M 10 100 Q ${e.clientX-200} ${e.clientY-300} 990 100`;

    gsap.to("svg path",{
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out"
    })
})

str.addEventListener("mouseleave", (e)=>{
    // path = `M 10 100 Q ${e.clientX} ${e.clientY} 990 100`;

    gsap.to("svg path",{
        attr: {d: final},
        duration: 0.8,
        ease: "elastic.out(1, 0.2)"
    })
})