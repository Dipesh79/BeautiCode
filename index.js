document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("pre"),t=document.getElementById("toggleMode"),a=document.body,$=e=>{let t=[{type:"Composer Command",pattern:/composer/},{type:"Environment Variables",pattern:/^[A-Z_]+="[^"]*"$/gm},{type:"Artisan Command",pattern:/php artisan/},{type:"PHP Code",pattern:/<\?php/},{type:"PHP Code",pattern:/\$\w+/},{type:"HTML Code",pattern:/<!DOCTYPE html>/i},{type:"Blade Component",pattern:/<x-[\w-]+/},{type:"HTML Code",pattern:/<[^>]+>/},{type:"Laravel Command",pattern:/laravel/}];for(let a of t)if(a.pattern.test(e))return a.type;return"Code Snippet"};e.forEach((e,t)=>{let a=document.createElement("div");a.className="cb-code-container";let l=document.createElement("div");l.className="cb-code-header";let n=document.createElement("div");n.className="cb-code-title";let p=$(e.textContent);n.textContent=p,"PHP Code"===p&&a.classList.add("cb-php-code");let o=document.createElement("button");o.className="cb-copy-btn",o.title="Copy to clipboard",o.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-clipboard" viewBox="0 0 16 16">
            <path
                d="M10 1.5v1H6v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zM4.5 3a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-7z" />
        </svg>
        Copy code
    `;let d=document.createElement("span");d.className="cb-copy-confirmation",d.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-clipboard-check" viewBox="0 0 16 16">
            <path
                d="M10 1.5v1H6v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zM4.5 3a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-7z" />
            <path
                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 10.293l2.646-2.647a.5.5 0 0 1 .708 0z" />
        </svg>
        Copied!
    `,d.style.display="none",o.addEventListener("click",()=>{navigator.clipboard.writeText(e.textContent).then(()=>{o.style.display="none",d.style.display="flex",setTimeout(()=>{d.style.display="none",o.style.display="flex"},2e3)})}),l.appendChild(n),l.appendChild(o),l.appendChild(d),a.appendChild(l),a.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(a,e)}),t.addEventListener("click",()=>{a.classList.toggle("cb-light-mode")})});