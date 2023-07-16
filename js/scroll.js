const sec4 = document.querySelector('.sect4')
const baseline = -750
const soundVision = document.querySelector('.sound')
console.log(sec4)
gsap.registerPlugin(ScrollTrigger)
var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 })

gsap.to('.sect_cover', {
    scrollTrigger: {
        trigger: '.imgs',
        toggleAttribute: 'resume pause reset pause',
        // markers: true,
        start: 'top center',
    },
    // x: 0,
    // y: 1000,
    duration: 4,
})

let IMG_SECTIONS = gsap.utils.toArray('.imgs')
let IMG = gsap.utils.toArray('.imgs img')

gsap.from(IMG_SECTIONS, {
    scrollTrigger: {
        trigger: '.sect_cover',
        scrub: true,
        pin: true,
        onUpdate: (self) => {
            const { progress } = self

            // Select the container with the class 'imgs'
            const imgsContainer = document.querySelectorAll('.imgs');
            const textsContainer = document.querySelectorAll('.txt');

            // Select all the images inside the container
            const images = imgsContainer[0].querySelectorAll('img');
            const texts = textsContainer[0].querySelectorAll('li')

            if (progress < 0.15) {
                // console.log('첫번째 이미지 class 붙이기')
                images[0].classList.add('firstImgAnimation');
                texts.forEach((text)=> {
                    text.classList.remove('active');
                })
                texts[0].classList.add('active');
            } else if (progress < 0.3) {
                // console.log('두번째 이미지 class 붙이기')
                images[1].classList.add('secondImgAnimation')
                texts.forEach((text)=> {
                    text.classList.remove('active');
                })
                texts[1].classList.add('active');
            } else if (progress < 0.45) {
                // console.log('세번째 이미지 class 붙이기')
                images[2].classList.add('thridImgAnimation')
                texts.forEach((text)=> {
                    text.classList.remove('active');
                })
                texts[2].classList.add('active');
            } else if (progress< 0.9) {
                images[0].classList.add('imgAnimationComplete');
                images[1].classList.add('imgAnimationComplete');
                images[2].classList.add('imgAnimationComplete');
            }

            console.log('progress:', progress)
        },
    },
    // x: 0,
    // y:-1000,
    // duration: 4,
})

window.addEventListener('scroll', sec4_custom_scroll)
function sec4_custom_scroll() {
    const scroll = window.scrollY
    let scroll2 = (scroll - sec4.offsetTop - baseline) * 2.2
    let scroll3 = scroll2 + 50
    if (scroll > sec4.offsetTop + baseline) {
        soundVision.style.transform = `translateY(-50%) translateX(${-scroll2}px)`
    } else {
    }
}
