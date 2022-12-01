let buyPage = document.createElement('div');
buyPage.style.width = "90vw";
buyPage.style.margin = "auto";
// buyPage.style.border = "2px solid red";
document.body.appendChild(buyPage)

let inputContainer = document.createElement('div');
inputContainer.style.width = "90vw";
inputContainer.style.margin = "auto";
// inputContainer.style.border = "2px solid yellow";
inputContainer.style.marginTop = "3vh";
inputContainer.style.marginBottom = "3vh";
inputContainer.style.display = "flex";
inputContainer.style.justifyContent = "space-between";
buyPage.appendChild(inputContainer);

let input = document.createElement('input');
input.id = "input";
input.style.width = "65vw";
input.style.height = "2.5vw";
input.style.borderRadius = "5px";
input.style.background = "rgb(217,217,217)";
input.placeholder = "Search for medicines and more...";
input.style.color = "black";
input.style.border ="none";
input.style.outline = "none";
input.style.fontSize ="medium";
input.style.fontWeight = "600";
inputContainer.appendChild(input);

let cartBtn = document.createElement('div');
cartBtn.style.width = "8vw";
cartBtn.style.height = "2.5vw";
cartBtn.style.borderRadius = "5px";
cartBtn.style.backgroundColor = "#AAD9D9";
cartBtn.innerHTML = "Cart";
cartBtn.style.display = "flex";
cartBtn.style.justifyContent = "center";
cartBtn.style.alignItems = "center";
cartBtn.style.fontWeight = "bold";
cartBtn.style.cursor = "pointer";
cartBtn.onclick = function(){
    window.location.href = "cart.html"
}
inputContainer.appendChild(cartBtn);

let productContainer = document.createElement('div');
productContainer.style.height = "35vw";
productContainer.style.width = "90vw";
// productContainer.style.border = "2px solid green";
productContainer.style.display = "flex";
productContainer.style.flexDirection = "row";
buyPage.appendChild(productContainer);



// MAIN PRODUCT PHOTO

let productMainImage = document.createElement('img');
productMainImage["src"] = "images/bottle-4.png"
productMainImage.style.height = "32vw";
productMainImage.style.width = "40vw";
// productMainImage.style.border = "2px solid pink";
productMainImage.style.margin = "auto 0vw auto 0";
productMainImage.style.borderRadius = "5px"
productContainer.appendChild(productMainImage);

// MORE PRODUCT PHOTOS SLIDE 

let productImageSlide = document.createElement('div');
productImageSlide.style.height = "21vw";
productImageSlide.style.width = "10vw";
// productImageSlide.style.border = "2px solid cyan";
productImageSlide.style.marginTop = "1.3vw";
productImageSlide.style.marginLeft = "0.8vw";
productContainer.appendChild(productImageSlide);


let productImageSlide1 = document.createElement('img');
productImageSlide1["src"] = "images/bottle-4.png"
productImageSlide1.style.height = "6vw";
productImageSlide1.style.width = "8vw";
productImageSlide1.style.marginLeft = "0.9vw";
productImageSlide1.style.marginBottom = "0.9vw";
productImageSlide.appendChild(productImageSlide1)


let productImageSlide2 = document.createElement('img');
productImageSlide2["src"] = "images/bottle-4.png"
productImageSlide2.style.height = "6vw";
productImageSlide2.style.width = "8vw";
productImageSlide2.style.marginLeft = "0.9vw";
productImageSlide2.style.marginBottom = "0.9vw";
productImageSlide.appendChild(productImageSlide2)


let productImageSlide3 = document.createElement('img');
productImageSlide3["src"] = "images/bottle-4.png"
productImageSlide3.style.height = "6vw";
productImageSlide3.style.width = "8vw";
productImageSlide3.style.marginLeft = "0.9vw";
productImageSlide3.style.marginBottom = "0.9vw";
productImageSlide.appendChild(productImageSlide3)

// PRODUCT DESCRIPTION

let productDesc = document.createElement('div');
productDesc.style.height = "22vw";
productDesc.style.width = "25vw";
// productDesc.style.border = "2px solid purple";
productDesc.style.margin = "3vw 0  0 5vw";
productContainer.appendChild(productDesc);

let productName = document.createElement('h2');
productName.innerHTML = "EYE HEALTH FORMULA";
productName.style.color = "white";
productDesc.appendChild(productName);

let productPrice = document.createElement('h2');
productPrice.innerHTML = "₹ 350";
productPrice.style.color = "white";
productPrice.style.fontFamily = "Roboto"
productDesc.appendChild(productPrice);

let productTax = document.createElement('p');
productTax.innerHTML = "Inclusive all taxes";
productTax.style.color = "white";
productTax.style.fontSize = "small";
productTax.style.fontFamily = "Roboto"
productDesc.appendChild(productTax);

let productDelivery = document.createElement('p');
productDelivery.innerHTML = "Delivery charge ₹40 will be applied";
productDelivery.style.color = "white";
productDelivery.style.fontSize = "small";
productDelivery.style.fontFamily = "Roboto"
productDesc.appendChild(productDelivery);

let addCartBtn = document.createElement('div');
addCartBtn.style.width = "8vw";
addCartBtn.style.height = "2.5vw";
addCartBtn.style.borderRadius = "5px";
addCartBtn.style.backgroundColor = "#AAD9D9";
addCartBtn.innerHTML = "Add to Cart";
addCartBtn.style.display = "flex";
addCartBtn.style.justifyContent = "center";
addCartBtn.style.alignItems = "center";
addCartBtn.style.fontWeight = "bold";
addCartBtn.style.cursor="pointer"
productDesc.appendChild(addCartBtn)

addCartBtn.onclick=function(){
    alert("Item added to cart")
}

