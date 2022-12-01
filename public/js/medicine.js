document.body.style.backgroundColor = "rgb(1, 9, 34)"
document.body.style.fontFamily = "Raleway"


var main = document.createElement('div');
main.style.width = "98vw"
main.style.margin = "auto"
main.style.marginBottom = "20px"
document.body.appendChild(main);


var main_top = document.createElement('div');
main_top.style.width = "90vw"
main_top.style.margin = "auto"
main_top.style.marginBottom = "20px"
main_top.style.display = "flex"
main_top.style.justifyContent = "space-between"
main.appendChild(main_top);



var input = document.createElement('input');
input.id = 'search'
input.placeholder = 'search for medicines or products'
input.style.paddingLeft = "20px"
input.style.borderRadius = "5px"
input.style.border = "2px solid white"
input.style.height = "30px"
input.style.width = "40vw"
main_top.appendChild(input);

var cart = document.createElement('div');
cart.id = 'cart'
cart.style.borderRadius = "5px"
cart.innerHTML = "Cart"
cart.style.backgroundColor = "#AAD9D9"
cart.style.height = "30px"
cart.style.width = "4vw"
cart.style.display = "inline-flex"
cart.style.justifyContent = "center"
cart.style.alignItems = "center"
cart.style.cursor = "pointer"
cart.onclick = function () {
    window.location.href = "cart"
}
main_top.appendChild(cart);



var slider = document.createElement('div');
slider.id = 'slider'
slider.style.borderRadius = "5px"
// slider.style.border = "2px solid pink"
slider.style.height = "50vh"
slider.style.width = "90vw"
slider.style.margin = "auto"
slider.style.marginTop = "60px"
main.appendChild(slider);

var img_div_1 = document.createElement('div');
var img_1 = document.createElement('img');
img_div_1.className = "imageSlides";
img_1["src"] = "images/img-1.jpg"
img_div_1.appendChild(img_1);
slider.appendChild(img_div_1);

var img_div_2 = document.createElement('div');
var img_2 = document.createElement('img');
img_div_2.className = "imageSlides";
img_2["src"] = "images/img-2.jpg"
img_div_2.appendChild(img_2);
slider.appendChild(img_div_2);

var img_div_3 = document.createElement('div');
var img_3 = document.createElement('img');
img_div_3.className = "imageSlides";
img_3["src"] = "images/img-3.jpg"
img_div_3.appendChild(img_3);
slider.appendChild(img_div_3);


let a_1 = document.createElement('a')
a_1.className = "slider-btn previous"
a_1.innerHTML = "❮"

let a_2 = document.createElement('a')
a_2.className = "slider-btn next"
a_2.innerHTML = "❯"

slider.appendChild(a_1);
slider.appendChild(a_2);


a_1.onclick = function () {
    setSlides(-1)
};

a_2.onclick = function () {
    setSlides(1)
};
var currentIndex = 1;
displaySlides(currentIndex);
function setSlides(num) {
    displaySlides(currentIndex += num);
}
function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}



let heading_1 = document.createElement('h1');
heading_1.innerHTML = "Browse Medicine and healthcare products"
heading_1.style.color = "white"
heading_1.style.marginLeft = "4vw"
main.appendChild(heading_1)



let sub_heading_1 = document.createElement('h3');
sub_heading_1.innerHTML = "Categories"
sub_heading_1.style.color = "white"
sub_heading_1.style.marginLeft = "4vw"
sub_heading_1.style.marginTop = "6vh"
main.appendChild(sub_heading_1)


let shop = document.createElement('div');
shop.style.width = "90vw"
shop.style.margin = "auto"
shop.style.display = "flex"
shop.style.justifyContent = "space-between"
shop.style.marginTop = "30px"
main.appendChild(shop)

let shop_1 = document.createElement('div');
shop_1.innerHTML = "Family care"
shop_1.style.color = "black"
shop_1.style.backgroundColor = "#AAD9D9"
shop_1.style.height = "60px"
shop_1.style.width = "200px"
shop_1.style.display = "flex"
shop_1.style.justifyContent = "center"
shop_1.style.alignItems = "center"
shop_1.style.borderRadius = "5px"
shop_1.style.fontSize = "18px"
shop_1.style.cursor = "pointer"
shop_1.onclick = function () {
    window.location.href = "buy"
}
shop.appendChild(shop_1)

