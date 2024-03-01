import './style.css'
import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
  apiKey: "AIzaSyAwT3GaZycHG03SLrbLQ0pbQyZTzB6EVI4",
  version: "weekly",
});

const preloader = document.querySelector('.preloader')
const app = document.querySelector('.app')
const home = document.querySelector('.home')
const menu = document.querySelector('.menu1')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact_us')
const reviews = document.querySelector('.reviews')


window.onload = function(){
    preloader.classList.add('loaded')
   setTimeout(function(){homePage()},3000)
    
}

home.addEventListener('click', ()=>{
  app.innerHTML = ""
  homePage()

})

menu.addEventListener('click', ()=>{

  app.innerHTML = ""
  menuPage()
})

about.addEventListener('click',()=>{
  app.innerHTML = ""
  aboutusPage()

})

reviews.addEventListener('click',()=>{

  app.innerHTML = ''
  reviewsPage()
})
contact.addEventListener('click',()=>{
  app.innerHTML = ''
  contactPage()

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

const aboutusPage = ()=>{
  const aboutus = document.createElement('div')
  aboutus.classList.add('aboutus')
  aboutus.innerHTML =
  `
  <h2 class="aboutusHeading">About Zesturant</h2>
  <div class="aboutusContent">
    Welcome to the HOME BX, where passion meets perfection in every sizzle and savory bite. We take pride in being more than just a steakhouse – we are an experience that transcends the ordinary and elevates your dining journey to new heights. <br><br>

    Our story begins with a commitment to excellence, a dedication to the art of grilling, and an unwavering passion for creating unforgettable moments around the table. At HOME BX, we believe in the power of a perfectly cooked steak to bring people together, sparking joy and creating memories that linger long after the last morsel is savored.
  </div>
  
  
  `
app.appendChild(aboutus)
}

const reviewsPage = ()=>{
  

  const reviews = document.createElement('div')
  reviews.classList.add('reviewpage')
  reviews.innerHTML = 
  `
  <h4>Write a Review</h4>
  <form action="">
    <label for="name">Name</label>
    <input id ="name" name="name" type="text" required>
    <label for="email">Email</label>
    <input id = "email" name="email" type="email">
    <p>Tell us about your visit</p>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button type="submit" class="submitBtn">Submit</button>
    
  </form>
  `
app.appendChild(reviews)
const submitBtn = document.querySelector('.submitBtn')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
submitBtn.addEventListener('click',()=>{

  event.preventDefault()

  if(nameInput.value === ''){
    nameInput.style.outline = 'solid 3px red'
  }
  else if(emailInput.value === ''){
    emailInput.style.outline = 'solid 3px red'
  }
else{
  emailInput.style.outline = 'solid 3px green'
app.innerHTML = ''
  const submitted = document.createElement('div')
  submitted.classList.add('submitted')
  submitted.innerHTML = `
          <div class="circle2"></div>
          <i class="fa-regular fa-circle-check"></i>
          <h5 class="reviewSent">Review sent</h5>
  
  `
  app.appendChild(submitted)
}

})

}

const contactPage = ()=>{

  const contactus = document.createElement('div')
  contactus.classList.add('contactus')
  contactus.innerHTML = 
  `
  <p> We're Located at 224 W 238th St, Bronx, NY 10463</p>
  <div id="map"></div>
  <p> 347 - 662 - ####</p>
  `
  app.appendChild(contactus)
  initMap()

}

let map;

function initMap(){
  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: 40.88486, lng: -73.89994 },
      zoom: 19,
    });
  });

}



