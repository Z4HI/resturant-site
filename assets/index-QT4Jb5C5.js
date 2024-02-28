(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const c=document.querySelector(".preloader"),n=document.querySelector(".app"),u=document.querySelector(".home"),d=document.querySelector(".menu1"),l=document.querySelector(".about");document.querySelector(".contact");document.querySelector(".reviews");window.onload=function(){c.classList.add("loaded")};u.addEventListener("click",()=>{n.innerHTML="",m()});d.addEventListener("click",()=>{n.innerHTML="",p()});l.addEventListener("click",()=>{n.innerHTML="",h()});const m=()=>{const t=document.createElement("div");t.classList.add("feature"),t.innerHTML='<h3>"NY Times best Steak of 2024"</h3><button class="reserveBtn">Reservations</button>',n.appendChild(t)},p=()=>{const t=document.createElement("div");t.classList.add("menu1"),t.innerHTML=`<div class="menu">
          <h4 id="menutitle"> MENU</h4>
          <div class="menuContainer">
            <h4>New York Strip<p>16 oz usda prime, richly flavored, slightly firmer</p></h4>
            <h4>Ribeye <p>16 oz usda prime, marbled for flavor & deliciously juicy</p></h4>
            <h4>Petite Filet <p>the same incredible cut as the classic, in an 8 oz filet</p></h4>
            <h4>Cowboy Ribeye <p>bone-in 22 oz usda prime cut</p></h4>
            <h4>Porterhouse <p>40 oz usda prime, richness of a strip, tenderness of a filet</p></h4>
            <h4>A5 Wagyu <p>Wagyu New York Strip is heavily marbleized, making it extremely juicy with a buttery texture and rich flavor in every bite </p></h4>
          </div>
        </div>`,n.appendChild(t)},h=()=>{const t=document.createElement("div");t.classList.add("aboutus"),t.innerHTML=`
  <h2 class="aboutusHeading">About Zesturant</h2>
  <div class="aboutusContent">
    Welcome to Zesturant, where passion meets perfection in every sizzle and savory bite. We take pride in being more than just a steakhouse – we are an experience that transcends the ordinary and elevates your dining journey to new heights. <br><br>

    Our story begins with a commitment to excellence, a dedication to the art of grilling, and an unwavering passion for creating unforgettable moments around the table. At Zesturant, we believe in the power of a perfectly cooked steak to bring people together, sparking joy and creating memories that linger long after the last morsel is savored.
  </div>
  
  
  `,n.appendChild(t)};