let shop_2 = document.createElement('div');
shop_2.innerHTML = "Baby Care"
shop_2.style.color = "black"
shop_2.style.backgroundColor = "#AAD9D9"
shop_2.style.height = "60px"
shop_2.style.width = "200px"
shop_2.style.display = "flex"
shop_2.style.justifyContent = "center"
shop_2.style.alignItems = "center"
shop_2.style.borderRadius = "5px"
shop_2.style.fontSize = "18px"
shop_2.style.cursor = "pointer"
shop_2.onclick = function () {
    window.location.href = "buy"
}
shop.appendChild(shop_2)

let shop_3 = document.createElement('div');
shop_3.innerHTML = "Fitness"
shop_3.style.color = "black"
shop_3.style.backgroundColor = "#AAD9D9"
shop_3.style.height = "60px"
shop_3.style.width = "200px"
shop_3.style.display = "flex"
shop_3.style.justifyContent = "center"
shop_3.style.alignItems = "center"
shop_3.style.borderRadius = "5px"
shop_3.style.fontSize = "18px"
shop_3.style.cursor = "pointer"
shop_3.onclick = function () {
    window.location.href = "buy"
}
shop.appendChild(shop_3)

let shop_4 = document.createElement('div');
shop_4.innerHTML = "Skin Care"
shop_4.style.color = "black"
shop_4.style.backgroundColor = "#AAD9D9"
shop_4.style.height = "60px"
shop_4.style.width = "200px"
shop_4.style.display = "flex"
shop_4.style.justifyContent = "center"
shop_4.style.alignItems = "center"
shop_4.style.borderRadius = "5px"
shop_4.style.fontSize = "18px"
shop_4.style.cursor = "pointer"
shop_4.onclick = function () {
    window.location.href = "buy"
}
shop.appendChild(shop_4)

let sub_heading_2 = document.createElement('h3');
sub_heading_2.innerHTML = "Popular Products"
sub_heading_2.style.color = "white"
sub_heading_2.style.marginLeft = "4vw"
sub_heading_2.style.marginTop = "6vh"
main.appendChild(sub_heading_2)


let buy = document.createElement('div')
buy.style.width = "90vw"
buy.style.margin = "auto"
buy.style.display = "flex"
buy.style.justifyContent = "space-between"
buy.style.marginTop = "30px"
main.appendChild(buy)


let buy_1 = document.createElement('div');
let img_buy_1 = document.createElement('img')
img_buy_1['src'] = "images/img-1.jpg"
img_buy_1.style.height = "200px"
img_buy_1.style.width = "200px"
img_buy_1.style.borderRadius = "5px"
buy_1.style.height = "200px"
buy_1.style.width = "200px"
buy_1.style.cursor = "pointer"
buy_1.onclick = function () {
    window.location.href = "buy"
}
buy_1.appendChild(img_buy_1)
buy.appendChild(buy_1)



let buy_2 = document.createElement('div');
let img_buy_2 = document.createElement('img')
img_buy_2['src'] = "images/img-1.jpg"
img_buy_2.style.height = "200px"
img_buy_2.style.width = "200px"
buy_2.style.height = "200px"
buy_2.style.width = "200px"
img_buy_2.style.borderRadius = "5px"
buy_2.style.cursor = "pointer"
buy_2.onclick = function () {
    window.location.href = "buy"
}
buy_2.appendChild(img_buy_2)
buy.appendChild(buy_2)



let buy_3 = document.createElement('div');
let img_buy_3 = document.createElement('img')
img_buy_3['src'] = "images/img-1.jpg"
img_buy_3.style.height = "200px"
img_buy_3.style.width = "200px"
buy_3.style.height = "200px"
buy_3.style.width = "200px"
img_buy_3.style.borderRadius = "5px"
buy_3.style.cursor = "pointer"
buy_3.onclick = function () {
    window.location.href = "buy"
}
buy_3.appendChild(img_buy_3)
buy.appendChild(buy_3)



let buy_4 = document.createElement('div');
let img_buy_4 = document.createElement('img')
img_buy_4['src'] = "images/img-1.jpg"
img_buy_4.style.height = "200px"
img_buy_4.style.width = "200px"
buy_4.style.height = "200px"
buy_4.style.width = "200px"
img_buy_4.style.borderRadius = "5px"
buy_4.style.cursor = "pointer"
buy_4.onclick = function () {
    window.location.href = "buy"
}
buy_4.appendChild(img_buy_4)
buy.appendChild(buy_4)




