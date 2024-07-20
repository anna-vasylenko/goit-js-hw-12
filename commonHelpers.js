import{A as E,i as f,S as w}from"./assets/vendor-b41355b7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function u(o){return o.map(e=>`
           <li class="gallery-item">
          <a href="${e.largeImageURL}">
          <div class="image-container">
            <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200"> </div>
            <ul class="photo-dsc">
               <li > 
                <p class="photo-dsc-title">Likes</p>
                <p class="photo-dsc-text">${e.likes}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Views</p>
                <p class="photo-dsc-text">${e.views}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Comments</p>
                <p class="photo-dsc-text">${e.comments}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Downloads</p>
                <p class="photo-dsc-text">${e.downloads}</p>
              </li>
            </ul>
          </a>
        </li>
      `).join("")}const M=E.create({baseURL:"https://pixabay.com/api/"});async function h(o,e,i){return(await M.get("",{params:{key:"44962724-2fcdbdaf7fb299db2b6841432",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:i}})).data}let a=1,d=15,l="",p=1;const s={formSearchEl:document.querySelector(".form-search"),galleryListEl:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loadMoreBtnEl:document.querySelector(".btn-load-more")};s.formSearchEl.addEventListener("submit",v);s.loadMoreBtnEl.addEventListener("click",S);async function v(o){if(o.preventDefault(),l=s.formSearchEl.elements.search.value.trim(),!!l){a=1,s.galleryListEl.innerHTML="",L();try{m();const e=await h(l,a,d);e.hits.length===0?B():(p=Math.ceil(e.totalHits/d),s.galleryListEl.innerHTML=u(e.hits),b.refresh(),x())}catch(e){g(e)}y(),s.formSearchEl.elements.search.value=""}}async function S(){a+=1;try{m(),a===p&&(C(),L());const o=await h(l,a,d),e=u(o.hits);s.galleryListEl.insertAdjacentHTML("beforeend",e),b.refresh(),I()}catch(o){g(o)}y()}function B(){return f.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"})}function g(o){return f.error({message:`Error: ${o.message}`,backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"})}function C(){return f.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#0099FF",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"})}function m(){s.loader.classList.remove("loader-hidden")}function y(){s.loader.classList.add("loader-hidden")}function x(){s.loadMoreBtnEl.classList.remove("hidden")}function L(){s.loadMoreBtnEl.classList.add("hidden")}function I(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const b=new w(".gallery-list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
