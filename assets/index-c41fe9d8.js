(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();new Swiper(".slider-container",{slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},pagination:{el:".swiper-pagination",type:"fraction",formatFractionCurrent:function(e){return"0"+e},formatFractionTotal:function(e){return"0"+e},renderFraction:function(e,t){return`<div class=${e}></div><div class=${t}></div>`}}});const s=document.querySelector(".catalog-btn"),u=document.querySelector(".modal-close-btn"),d=document.querySelector(".popup-is-hidden");function c(){document.body.classList.toggle("no-scroll"),d.classList.toggle("popup-is-hidden")}s.addEventListener("click",c);u.addEventListener("click",c);const m=document.querySelector(".catalog-list");m.addEventListener("click",e=>{if(!e.target.matches(".catalog-list-item-p"))return;const t=e.target.closest(".catalog-list-item"),n=document.querySelector(".card-buy-watch");n.querySelector("picture").textContent="",n.querySelector("picture").insertAdjacentHTML("afterbegin",a(t)),document.querySelector(".modal-watch-name").textContent=e.target.textContent.trim(),document.querySelector(".modal-watch-price").textContent=t.querySelector("span.catalog-list-item-span").textContent.trim(),c()});const p=document.querySelector(".sale-block-title");p.addEventListener("click",e=>{const t=document.querySelector(".card-buy-watch"),n=e.target.closest(".sale-list-item");t.querySelector("picture").textContent="",t.querySelector("picture").insertAdjacentHTML("afterbegin",a(n)),document.querySelector(".modal-watch-name").textContent=e.target.textContent.trim(),document.querySelector(".modal-watch-price").textContent="€700",document.querySelector(".modal-watch-price").insertAdjacentHTML("beforeend",'<span class="modal-watch-sale">€1000</span>'),c()});function a(e){var n;return(((n=e.querySelector("div>div>picture"))==null?void 0:n.innerHTML)??e.querySelector("div>picture").innerHTML).replace('class="catalog-list-item-picture"',"").replace('class="catalog-list-item-img"',"")}(()=>{const e={openMobileBtn:document.querySelector("[data-mobile-open]"),closeMobileBtn:document.querySelector("[data-mobile-close]"),mobile:document.querySelector("[data-mobile]"),links:document.querySelectorAll("a.burger-menu-navigation-link")};e.openMobileBtn.addEventListener("click",t),e.closeMobileBtn.addEventListener("click",t),e.links.forEach(n=>n.addEventListener("click",t));function t(){e.mobile.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
