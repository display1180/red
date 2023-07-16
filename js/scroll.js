const sec4 = document.querySelector('.sect4');
const baseline = -750;
const soundVision = document.querySelector('.sound');
console.log(sec4);
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({repeat: 2, repeatDelay: 1});

gsap.to('.sect_cover',{
    scrollTrigger:{
        trigger:'.imgs',
        toggleAttribute:'resume pause reset pause',
        markers:true,
        start:'top center',
    },
    x:0,
    y:1000,
    duration:4
})

gsap.from('.imgs',{
    scrollTrigger:{
        trigger:'.sect_cover',
        markers:true,
        start:'top center',
        scrub:true,
        pin:true
    },
    x:0,
    // y:-1000,
    duration:4
})


// tl.to('.sect_cover', {
//     position: 'fixed',
    
//     scrollTrigger: {
//         markers:true,
//         scrub: 1,
//         trigger: '.sect_cover',
//         start:'center',
//         end: 'center',
//         pin: 'true',
//     }
// })

window.addEventListener('scroll', sec4_custom_scroll);
function sec4_custom_scroll() {
    const scroll = window.scrollY;
    let scroll2 = (scroll - sec4.offsetTop - baseline) * 2.2;
    let scroll3 = scroll2 + 50
    if (scroll > sec4.offsetTop + baseline) {
        soundVision.style.transform = `translateY(-50%) translateX(${-scroll2}px)`;
    } else {
    }
}