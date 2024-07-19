import{A as n,i as c,S as d}from"./assets/vendor-b41355b7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();function f(o){return o.map(e=>`
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
      `).join("")}const p=n.create({baseURL:"https://pixabay.com/api/"});async function u(o){return(await p.get("",{params:{key:"44962724-2fcdbdaf7fb299db2b6841432",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}const s={formSearchEl:document.querySelector(".form-search"),galleryListEl:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};s.formSearchEl.addEventListener("submit",h);async function h(o){o.preventDefault();let e=s.formSearchEl.elements.search.value.trim();if(e){s.galleryListEl.innerHTML="";try{s.loader.classList.remove("loader-hidden");const a=await u(e);a.hits.length===0&&m(),s.galleryListEl.innerHTML=f(a.hits),y.refresh()}catch(a){g(a)}s.loader.classList.add("loader-hidden"),s.formSearchEl.elements.search.value=""}}function m(){return c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"})}function g(o){return c.error({message:`Error: ${o.message}`,backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"})}const y=new d(".gallery-list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
