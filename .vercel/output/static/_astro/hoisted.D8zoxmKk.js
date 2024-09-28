import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./LanguageFlag.astro_astro_type_script_index_0_lang.BnP4WC8V.js";const l=document;l.addEventListener("DOMContentLoaded",function(){const e=l.getElementById("skills__avatar"),t=l.querySelector(".skills__popup"),n=l.querySelector(".btn__red "),o={root:null,rootMargin:"0px",threshold:.5},r=(i,c)=>{i.forEach(m=>{m.isIntersecting?(t.classList.add("active"),n.addEventListener("click",function(){t.classList.remove("active")})):t.classList.remove("active")})};new IntersectionObserver(r,o).observe(e)});const S=document.querySelector(".btn__red"),_=document.querySelector(".popup");S.addEventListener("click",()=>{_.close()});const w=document.getElementById("bg-icons"),L=20;for(let e=0;e<L;e++){const t=document.createElement("span");w.appendChild(t)}const q="&api_key=wmbjfv0ybbzjsaceaojxrbm9aaelzzq2bbe7mgws",$="http://localhost:4322",f=$;async function y(e="data"){const t=e!=="data"?e:"all";try{const n=await fetch(`${f}/api/${t}`);if(!n.ok)throw new Error(`Error fetching data: ${n.status}`);return(await n.json())[e]}catch(n){return console.error(`Failed to fetch ${e} from ${f}:`,n),null}}const{user:b}=await y(),P=document.getElementById("profile-picture");function v(e){P.src=e?b.profilePicture2:b.profilePicture}v(document.documentElement.classList.contains("dark"));window.addEventListener("themeChange",e=>{v(e.detail.isDark)});const{skills:g}=await y(),k=e=>e.map(t=>({sort:Math.random(),value:t})).sort((t,n)=>t.sort-n.sort).map(t=>t.value),j=document.querySelector(".image__button"),E=document.querySelector(".hero__skills"),I=k(g).slice(0,7);E.innerHTML=I.map((e,t)=>`
        <div class="icon__container skill-${t}" >
      <iconify-icon
        class="skills__icons "
        icon="${e.icon}"
      ></iconify-icon>
      </div>
    `).join("");j.addEventListener("click",()=>{const e=k(g).slice(0,7);E.innerHTML=e.map((t,n)=>`

        <div class="icon__container skill-${n}">
      <iconify-icon
        class="skills__icons "
        icon="${t.icon}"
      ></iconify-icon>
      </div>
    `).join("")});const C=document.querySelector(".image__button"),M=document.querySelectorAll(".hero__skills");let h=0;function T(){h++,h===9&&(document.documentElement.classList.add("customScheme"),document.documentElement.classList.remove("dark","dark-mode"),localStorage.setItem("theme","customScheme"),M.forEach(e=>{e.style.display="none"}))}C.addEventListener("click",T);const A=async e=>{const t=q,o=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${e}`)}&api_key=${t}`;try{const r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const s=await r.json();if(s.items&&s.items.length>0)return s.items;throw new Error("No videos found in the feed.")}catch(r){throw console.error("Error fetching videos:",r),r}},x=document.querySelector(".youtube__button"),D=document.querySelector(".modal__close__button"),B=document.querySelector(".youtubeThumbnail"),H=document.querySelector("iframe"),U="UC36_js-krsAHAEAWpEDhHtw",V=(e,t)=>{const n=e.getAttribute("vnum"),o=t[n],s=`https://youtube.com/embed/${o.link.split("v=")[1]}?controls=1&autoplay=1`;e.setAttribute("src",s),B.style.backgroundImage=o.thumbnail===""?"url('/img/portadaLIVE.png')":`url(${o.thumbnail})`,x.addEventListener("click",()=>{document.querySelector("dialog").showModal(),e.setAttribute("src",s)}),D.addEventListener("click",()=>{document.querySelector("dialog").close(),H.setAttribute("src","")})},O=async e=>{try{const t=await A(U);V(e,t)}catch(t){console.error("Error loading video:",t)}},p=document.getElementsByClassName("latestVideoEmbed");p.length>0&&O(p[0]);const u=document.querySelector(".toast-alerts");function a(e,t="info"){if(!u){console.error("Toast container not found.");return}let n;switch(t){case"success":n="success";break;case"error":n="error";break;case"warning":n="warning";break;default:n="info"}const o=document.createElement("div");o.classList.add("toast-message",n),o.innerHTML=e,u.appendChild(o),u.classList.add("show"),document.querySelectorAll(".toast-message"),setTimeout(()=>{o.remove()},5e3)}const d=document.querySelector(".loader");let z="el mensaje se envió correctamente 🚀",N="debes completar todos los campos 🙄";const R=()=>{document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("form");async function t(o){const r=new FormData(o);try{d.classList.add("success");const s=await fetch("/api/email-sender",{method:"POST",body:r});if(s.ok){const i=await s.json();document.querySelector("#nameError").textContent="",document.querySelector("#emailError").textContent="",document.querySelector("#subjectError").textContent="",document.querySelector("#messageError").textContent="",d.classList.remove("success"),o.reset(),a(z,"success")}else d.classList.remove("success"),a(N,"error")}catch(s){console.error("Error:",s)}}e.addEventListener("submit",o=>{o.preventDefault(),t(e)});function n(o){const r=e.querySelector(`#${o}`),s=r.value.trim(),i=document.getElementById(`${o}Error`);let c="";switch(o){case"name":s===""&&(c="Please enter your name.",a(c,"warning"));break;case"email":s===""?(c="Please enter your email.",a(c,"warning")):/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s)||(c="Please enter a valid email.",a(c,"warning"));break;case"subject":s===""&&(c="Please enter a subject.",a(c,"warning"));break;case"message":s===""&&(c="Please enter your message.",a(c,"warning"));break}i.textContent=c,r.classList.toggle("input-error",!!c)}["name","email","subject","message"].forEach(o=>{e.querySelector(`#${o}`).addEventListener("blur",()=>n(o))})})};R();const F=document.querySelector(".btn__red"),Y=document.querySelector(".popup");F.addEventListener("click",()=>{Y.close()});
