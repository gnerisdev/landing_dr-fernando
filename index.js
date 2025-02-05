// Slide
let slideIndex = 1
const slides = document.getElementsByClassName('slide')
const dots = document.getElementsByClassName('dot')

function showSlides(n) {
  if (n > slides.length) slideIndex = 1
  if (n < 1) slideIndex = slides.length

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }

  slides[slideIndex - 1].style.display = 'block'
}

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

setInterval(() => plusSlides(1), 5000)
showSlides(slideIndex)

// Animations
const element = document.querySelector('.framer-c6rbxn-container')
element.style.animation = 'rotateAnimation 9s linear infinite'
const style = document.createElement('style')
style.innerHTML = `
    @keyframes rotateAnimation {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `
document.head.appendChild(style)

// Animation section
let isScrolling = false

const animationElements = document.querySelectorAll(`
    .section-tecnica__title, 
    .section-tratamento__title,
    .section-tratamento__content__item,
    .section-beneficios__content__item,
    .section-hero__title,
    .section-hero__text,
    .section-hero__content .button,
    .section-tecnica__text,
    .section-tecnica .slider-container,
    .section-beneficios__title,
    .section-sobre__image,
    .section-sobre__intro
  `)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
}, { threshold: 0 })

animationElements.forEach((el) => observer.observe(el))

// Menu 
const hamburger = document.getElementById('hamburger-icon')
const menu = document.querySelector('.nav-mobi__items')

hamburger.addEventListener('click', function () {
  this.classList.toggle('active')
  menu.classList.toggle('active')
})
