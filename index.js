import{S as p,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="46313967-d4d30fae59777882921d7e8bb";function h(s){const n=`https://pixabay.com/api/?${new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9})}`;return fetch(n).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const g=new p(".gallery a"),l=document.querySelector(".gallery");function y(s){console.log(s),console.log(l);const o=s.map(({webformatURL:n,largeImageURL:r,tags:e,likes:t,views:a,comments:f,downloads:m})=>`
<li class="gallery-item">
                <a href="${r}" class="gallery-link">
                    <img src="${n}" alt="${e}" class="gallery-image" /></a>
                  <div class="info">
                    <p class="info-item"><span>Likes:</span> ${t}</p>
                    <p class="info-item"><span>Views:</span> ${a}</p>
                    <p class="info-item"><span>Comments:</span> ${f}</p>
                    <p class="info-item"><span>Downloads:</span> ${m}</p>
                </div>
            </li>`).join("");l.innerHTML=o,console.log(l.innerHTML),g.refresh()}const u=document.querySelector(".loader"),c=document.querySelector(".search-form"),L=document.querySelector(".gallery");function P(){u.style.display="flex"}function S(){u.style.display="none"}c.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.query.value;if(!o){i.error({title:"Error",message:"Please enter a search query!"});return}P(),L.innerHTML="",h(o).then(r=>{console.log(r),r.hits.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query."}):y(r.hits)}).catch(r=>{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{S(),n()});function n(){c.reset()}});
//# sourceMappingURL=index.js.map