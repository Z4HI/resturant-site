(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const d=document.querySelector(".preloader"),o=document.querySelector(".app"),a=document.querySelector(".home"),l=document.querySelector(".menu1");document.querySelector(".about");document.querySelector(".contact");document.querySelector(".reviews");window.onload=function(){d.classList.add("loaded"),c()};a.addEventListener("click",()=>{o.innerHTML="",c()});l.addEventListener("click",()=>{o.innerHTML="",m()});const c=()=>{const r=document.createElement("div");r.classList.add("feature"),r.innerHTML='<h3>"NY Times best Steak of 2024"</h3><button class="reserveBtn">Reservations</button>',o.appendChild(r)},m=()=>{const r=document.createElement("div");r.classList.add("menu1"),r.innerHTML=`<div class="menu">
          <h4 id="menutitle"> MENU</h4>
          <div class="menuContainer">
            <h4>New York Strip<p>16 oz usda prime, richly flavored, slightly firmer</p></h4>
            <h4>Ribeye <p>16 oz usda prime, marbled for flavor & deliciously juicy</p></h4>
            <h4>Petite Filet <p>the same incredible cut as the classic, in an 8 oz filet</p></h4>
            <h4>Cowboy Ribeye <p>bone-in 22 oz usda prime cut</p></h4>
            <h4>Porterhouse <p>40 oz usda prime, richness of a strip, tenderness of a filet</p></h4>
            <h4>A5 Wagyu <p>Wagyu New York Strip is heavily marbleized, making it extremely juicy with a buttery texture and rich flavor in every bite </p></h4>
          </div>
        </div>`,o.appendChild(r)};
