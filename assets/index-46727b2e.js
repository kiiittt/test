import"./styles-fac82e35.js";const u=[{shop:"McDonalds",id:"1",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Gamburger",image:"./img/products/gamburger.jpg",price:100},{name:"Cheeseburger",image:"./img/products/cheeseburger.jpg",price:100},{name:"PotatoFry",image:"./img/products/potato.jpg",price:100},{name:"Nuggets",image:"./img/products/nuggets.jpg",price:100},{name:"Big gamburger",image:"./img/products/gamburger.jpg",price:100},{name:"Double gamburger",image:"./img/products/gamburger.jpg",price:100},{name:"HappyMeal",image:"./img/products/happymeal.jpg",price:100},{name:"Cherry Pie",image:"./img/products/pie.jpg",price:100},{name:"Donut",image:"./img/products/donuts.jpg",price:100}]},{shop:"KFS",id:"2",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Gamburger",image:"./img/products/gamburger.jpg",price:100},{name:"Cheeseburger",image:"./img/products/cheeseburger.jpg",price:100},{name:"PotatoFry",image:"./img/products/potato.jpg",price:100},{name:"Big gamburger",image:"./img/products/gamburger.jpg",price:100},{name:"Double gamburger",image:"./img/products/gamburger.jpg",price:100}]},{shop:"FreshLine",id:"3",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Chicken sandwich",image:"./img/products/sendwich.jpg",price:100},{name:"Sausage sandwich",image:"./img/products/sendwich2.jpeg",price:100},{name:"Ham sandwich",image:"./img/products/sendw5.jpg",price:100},{name:"Vegan sandwich",image:"./img/products/sendw4.jpg",price:100},{name:"Sandwich with beef",image:"./img/products/sendw3.jpg",price:100},{name:"Just a sandwich",image:"./img/products/sendw6.jpg",price:100}]},{shop:"Salad",id:"4",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Caesar",image:"./img/products/caesar.jpg",price:100},{name:"Green",image:"./img/products/green.jpg",price:100},{name:"Sea salad",image:"./img/products/sea.jpeg",price:100}]},{shop:"Pizza",id:"5",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"4 Cheese",image:"./img/products/cheese-pizza.jpg",price:100},{name:"Chiken and pineapple",image:"./img/products/pineapple.jpeg",price:100},{name:"Meat pizza",image:"./img/products/meat-pizza.jpg",price:100},{name:"Pizza with seafood",image:"./img/products/sea-pizza.jpg",price:100},{name:"With salami",image:"./img/products/salami.jpg",price:100}]}],l=document.querySelector(".shops"),p=document.querySelector(".goods");u.forEach(function(t){const e=document.createElement("div");e.textContent=t.shop,e.classList.add("shop-item"),l.appendChild(e),e.addEventListener("click",function(){h(t.products),j(e)})});function h(t){p.innerHTML="",t.forEach(function(e){const c=document.createElement("div");c.classList.add("product");const a=document.createElement("img");a.src=e.image,c.appendChild(a);const o=document.createElement("div");o.textContent=e.name,c.appendChild(o);const r=document.createElement("span");r.textContent=e.price,c.appendChild(r);const i=document.createElement("button");i.textContent="Add to Cart",i.classList.add("add-to-cart"),c.appendChild(i),p.appendChild(c),i.addEventListener("click",function(){const s=n.name,g=n.image,d=n.price,n={name:s,image:g,price:d};m(n)})})}function j(t){document.querySelectorAll(".shop-item").forEach(function(c){c.classList.remove("active")}),t.classList.add("active")}const C=document.querySelectorAll(".add-to-cart");C.forEach(t=>{t.addEventListener("click",function(){const e=t.parentNode,c=e.querySelector("div").textContent,a=e.querySelector("img").src,o=e.querySelector(".product-price").textContent;m({name:c,image:a,price:o})})});function m(t){let e=JSON.parse(localStorage.getItem("cartItems"))||[];e.push(t),localStorage.setItem("cartItems",JSON.stringify(e))}