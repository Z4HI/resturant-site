import './style.css'
const preloader = document.querySelector('.preloader')
const app = document.querySelector('.app')
const home = document.querySelector('.home')
const menu = document.querySelector('.menu')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const reviews = document.querySelector('.reviews')

window.onload = function(){
    preloader.classList.add('loaded')
    homePage()
}

home.addEventListener('click', ()=>{

homePage()

})

menu.addEventListener('click', ()=>{

app.innerHTML = ""

})




/* const homePage = ()=>{
const feature = document.createElement('div')
feature.classList.add('feature')
feature.innerHTML = 
        `<h3>"NY Times best Steak of 2024"</h3>`+
          `<button class="reserveBtn">Reservations</button>`

app.appendChild(feature)

}*/