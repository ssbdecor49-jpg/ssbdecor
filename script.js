/*=========================================
SSB DECOR LEVEL 3 PREMIUM WEBSITE
SCRIPT PART 1
=========================================*/

// ============================
// PRELOADER
// ============================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.display = "none";
    }

});

// ============================
// STICKY HEADER
// ============================

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ============================
// MOBILE MENU
// ============================

const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ============================
// FADE-UP ANIMATION
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".fade-up").forEach((el) => {

    observer.observe(el);

});/*=========================================
SCRIPT.JS PART 2
Counter + FAQ + Scroll Top + Active Menu
=========================================*/

// ============================
// COUNTER ANIMATION
// ============================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = parseInt(counter.innerText);

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            const newCount = count + increment;

            counter.setAttribute("data-count", newCount);

            counter.innerText = newCount + "+";

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// ============================
// FAQ ACCORDION
// ============================

document.querySelectorAll(".faq-item h3").forEach(item => {

    item.addEventListener("click", () => {

        const answer = item.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});

// Hide FAQ answers initially

document.querySelectorAll(".faq-item p").forEach(p => {

    p.style.display = "none";

});

// ============================
// SCROLL TO TOP BUTTON
// ============================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position:fixed;
bottom:20px;
left:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#d4af37;
color:#111;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ============================
// ACTIVE NAVIGATION
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ============================
// GALLERY FILTER (Basic)
// ============================

const filterButtons = document.querySelectorAll(".gallery-filter button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});

console.log("✅ SSB DECOR Level 3 Premium Website Loaded Successfully");const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

slides.forEach(slide=>slide.classList.remove("active"));

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slides[currentSlide].classList.add("active");

}

setInterval(showSlide,4000);/*==========================
LIGHTBOX
==========================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});/*==============================
COUNTER ANIMATION
==============================*/

const statNumbers = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = parseInt(counter.textContent);

            let current = 0;

            const timer = setInterval(()=>{

                current += Math.ceil(target/60);

                if(current >= target){

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current + "+";

            },25);

            counterObserver.unobserve(counter);

        }

    });

});

statNumbers.forEach(counter=>{

    counterObserver.observe(counter);

});/*==============================
HERO TYPING EFFECT
==============================*/

const title = document.querySelector(".hero h1");

if(title){

const text = title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

}/*=========================================
IMAGE HOVER ANIMATION
=========================================*/

document.querySelectorAll(".gallery-item").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});/*==============================
PAGE LOADED
==============================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition=".6s";