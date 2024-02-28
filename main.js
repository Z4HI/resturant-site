import './style.css'
const preloader = document.querySelector('.preloader')
const app = document.querySelector('.app')
const home = document.querySelector('.home')
const menu = document.querySelector('.menu1')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const reviews = document.querySelector('.reviews')

window.onload = function(){
    preloader.classList.add('loaded')
    homePage()
}

home.addEventListener('click', ()=>{
app.innerHTML = ""
homePage()

})

menu.addEventListener('click', ()=>{

app.innerHTML = ""
menuPage()
})



 const homePage = ()=>{
const feature = document.createElement('div')
feature.classList.add('feature')
feature.innerHTML = 
        `<h3>"NY Times best Steak of 2024"</h3>`+
          `<button class="reserveBtn">Reservations</button>`

app.appendChild(feature)

}

const menuPage = ()=>{

const menu = document.createElement('div')
menu.classList.add("menu1")
menu.innerHTML = 

`<div class="menu">
          <h4 id="menutitle"> MENU</h4>
          <div class="menuContainer">
            <h4>New York Strip<p>16 oz usda prime, richly flavored, slightly firmer</p></h4>
            <h4>Ribeye <p>16 oz usda prime, marbled for flavor & deliciously juicy</p></h4>
            <h4>Petite Filet <p>the same incredible cut as the classic, in an 8 oz filet</p></h4>
            <h4>Cowboy Ribeye <p>bone-in 22 oz usda prime cut</p></h4>
            <h4>Porterhouse <p>40 oz usda prime, richness of a strip, tenderness of a filet</p></h4>
            <h4>A5 Wagyu <p>Wagyu New York Strip is heavily marbleized, making it extremely juicy with a buttery texture and rich flavor in every bite </p></h4>
          </div>
        </div>`

    app.appendChild(menu)

}