const e=document.querySelector(".main-navigation").querySelector("ul");e&&e.addEventListener("keydown",(t=>{const n=t.target.closest("li"),o=[...e.querySelectorAll("li")],r=o.findIndex((e=>e===n)),l=t.key;let i;"ArrowRight"===l&&(i=o.indexOf(n)===o.length-1?o[0]:o[r+1]),"ArrowLeft"===l&&(i=0===o.indexOf(n)?o[o.length-1]:o[r-1]),"Escape"===l&&(i=o[0]),i&&i.querySelector("a, button, input").focus()}));
