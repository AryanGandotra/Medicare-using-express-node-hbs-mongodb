document.body.style.backgroundColor = "rgb(1, 9, 34)"
document.body.style.fontFamily = "Raleway"

let cartPage = document.createElement('div');
cartPage.style.width = "90vw";
cartPage.style.margin = "auto";
// cartPage.style.border = "2px solid red";
document.body.appendChild(cartPage);

let innerContainer = document.createElement('div')
innerContainer.style.width = "80vw"
innerContainer.style.height="80vh"
innerContainer.style.borderRadius="10px"
innerContainer.style.backgroundColor = "rgba(255 , 255 , 255 , 0.2)"
// innerContainer.style.opacity="0.8"
// innerContainer.style.border = "2px solid green";
innerContainer.style.margin = "auto";
// innerContainer.style.marginTop="2vh"
cartPage.appendChild(innerContainer)

let topbar = document.createElement('div')
topbar.style.width = "65vw";
// topbar.style.border = "2px solid yellow";
topbar.style.margin = "auto"
topbar.style.display = "flex"
topbar.style.flexDirection = "row"
innerContainer.appendChild(topbar)

let backButton_a = document.createElement('a')
backButton_a.href="https://www.google.com"
backButton_a.style.textDecoration="none"
topbar.appendChild(backButton_a)

let backButton = document.createElement('p')
backButton.innerHTML = "Back"
backButton.style.marginTop = "4vh"
// backButton.style.marginLeft = "3vw"
backButton.style.color = "grey"
backButton.style.marginLeft="-4.5vw"
backButton_a.appendChild(backButton)

// let heading = document.createElement('h1')
// heading.innerHTML = "Cart"
// heading.style.color = "white"
// heading.style.marginLeft = "29vw"
// topbar.appendChild(heading)


let mainContainer = document.createElement('div')
mainContainer.style.width = "65vw";
mainContainer.style.height = "65vh";
// mainContainer.style.border = "2px solid white";
mainContainer.style.margin = "auto"
// mainContainer.style.marginTop = "1vh"
mainContainer.style.display = "flex"
mainContainer.style.flexDirection = "column"
mainContainer.style.justifyContent = "space-between"
innerContainer.appendChild(mainContainer)

let item1 = document.createElement('div')
item1.style.width = "65vw";
item1.style.height = "30vh";
item1.style.display = "flex";
item1.style.background = "white"
item1.style.borderRadius = "5px"
// item1.style.border = "2px solid cyan"
mainContainer.appendChild(item1)

item1PhotoContainer = document.createElement('div')
item1PhotoContainer.style.width = "10vw"
item1PhotoContainer.style.height= "30vh"
// item1PhotoContainer.style.border = "2px solid green"
item1.appendChild(item1PhotoContainer)

item1Photo = document.createElement('img')
item1Photo.src = "images/bottle-4.png"
item1Photo.style.width = "8vw"
item1Photo.style.height = "15vh"
item1Photo.style.marginTop = "5vh"
item1Photo.style.marginLeft = "2vw"
item1PhotoContainer.appendChild(item1Photo)



item1Details = document.createElement('div')
item1Details.style.width = "55vw"
item1Details.style.height= "30vh"
// item1Details.style.border = "2px solid green"
item1Details.style.display = "flex"
item1.appendChild(item1Details)

item1SubDetails1 = document.createElement('div')
item1SubDetails1.style.width = "40vw"
item1SubDetails1.style.height = "30vh"
// item1SubDetails1.style.border = "2px solid yellow"
item1Details.appendChild(item1SubDetails1)

item1Name = document .createElement('h3')
item1Name.innerHTML = "Eye Health Formula"
item1Name.style.marginTop = "5vh"
item1Name.style.marginLeft = "3vw"
item1Name.style.color = "black"
item1Name.style.fontWeight = "800"
item1SubDetails1.appendChild(item1Name)

item1desc = document .createElement('p')
item1desc.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non eaque"
item1desc.style.marginTop = "3vh"
item1desc.style.marginLeft = "3vw"
item1desc.style.marginRight = "7vw"
item1desc.style.color = "black"
item1desc.style.opacity = "0.7"
item1SubDetails1.appendChild(item1desc)



