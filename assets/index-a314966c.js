import"./styles-fac82e35.js";fetch("./shop.json").then(n=>n.json()).then(n=>{const r=document.querySelector(".shops"),d=[];n.forEach(function(e){const t=document.createElement("div");t.textContent=e.shop,t.classList.add("shop-item"),r.appendChild(t),t.addEventListener("click",function(){h(e.products),p(t)}),d.push(t)});function h(e){const t=document.querySelector(".goods");t.innerHTML="",e.forEach(function(s){const o=document.createElement("div");o.classList.add("product");const a=document.createElement("img");a.src=s.image,o.appendChild(a);const i=document.createElement("div");i.textContent=s.name,o.appendChild(i);const c=document.createElement("button");c.textContent="Add to Cart",c.classList.add("add-to-cart"),o.appendChild(c),t.appendChild(o)})}function p(e){d.forEach(function(t){t.classList.remove("active")}),e.classList.add("active")}}).catch(n=>{console.error("Ошибка загрузки файла JSON:",n)});