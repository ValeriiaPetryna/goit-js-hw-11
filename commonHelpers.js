import{S as d,i as c}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="43195893-e6aecd5c5261fd0c345764808";function p(s){const o=new URLSearchParams({key:f,image_type:"photo",orientation:"horizontal",safesearch:!0,q:s});return fetch(u+"?"+o).then(t=>{if(t.ok)return t.json();throw new Error(t.status)})}function m(s=[]){return s.map(({webformatURL:o,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:l})=>`<a href="${t}"><div class="card">
        <div class="card-wrapper-img">
          <img
            src="${o}"
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
      </div></a>`).join("")}const h=new d(".gallery a",{}),g=document.querySelector(".form"),y=document.querySelector(".gallery");let n=document.querySelector(".preloader");g.addEventListener("submit",s=>{s.preventDefault();const o=Object.fromEntries(new FormData(s.target));o.message!==""&&(n.classList.add("show"),p(o.message).then(t=>{if(t.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=m(t.hits);console.log(a),v(a),h.refresh()}).catch(t=>{c.error({message:"Error!!!"})}).finally(()=>{n.classList.remove("show")}))});function v(s){y.innerHTML=s}
//# sourceMappingURL=commonHelpers.js.map