item1SubDetails2 = document.createElement('div')
item1SubDetails2.style.width = "15vw"
item1SubDetails2.style.height = "30vh"
// item1SubDetails2.style.border = "2px solid yellow"
// item1SubDetails2.style.display = "flex";
// item1SubDetails2.style.flexDirection = "column"
item1Details.appendChild(item1SubDetails2)

let item1Price = document.createElement('h3');
item1Price.innerHTML = "₹ 350";
item1Price.style.color = "black";
item1Price.style.fontFamily = "Roboto"
item1Price.style.marginTop = "8vh"
item1Price.style.marginLeft = "5.8vw"
item1SubDetails2.appendChild(item1Price);

let item1Remove = document.createElement('div')
item1Remove.innerHTML = "Remove"
item1Remove.style.height = "40px"
item1Remove.style.width = "70px"
item1Remove.style.backgroundColor = "red"
item1Remove.style.color = "white"
item1Remove.style.borderRadius = "10px"
item1Remove.style.display = "flex"
item1Remove.style.justifyContent = "center"
item1Remove.style.alignItems = "center"
item1Remove.style.margin = "auto"
item1Remove.style.marginTop = "20px"
item1Remove.style.cursor="pointer"
item1SubDetails2.appendChild(item1Remove)












let item2 = document.createElement('div')
item2.style.width = "65vw";
item2.style.height = "30vh";
item2.style.display = "flex"
item2.style.background = "white"
item2.style.borderRadius = "5px"
// item2.style.border = "2px solid cyan"
mainContainer.appendChild(item2)

item2PhotoContainer = document.createElement('div')
item2PhotoContainer.style.width = "10vw"
item2PhotoContainer.style.height= "30vh"
// item2PhotoContainer.style.border = "2px solid green" 
item2.appendChild(item2PhotoContainer)

item2Photo = document.createElement('img')
item2Photo.src = "images/bottle-4.png"
item2Photo.style.width = "8vw"
item2Photo.style.height = "15vh"
item2Photo.style.marginTop = "5vh"
item2Photo.style.marginLeft = "2vw"
item2PhotoContainer.appendChild(item2Photo)

item2Details = document.createElement('div')
item2Details.style.width = "55vw"
item2Details.style.height= "30vh"
// item2Details.style.border = "2px solid green"
item2Details.style.display = "flex"
item2.appendChild(item2Details)



item2SubDetails1 = document.createElement('div')
item2SubDetails1.style.width = "40vw"
item2SubDetails1.style.height = "30vh"
// item2SubDetails1.style.border = "2px solid yellow"
item2Details.appendChild(item2SubDetails1)

item2Name = document .createElement('h3')
item2Name.innerHTML = "Eye Health Formula"
item2Name.style.marginTop = "5vh"
item2Name.style.marginLeft = "3vw"
item2Name.style.color = "black"
item2Name.style.fontWeight = "800"
item2SubDetails1.appendChild(item2Name)

item2desc = document .createElement('p')
item2desc.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non eaque"
item2desc.style.marginTop = "3vh"
item2desc.style.marginLeft = "3vw"
item2desc.style.marginRight = "7vw"
item2desc.style.color = "black"
item2desc.style.opacity = "0.7"
item2SubDetails1.appendChild(item2desc)



item2SubDetails2 = document.createElement('div')
item2SubDetails2.style.width = "15vw"
item2SubDetails2.style.height = "30vh"
// item2SubDetails2.style.border = "2px solid yellow"
// item2SubDetails2.style.display = "flex";
// item2SubDetails2.style.flexDirection = "column"
item2Details.appendChild(item2SubDetails2)

let item2Price = document.createElement('h3');
item2Price.innerHTML = "₹ 350";
item2Price.style.color = "black";
item2Price.style.fontFamily = "Roboto"
item2Price.style.marginTop = "8vh"
item2Price.style.marginLeft = "5.8vw"
item2SubDetails2.appendChild(item2Price);

let item2Remove = document.createElement('div')
item2Remove.innerHTML = "Remove"
item2Remove.style.height = "40px"
item2Remove.style.width = "70px"
item2Remove.style.backgroundColor = "red"
item2Remove.style.color = "white"
item2Remove.style.borderRadius = "10px"
item2Remove.style.display = "flex"
item2Remove.style.justifyContent = "center"
item2Remove.style.alignItems = "center"
item2Remove.style.margin = "auto"
item2Remove.style.marginTop = "20px"
item2Remove.style.cursor="pointer"
item2SubDetails2.appendChild(item2Remove)