let price = document.createElement('div')
price.style.width = "90vw"
price.style.margin = "auto"
price.style.marginTop = "20px"
price.style.display = "flex"
price.style.justifyContent = "space-between"
main.appendChild(price)


let price_1 = document.createElement('div')
price_1.innerHTML = "Medicine"
price_1.style.color = "white"
price_1.style.width = "200px"
price.appendChild(price_1)


let price_2 = document.createElement('div')
price_2.innerHTML = "Medicine"
price_2.style.color = "white"
price_2.style.width = "200px"
price.appendChild(price_2)


let price_3 = document.createElement('div')
price_3.innerHTML = "Medicine"
price_3.style.color = "white"
price_3.style.width = "200px"
price.appendChild(price_3)


let price_4 = document.createElement('div')
price_4.innerHTML = "Medicine"
price_4.style.color = "white"
price_4.style.width = "200px"
price.appendChild(price_4)


let cost = document.createElement('div')
cost.style.width = "90vw"
cost.style.margin = "auto"
// cost.style.marginTop = "20px"
cost.style.display = "flex"
cost.style.justifyContent = "space-between"
main.appendChild(cost)


let cost_1 = document.createElement('div')
cost_1.innerHTML = "$20"
cost_1.style.color = "white"
cost_1.style.width = "200px"
cost.appendChild(cost_1)


let cost_2 = document.createElement('div')
cost_2.innerHTML = "$20"
cost_2.style.color = "white"
cost_2.style.width = "200px"
cost.appendChild(cost_2)


let cost_3 = document.createElement('div')
cost_3.innerHTML = "$20"
cost_3.style.color = "white"
cost_3.style.width = "200px"
cost.appendChild(cost_3)


let cost_4 = document.createElement('div')
cost_4.innerHTML = "$20"
cost_4.style.color = "white"
cost_4.style.width = "200px"
cost.appendChild(cost_4)

let sub_heading_3 = document.createElement('h3');
sub_heading_3.innerHTML = "Why Buy Medicines From Us?"
sub_heading_3.style.color = "white"
sub_heading_3.style.marginLeft = "4vw"
sub_heading_3.style.marginTop = "6vh"
main.appendChild(sub_heading_3)


let feature = document.createElement('div')
feature.style.width = "90vw"
feature.style.margin = "auto"
feature.style.marginTop = "40px"
feature.style.display = "flex"
// feature.style.border = "2px solid green"
feature.style.justifyContent = "space-between"
main.appendChild(feature)


let feature_1 = document.createElement('div')
feature_1.innerHTML = "Free delivery"
feature_1.style.width = "200px"
feature_1.style.color = "black"
feature_1.style.backgroundColor = "#AAD9D9"
feature_1.style.height = "60px"
feature_1.style.borderRadius = "5px"
feature_1.style.display = "flex"
feature_1.style.justifyContent = "center"
feature_1.style.alignItems = "center"
feature.appendChild(feature_1)

let feature_2 = document.createElement('div')
feature_2.innerHTML = "24/7 Support"
feature_2.style.width = "200px"
feature_2.style.color = "black"
feature_2.style.backgroundColor = "#AAD9D9"
feature_2.style.height = "60px"
feature_2.style.borderRadius = "5px"
feature_2.style.display = "flex"
feature_2.style.justifyContent = "center"
feature_2.style.alignItems = "center"
feature.appendChild(feature_2)

let feature_3 = document.createElement('div')
feature_3.innerHTML = "Secure Payments"
feature_3.style.width = "200px"
feature_3.style.color = "black"
feature_3.style.backgroundColor = "#AAD9D9"
feature_3.style.height = "60px"
feature_3.style.borderRadius = "5px"
feature_3.style.display = "flex"
feature_3.style.justifyContent = "center"
feature_3.style.alignItems = "center"
feature.appendChild(feature_3)

let feature_4 = document.createElement('div')
feature_4.innerHTML = "Trusted Sellerss"
feature_4.style.width = "200px"
feature_4.style.color = "black"
feature_4.style.backgroundColor = "#AAD9D9"
feature_4.style.height = "60px"
feature_4.style.borderRadius = "5px"
feature_4.style.display = "flex"
feature_4.style.justifyContent = "center"
feature_4.style.alignItems = "center"
feature.appendChild(feature_4)



