import{i as n,S as m}from"./assets/vendor-7659544d.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(s){const a="3539379-d64fd5a5897018ff1512b690c",r="https://pixabay.com/api/",i=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",per_page:30,safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>t.json())}function g(s){const{largeImageURL:a,webformatURL:r,tags:i,likes:e,views:t,comments:l,downloads:u}=s;return`<li class="gallery-item">
	<a class="gallery-link" href="${a}">
		<img
            src="${r}"
            alt="${i}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${e}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${t}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${l}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Dowloads</span> ${u}</li>
     </ul>
	</a>
</li>`}function f(s){return s.map(g).join("")}const o=document.querySelector(".form"),c=document.querySelector(".gallery"),p=document.querySelector(".loader");o.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const a=s.target.elements.value.value;a.trim()?(p.classList.remove("is-hidden"),d(a).then(r=>{r.hits.length||n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const i=f(r.hits);c.insertAdjacentHTML("afterbegin",i),p.classList.add("is-hidden")}).then(()=>{new m(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(r=>alert("Error: "+r.message))):n.error({title:"Error",message:"The search field is empty. Please try again!"});try{if(!s.target.elements.value.value.trim())throw new Error("Field input cannot be empty.")}catch(r){alert("Error occurred: "+r.message)}o.reset()});window.addEventListener("offline",()=>{alert("Втрата з'єднання з Інтернетом.")});
//# sourceMappingURL=commonHelpers.js.map