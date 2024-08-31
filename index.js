document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("pre"),t=document.getElementById("toggleMode"),$=document.body,a=e=>{let t=[{type:"Composer Command",pattern:/composer/},{type:"Environment Variables",pattern:/^[A-Z_]+="[^"]*"$/gm},{type:"Artisan Command",pattern:/php artisan/},{type:"PHP Code",pattern:/<\?php/},{type:"HTML Code",pattern:/<!DOCTYPE html>/i},{type:"Blade Component",pattern:/<x-[\w-]+/}];for(let $ of t)if($.pattern.test(e))return $.type;return"Code Snippet"};e.forEach((e,t)=>{let $=document.createElement("div");$.className="cb-code-container";let l=document.createElement("div");l.className="cb-code-header";let n=document.createElement("div");n.className="cb-code-title";let o=a(e.textContent);n.textContent=o,"PHP Code"===o&&$.classList.add("cb-php-code");let d=document.createElement("button");d.className="cb-copy-btn",d.title="Copy to clipboard",d.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-clipboard" viewBox="0 0 16 16">
            <path
                d="M10 1.5v1H6v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zM4.5 3a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-7z" />
        </svg>
        Copy code
    `;let p=document.createElement("span");p.className="cb-copy-confirmation",p.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-clipboard-check" viewBox="0 0 16 16">
            <path
                d="M10 1.5v1H6v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zM4.5 3a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-7z" />
            <path
                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 10.293l2.646-2.647a.5.5 0 0 1 .708 0z" />
        </svg>
        Copied!
    `,p.style.display="none",d.addEventListener("click",()=>{navigator.clipboard.writeText(e.textContent).then(()=>{d.style.display="none",p.style.display="flex",setTimeout(()=>{p.style.display="none",d.style.display="flex"},2e3)})}),l.appendChild(n),l.appendChild(d),l.appendChild(p),$.appendChild(l),$.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild($,e)}),t.addEventListener("click",()=>{$.classList.toggle("cb-light-mode")})});