import"./styles-fac82e35.js";const m=[{shop:"McDonalds",id:"1",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Gamburger",image:"./img/products/gamburger.jpg"},{name:"Cheeseburger",image:"./img/products/cheeseburger.jpg"},{name:"PotatoFry",image:"./img/products/potato.jpg"},{name:"Nuggets",image:"./img/products/nuggets.jpg"},{name:"Big gamburger",image:"./img/products/gamburger.jpg"},{name:"Double gamburger",image:"./img/products/gamburger.jpg"},{name:"HappyMeal",image:"./img/products/happymeal.jpg"},{name:"Cherry Pie",image:"./img/products/pie.jpg"},{name:"Donut",image:"./img/products/donuts.jpg"}]},{shop:"KFS",id:"2",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Gamburger",image:"./img/products/gamburger.jpg"},{name:"Cheeseburger",image:"./img/products/cheeseburger.jpg"},{name:"PotatoFry",image:"./img/products/potato.jpg"},{name:"Big gamburger",image:"./img/products/gamburger.jpg"},{name:"Double gamburger",image:"./img/products/gamburger.jpg"}]},{shop:"FreshLine",id:"3",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Chicken sandwich",image:"./img/products/sendwich.jpg"},{name:"Sausage sandwich",image:"./img/products/sendwich2.jpeg"},{name:"Ham sandwich",image:"./img/products/sendw5.jpg"},{name:"Vegan sandwich",image:"./img/products/sendw4.jpg"},{name:"Sandwich with beef",image:"./img/products/sendw3.jpg"},{name:"Just a sandwich",image:"./img/products/sendw6.jpg"}]},{shop:"Salad",id:"4",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"Caesar",image:"./img/products/caesar.jpg"},{name:"Green",image:"./img/products/green.jpg"},{name:"Sea salad",image:"./img/products/sea.jpeg"}]},{shop:"Pizza",id:"5",location:"Ocho Rios, Jamaica",logo:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",products:[{name:"4 Cheese",image:"./img/products/cheese-pizza.jpg"},{name:"Chiken and pineapple",image:"./img/products/pineapple.jpeg"},{name:"Meat pizza",image:"./img/products/meat-pizza.jpg"},{name:"Pizza with seafood",image:"./img/products/sea-pizza.jpg"},{name:"With salami",image:"./img/products/salami.jpg"}]}],c=document.querySelector(".shops"),g=document.querySelector(".goods");m.forEach(function(o){const e=document.createElement("div");e.textContent=o.shop,e.classList.add("shop-item"),c.appendChild(e),e.addEventListener("click",function(){s(o.products),p(e)})});function s(o){g.innerHTML="",o.forEach(function(e){const a=document.createElement("div");a.classList.add("product");const i=document.createElement("img");i.src=e.image,a.appendChild(i);const n=document.createElement("div");n.textContent=e.name,a.appendChild(n);const t=document.createElement("button");t.textContent="Add to Cart",t.classList.add("add-to-cart"),a.appendChild(t),g.appendChild(a)})}function p(o){document.querySelectorAll(".shop-item").forEach(function(a){a.classList.remove("active")}),o.classList.add("active")}
