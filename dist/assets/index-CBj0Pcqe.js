(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();var c;(function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"})(c||(c={}));const d=document.querySelector(".preloader"),n=document.querySelector(".app"),u=document.querySelector(".home"),m=document.querySelector(".menu1"),p=document.querySelector(".about"),h=document.querySelector(".contact_us"),f=document.querySelector(".reviews");window.onload=function(){d.classList.add("loaded"),setTimeout(function(){l()},3e3)};u.addEventListener("click",()=>{n.innerHTML="",l()});m.addEventListener("click",()=>{n.innerHTML="",v()});p.addEventListener("click",()=>{n.innerHTML="",y()});f.addEventListener("click",()=>{n.innerHTML="",b()});h.addEventListener("click",()=>{n.innerHTML="",g(),L()});const l=()=>{const e=document.createElement("div");e.classList.add("feature"),e.innerHTML='<h3>"NY Times best Steak of 2024"</h3><button class="reserveBtn">Reservations</button>',n.appendChild(e)},v=()=>{const e=document.createElement("div");e.classList.add("menu1"),e.innerHTML=`<div class="menu">
          <h4 id="menutitle"> MENU</h4>
          <div class="menuContainer">
            <h4>New York Strip<p>16 oz usda prime, richly flavored, slightly firmer</p></h4>
            <h4>Ribeye <p>16 oz usda prime, marbled for flavor & deliciously juicy</p></h4>
            <h4>Petite Filet <p>the same incredible cut as the classic, in an 8 oz filet</p></h4>
            <h4>Cowboy Ribeye <p>bone-in 22 oz usda prime cut</p></h4>
            <h4>Porterhouse <p>40 oz usda prime, richness of a strip, tenderness of a filet</p></h4>
            <h4>A5 Wagyu <p>Wagyu New York Strip is heavily marbleized, making it extremely juicy with a buttery texture and rich flavor in every bite </p></h4>
          </div>
        </div>`,n.appendChild(e)},y=()=>{const e=document.createElement("div");e.classList.add("aboutus"),e.innerHTML=`
  <h2 class="aboutusHeading">About Zesturant</h2>
  <div class="aboutusContent">
    Welcome to the HOME BX, where passion meets perfection in every sizzle and savory bite. We take pride in being more than just a steakhouse – we are an experience that transcends the ordinary and elevates your dining journey to new heights. <br><br>

    Our story begins with a commitment to excellence, a dedication to the art of grilling, and an unwavering passion for creating unforgettable moments around the table. At HOME BX, we believe in the power of a perfectly cooked steak to bring people together, sparking joy and creating memories that linger long after the last morsel is savored.
  </div>
  
  
  `,n.appendChild(e)},b=()=>{const e=document.createElement("div");e.classList.add("reviewpage"),e.innerHTML=`
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
  `,n.appendChild(e);const o=document.querySelector(".submitBtn"),s=document.querySelector("#name"),i=document.querySelector("#email");o.addEventListener("click",()=>{if(event.preventDefault(),s.value==="")s.style.outline="solid 3px red";else if(i.value==="")i.style.outline="solid 3px red";else{i.style.outline="solid 3px green",n.innerHTML="";const t=document.createElement("div");t.classList.add("submitted"),t.innerHTML=`
          <div class="circle2"></div>
          <i class="fa-regular fa-circle-check"></i>
          <h5 class="reviewSent">Review sent</h5>
  
  `,n.appendChild(t)}})},g=()=>{const e=document.createElement("div");e.classList.add("contactus"),e.innerHTML=`
  <p> We're Located at 224 W 238th St, Bronx, NY 10463</p>
  <div id="map"></div>
  `,n.appendChild(e)};async function L(){new google.maps.Map(document.getElementById("map"),{center:{lat:40.88486,lng:-73.89994},zoom:18})}
