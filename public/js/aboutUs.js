document.body.style.margin = "0"
document.body.style.fontFamily="Raleway"

let aboutUs = document.createElement('div');
aboutUs.style.width = "90vw";
aboutUs.style.height = "100vh";
aboutUs.style.margin = "auto";
// aboutUs.style.border = "2px solid red";
document.body.appendChild(aboutUs);

let container = document.createElement('div');
container.style.width = "90vw";
container.style.height = "100vh";
// container.style.margin = "2.3vw auto";
// container.style.border = "1px solid white";
aboutUs.appendChild(container);

let innerContainer1 = document.createElement('div')
innerContainer1.style.width = "90vw";
innerContainer1.style.height = "25vh";
// innerContainer1.style.border = "2px solid yellow";
innerContainer1.style.display = "flex";
// innerContainer1.style.flexDirection = "row"
container.appendChild(innerContainer1);

let subContainer1 = document.createElement('div')
subContainer1.style.width = "70vw"
subContainer1.style.height = "25vh"
subContainer1.style.border = "1px solid white"
subContainer1.style.backgroundColor = "rgb(1, 9, 34)"
subContainer1.innerHTML = "Welcome to Medicare. A safe space and platform to help people to have great medical experiences."
subContainer1.style.display = "flex"
subContainer1.style.justifyContent = "center"
subContainer1.style.alignItems = "center"
subContainer1.style.padding = "0 10vw"
subContainer1.style.fontSize = "20px"
subContainer1.style.fontWeight = "600"
subContainer1.style.color = "white"
innerContainer1.appendChild(subContainer1)

let subContainer2 = document.createElement('img')
subContainer2["src"] = "images/doctor.jpg"
subContainer2.style.width = "30vw"
subContainer2.style.height = "20vw"
// subContainer2.style.border = "2px solid cyan"
innerContainer1.appendChild(subContainer2)

let innerContainer2 = document.createElement('div')
innerContainer2.style.width = "90vw";
innerContainer2.style.height = "50vh";
// innerContainer2.style.border = "2px solid red";
innerContainer2.style.display = "flex";
innerContainer2.style.flexDirection = "row"
container.appendChild(innerContainer2);

let subContainer3 = document.createElement('div')
subContainer3.style.width = "30vw"
subContainer3.style.height = "50vh"
// subContainer3.style.border = "2px solid pink"
subContainer3.style.backgroundColor = "#AAD9D9"
subContainer3.style.display = "flex"
subContainer3.style.justifyContent = "center"
innerContainer2.appendChild(subContainer3)

let textSubContainer3 = document.createElement('span')
textSubContainer3.id = "textSubContainer3"
textSubContainer3.innerHTML = "About Us"
textSubContainer3.style.fontSize = "40px"
textSubContainer3.style.fontWeight = "700"
textSubContainer3.style.paddingTop = "12vw"
subContainer3.appendChild(textSubContainer3)

let subContainer4 = document.createElement('div')
subContainer4.style.width = "40vw"
subContainer4.style.height = "50vh"
// subContainer4.style.border = "2px solid black"
subContainer4.style.backgroundColor = "white"
subContainer4.innerHTML = "Welcome to Medicare. A safe space and platform to help people to have great medical experiences.     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi unde animi, dolorum dicta nisi similique totam officiis rem iure corrupti non nulla doloremque, tempora delectus corporis iste cupiditate voluptas dignissimos? "
subContainer4.style.display = "flex"
subContainer4.style.textAlign="justify"
subContainer4.style.justifyContent = "center"
subContainer4.style.alignItems = "center"
subContainer4.style.padding = "0 10vw"
subContainer4.style.fontSize = "16px"
subContainer4.style.fontWeight = "500"
innerContainer2.appendChild(subContainer4)

let subContainer5 = document.createElement('div')
subContainer5.style.width = "30vw"
subContainer5.style.height = "50vh"
// subContainer5.style.border = "2px solid pink"
subContainer5.style.backgroundColor = "#AAD9D9"
innerContainer2.appendChild(subContainer5)



let innerContainer3 = document.createElement('div')
innerContainer3.style.width = "90vw";
innerContainer3.style.height = "25vh";
// innerContainer3.style.border = "2px solid yellow";
innerContainer3.style.display = "flex";
innerContainer3.style.flexDirection = "row"
container.appendChild(innerContainer3);


let subContainer6 = document.createElement('img')
subContainer6["src"] = "images/nutritionist.jpg"
subContainer6.style.width = "30vw"
subContainer6.style.height = "25vh"
// subContainer6.style.border = "2px solid lime"
innerContainer3.appendChild(subContainer6)

let subContainer7 = document.createElement('div')
subContainer7.style.width = "70vw"
subContainer7.style.height = "25vh"
subContainer7.style.border = "1px solid white"
subContainer7.style.backgroundColor = "rgb(1, 9, 34)"
subContainer7.innerHTML = "Welcome to Medicare. A safe space and platform to help people to have great medical experiences. Welcome to Medicare. A safe space and platform to help people to have great medical experiences.  "
subContainer7.style.display = "flex"
subContainer7.style.justifyContent = "center"
subContainer7.style.alignItems = "center"
subContainer7.style.padding = "0 10vw"
subContainer7.style.fontSize = "16px"
subContainer7.style.fontWeight = "500"
subContainer7.style.color = "white"
innerContainer3.appendChild(subContainer7)