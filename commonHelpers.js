import{S as d,i as c}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="43195893-e6aecd5c5261fd0c345764808";function m(s){const t=new URLSearchParams({key:f,image_type:"photo",orientation:"horizontal",safesearch:!0,q:s});return fetch(u+"?"+t).then(o=>{if(o.ok)return o.json();throw new Error(o.status)})}function p(s=[]){return s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:l})=>`<a href="${o}"><div class="card">
        <div class="card-wrapper-img">
          <img
            src="${t}"
            alt="${a}"
          />
        </div>
        <div class="card-info">
          <div class="card-info-colum">
            <p class="card-info-title">likes</p>
            <p class="card-info-value">${e}</p>
          </div>
          <div class="card-info-colum">
            <p class="card-info-title">views</p>
            <p class="card-info-value">${r}</p>
          </div>
          <div class="card-info-colum">
            <p class="card-info-title">comments</p>
            <p class="card-info-value">${i}</p>
          </div>
          <div class="card-info-colum">
            <p class="card-info-title">downloads</p>
            <p class="card-info-value">${l}</p>
          </div>
        </div>
      </div></a>`).join("")}const g=new d(".gallery a",{}),h=document.querySelector(".form"),v=document.querySelector(".gallery");let n=document.querySelector(".preloader");window.addEventListener("load",()=>{n.classList.add("hide"),setTimeout(()=>{n.remove()},600)});h.addEventListener("submit",s=>{s.preventDefault();const t=Object.fromEntries(new FormData(s.target));console.log(t),t.message!==""&&m(t.message).then(o=>{if(o.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=p(o.hits);console.log(a),y(a),g.refresh()}).catch(o=>{c.error({message:"Error!!!"})})});function y(s){v.innerHTML=s}
//# sourceMappingURL=commonHelpers.js.map
