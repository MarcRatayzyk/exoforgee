const l1 = document.querySelector('.l1');
const btn = document.querySelectorAll('.btnnav');
const logo = document.querySelector('.logo');
const slog = document.querySelectorAll('.para1');
const log = document.querySelector('.imgnav');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(btn,1,{top:-100, opacity:0, ease:"power2.out"},0.4)
    .from(log, 1, {top:-100, opacity: 0, ease: "power2.out"})
    .from(logo,1,{top:-100,opacity:0,ease:"power2.out"},'-=1')
    .staggerFrom(slog,1,{top: 100, opacity: 0, ease: "power2.out"},0.4,'-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"});
    
    
    
    TL.play();
})
const menuHamburger = document.querySelector(".hamb")
const navLinks = document.querySelector(".menutoggle")
const quefai = document.querySelector(".btnnav")
const btn1 = document.querySelector("#btn2")
const btn2 = document.querySelector("#btn3")
    
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
quefai.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
btn1.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
btn2.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
const h3 = document.querySelector('.anim');
new Typewriter(h3,{
    loop :true,
    deleteSpeed : 30
  
})
.typeString('<span style="color:white;"> la simulation.</span>')
.pauseFor(300)
.deleteChars(11)
.typeString('<span style="color:white;">conception.</span>')
.pauseFor(300)
.deleteChars(13)
.typeString('<span style="color:white;">\'optimisation</span>')
.pauseFor(300)
.deleteChars(14)
.typeString('<span style="color:white;">\la réalisation.</span>')
.pauseFor(300)
.deleteChars(13)
.typeString('<span style="color:white;"> gestion de chantier.</span>')
.pauseFor(300)
.deleteChars(20)
.start()


