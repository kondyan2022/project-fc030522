(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();new Swiper(".slider-container",{slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},pagination:{el:".swiper-pagination",type:"fraction",formatFractionCurrent:function(o){return"0"+o},formatFractionTotal:function(o){return"0"+o},renderFraction:function(o,n){return`<div class=${o}></div><div class=${n}></div>`}}});const s=document.querySelector(".catalog-btn"),d=document.querySelector(".modal-close-btn"),u=document.querySelector(".popup-is-hidden");function c(){document.body.classList.toggle("no-scroll"),u.classList.toggle("popup-is-hidden")}s.addEventListener("click",c);d.addEventListener("click",c);+(()=>{const o={openMobileBtn:document.querySelector("[data-mobile-open]"),closeMobileBtn:document.querySelector("[data-mobile-close]"),mobile:document.querySelector("[data-mobile]")};o.openMobileBtn.addEventListener("click",n),o.closeMobileBtn.addEventListener("click",n);function n(){o.mobile.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();