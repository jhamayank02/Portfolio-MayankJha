console.log("Hello World");

// Grabbing the Navigation icons and containers
let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')
let slide1 = document.getElementById('slide1')
let slide2 = document.getElementById('slide2')
let slide3 = document.getElementById('slide3')
let slide4 = document.getElementById('slide4')

// Initially setting the display property to none except slide1. As we have to show slide1 initially
slide1.style.display = 'block'
slide2.style.display = 'none'
slide3.style.display = 'none'
slide4.style.display = 'none'

// Set display of all slides to none except slide1
icon1.addEventListener('click', ()=>{
    slide1.style.display = 'block'
    slide2.style.display = 'none'
    slide3.style.display = 'none'
    slide4.style.display = 'none'
})

// Set display of all slides to none except slide2
icon2.addEventListener('click', ()=>{
    slide1.style.display = 'none'
    slide2.style.display = 'block'
    slide3.style.display = 'none'
    slide4.style.display = 'none'
})

// Set display of all slides to none except slide3
icon3.addEventListener('click', ()=>{
    slide1.style.display = 'none'
    slide2.style.display = 'none'
    slide3.style.display = 'block'
    slide4.style.display = 'none'
})

// Set display of all slides to none except slide4
icon4.addEventListener('click', ()=>{
    slide1.style.display = 'none'
    slide2.style.display = 'none'
    slide3.style.display = 'none'
    slide4.style.display = 'block'
})