document.body.style.margin = "0"
document.body.style.fontFamily = "raleway"
document.body.style.backgroundColor = "rgb(1, 9, 34)"

let nav = document.createElement('div')
nav.style.width = "90vw"
nav.style.height = "8vh"
nav.style.margin = "auto"
nav.style.marginTop = "20px"
nav.style.display = "flex"
document.body.appendChild(nav)


let nav_1 = document.createElement('div')
nav_1.style.width = "10vw"
nav_1.style.height = "8vh"
nav_1.innerHTML = ".MediCare."
nav_1.style.color = "white"
nav_1.style.fontSize = "24px"
nav_1.style.fontWeight = "bolder"
nav_1.style.cursor = "pointer"
nav_1.onclick = function () {
    window.location.href = "/"
}
nav.appendChild(nav_1)

let nav_2 = document.createElement('div')
nav_2.style.width = "25vw"
nav_2.style.height = "8vh"
nav_2.style.color = "white"
nav_2.style.display = "flex"
nav_2.style.flexDirection = "column"
nav_2.style.marginLeft = "10vw"
nav.appendChild(nav_2)

let nav_2_1 = document.createElement('div')
nav_2_1.style.width = "25vw"
nav_2_1.style.height = "8vh"
nav_2_1.style.fontWeight = "700"
nav_2_1.style.fontSize = "22px"
nav_2_1.innerHTML = "My Dashboard"
nav_2.appendChild(nav_2_1)

let nav_2_2 = document.createElement('div')
nav_2_2.style.width = "25vw"
nav_2_2.style.height = "8vh"
nav_2_2.innerHTML = "Welcome to the Medicare Dashboard"
nav_2.appendChild(nav_2_2)


let nav_3 = document.createElement('div')
nav_3.style.height = "8vh"
nav_3.style.color = "white"
nav_3.style.display = "flex"
nav_3.style.marginLeft = "36vw"

nav.appendChild(nav_3)

let nav_3_img = document.createElement('img')
nav_3_img.src = "images/user-icon.png"
nav_3_img.style.height = "40px"
nav_3_img.style.width = "40px"
nav_3_img.style.borderRadius = "50%"
nav_3.appendChild(nav_3_img)

let nav_3_text = document.createElement('div')
nav_3_text.innerHTML = "Hello User"
nav_3.style.cursor = "pointer"
nav_3_text.style.marginLeft = "20px"
nav_3_text.style.marginTop = "10px"
nav_3.appendChild(nav_3_text)


let main = document.createElement('div')
main.style.width = "90vw"
main.style.height = "80vh"
// main.style.border = "2px solid red"
main.style.display = "flex"
main.style.margin = "auto"
main.style.marginTop = "30px"
main.style.justifyContent = "space-between"
document.body.appendChild(main)


let main_1 = document.createElement('div')
main_1.style.width = "10vw"
main_1.style.height = "80vh"
// main_1.style.border = "2px solid yellow"
main_1.style.display = "flex"
main_1.style.flexDirection = "column"
main_1.style.fontSize = "20px"
main_1.style.color = "white"
// main_1.style.marginLeft="20px"
main.appendChild(main_1)

let main_1_1 = document.createElement('div')
main_1_1.innerHTML = "Home"
main_1_1.style.display = "flex"
main_1_1.style.marginTop = "5vh"
main_1_1.style.textAlign = "left"
main_1_1.style.cursor = "pointer"




let main_1_2 = document.createElement('div')
main_1_2.innerHTML = "Lab Tests"
main_1_2.style.display = "flex"
main_1_2.style.marginTop = "10vh"
main_1_2.style.textAlign = "left"
main_1_2.style.cursor = "pointer"

let main_1_3 = document.createElement('div')
main_1_3.innerHTML = "Medicines"
main_1_3.style.display = "flex"
main_1_3.style.marginTop = "10vh"
main_1_3.style.textAlign = "left"
main_1_3.style.cursor = "pointer"

let main_1_4 = document.createElement('div')
main_1_4.innerHTML = "Blogs"
main_1_4.style.display = "flex"
main_1_4.style.marginTop = "10vh"
main_1_4.style.textAlign = "left"
main_1_4.style.cursor = "pointer"

let main_1_5 = document.createElement('div')
main_1_5.innerHTML = "Doctors"
main_1_5.style.display = "flex"
main_1_5.style.marginTop = "10vh"
main_1_5.style.textAlign = "left"
main_1_5.style.cursor = "pointer"

let main_1_6 = document.createElement('div')
main_1_6.innerHTML = "About Us"
main_1_6.style.display = "flex"
main_1_6.style.marginTop = "10vh"
main_1_6.style.textAlign = "left"
main_1_6.style.cursor = "pointer"

let main_1_1_a = document.createElement('a')
main_1_1_a.href = "/"
main_1_1_a.appendChild(main_1_1)
main_1.appendChild(main_1_1_a)


let main_1_2_a = document.createElement('a')
main_1_2_a.href = "labtesttype"
main_1_2_a.appendChild(main_1_2)
main_1.appendChild(main_1_2_a)


let main_1_3_a = document.createElement('a')
main_1_3_a.href = "medicine"
main_1_3_a.appendChild(main_1_3)
main_1.appendChild(main_1_3_a)


let main_1_4_a = document.createElement('a')
main_1_4_a.href = "writearticle"
main_1_4_a.appendChild(main_1_4)
main_1.appendChild(main_1_4_a)


let main_1_5_a = document.createElement('a')
main_1_5_a.href = "doc"
main_1_5_a.appendChild(main_1_5)
main_1.appendChild(main_1_5_a)

let main_1_6_a = document.createElement('a')
main_1_6_a.href = "aboutUs"
main_1_6_a.appendChild(main_1_6)
main_1.appendChild(main_1_6_a)




let main_2 = document.createElement('div')
main_2.style.width = "70vw"
main_2.style.height = "80vh"
main_2.style.display = "flex"
main_2.style.justifyContent = "space-around"
main_2.style.alignItems = "center"
main_2.style.backgroundColor = "rgba(255, 255, 255, .2)"
main_2.style.borderRadius = "10px"
main.appendChild(main_2)


let main_2_1 = document.createElement('div')
main_2_1.style.width = "30vw"
main_2_1.style.height = "70vh"
main_2_1.style.backgroundColor = "white"
main_2_1.style.borderRadius = "10px"
main_2.appendChild(main_2_1)

let main_2_1_1 = document.createElement('img')
main_2_1_1.src = "images/user-img.jpg"
main_2_1_1.style.width = "30vw"
main_2_1_1.style.height = "35vh"
// main_2_1_1.style.backgroundColor = "red"
main_2_1_1.style.borderRadius = "10px 10px 0px 0px"
main_2_1.appendChild(main_2_1_1)


let main_2_1_2 = document.createElement('div')
main_2_1_2.style.width = "30vw"
main_2_1_2.style.height = "35vh"
// main_2_1_2.style.border = "2px solid red"
main_2_1.appendChild(main_2_1_2)

let main_2_1_2_1 = document.createElement('div')
main_2_1_2_1.style.width = "25vw"
main_2_1_2_1.style.fontSize = "20px"
main_2_1_2_1.style.display = "flex"
main_2_1_2_1.style.margin = "auto"
main_2_1_2_1.style.justifyContent = "left"
main_2_1_2_1.innerHTML = "Profile"
main_2_1_2_1.style.fontWeight = "500"
main_2_1_2_1.style.marginTop = "25px"
main_2_1_2_1.style.marginBottom = "10px"

let hr = document.createElement('hr')
hr.style.width = "25vw"
hr.style.margin = "auto"
main_2_1_2.appendChild(main_2_1_2_1)
main_2_1_2.appendChild(hr)


let main_2_1_2_2 = document.createElement('div')
main_2_1_2_2.style.width = "25vw"
main_2_1_2_2.style.margin = "auto"
main_2_1_2_2.style.marginTop = "5px"
main_2_1_2_2.style.display = "flex"
main_2_1_2_2.style.flexDirection = "column"
main_2_1_2.appendChild(main_2_1_2_2)

let text_1 = document.createElement('div')
text_1.innerHTML = "Username"
text_1.style.marginTop = "15px"
main_2_1_2_2.appendChild(text_1)
let text_2 = document.createElement('div')
text_2.innerHTML = "Mobile Number"
text_2.style.marginTop = "15px"
main_2_1_2_2.appendChild(text_2)
let text_3 = document.createElement('div')
text_3.innerHTML = "Email ID"
text_3.style.marginTop = "15px"
main_2_1_2_2.appendChild(text_3)

let btn = document.createElement('div')
btn.innerHTML = "Save"
btn.style.height = "40px"
btn.style.width = "100px"
btn.style.backgroundColor = "#AAD9D9"
btn.style.borderRadius = "10px"
btn.style.display = "flex"
btn.style.justifyContent = "center"
btn.style.alignItems = "center"
btn.style.margin = "auto"
btn.style.marginTop = "20px"
main_2_1_2.appendChild(btn)
btn.style.cursor = "pointer"
btn.onclick = function () {
    alert("Details Saved")
}


let main_2_2 = document.createElement('div')
main_2_2.style.width = "30vw"
main_2_2.style.height = "70vh"
main_2_2.style.borderRadius = "10px"
// main_2_2.style.border = "2px solid red"
main_2_2.style.display = "flex"
main_2_2.style.flexDirection = "column"
main_2.appendChild(main_2_2)

let main_2_2_1 = document.createElement('div')
main_2_2_1.style.width = "30vw"
main_2_2_1.style.height = "40vh"
main_2_2_1.style.borderRadius = "10px"
// main_2_2_1.style.display="flex"
// main_2_2_1.style.border = "2px solid blue"
main_2_2_1.style.backgroundColor = "white"
main_2_2.appendChild(main_2_2_1)


let main_2_2_1_1 = document.createElement('div')
main_2_2_1_1.style.width = "25vw"
main_2_2_1_1.style.fontSize = "20px"
main_2_2_1_1.style.display = "flex"
main_2_2_1_1.style.margin = "auto"
main_2_2_1_1.style.justifyContent = "left"
main_2_2_1_1.innerHTML = "MediCare+"
main_2_2_1_1.style.fontWeight = "500"
main_2_2_1_1.style.marginTop = "20px"
main_2_2_1_1.style.marginBottom = "10px"

let hr_3 = document.createElement('hr')
hr_3.style.width = "25vw"
hr_3.style.margin = "auto"
main_2_2_1.appendChild(main_2_2_1_1)
main_2_2_1.appendChild(hr_3)

let card_container = document.createElement('div')
card_container.style.width = "26vw"
card_container.style.margin = "auto"
card_container.style.display = "flex"
card_container.style.marginTop = "15px"
main_2_2_1.appendChild(card_container)

let card = document.createElement('img')
card.src = "images/card.webp"
card.style.height = "20vh"
card.id = "card"
card_container.appendChild(card)

let card_text = document.createElement('div')
card_text.innerHTML = "What is Medicare+  Lorem ipsum dolor sit amet consectetur adipisicing elit."
card_text.style.height = "25vh"
card_text.style.fontSize = "18px"
card_container.appendChild(card_text)

let main_2_2_2 = document.createElement('div')
main_2_2_2.style.width = "30vw"
main_2_2_2.style.height = "25vh"
main_2_2_2.style.borderRadius = "10px"
// main_2_2_2.style.border = "2px solid blue"
main_2_2_2.style.backgroundColor = "white"
main_2_2_2.style.marginTop = "auto"
main_2_2.appendChild(main_2_2_2)


let main_2_2_2_1 = document.createElement('div')
main_2_2_2_1.style.width = "25vw"
main_2_2_2_1.style.fontSize = "20px"
main_2_2_2_1.style.display = "flex"
main_2_2_2_1.style.margin = "auto"
main_2_2_2_1.style.justifyContent = "left"
main_2_2_2_1.innerHTML = "My tests"
main_2_2_2_1.style.fontWeight = "500"
main_2_2_2_1.style.marginTop = "20px"
main_2_2_2_1.style.marginBottom = "10px"

let hr_4 = document.createElement('hr')
hr_4.style.width = "25vw"
hr_4.style.margin = "auto"
main_2_2_2.appendChild(main_2_2_2_1)
main_2_2_2.appendChild(hr_4)


let div_1 = document.createElement('div')
div_1.style.width = "25vw"
div_1.style.margin = "auto"
div_1.style.marginTop = "20px"
div_1.style.display = "flex"
div_1.style.justifyContent = "space-between"
main_2_2_2.appendChild(div_1)

let div_1_1 = document.createElement('div')
div_1_1.style.width = "15vw"
div_1_1.style.height = "3vh"
div_1_1.innerHTML = "XXXXXXXXXXXX"
div_1.appendChild(div_1_1)

let div_1_2 = document.createElement('div')
div_1_2.style.width = "5vw"
div_1_2.innerHTML = "View"
div_1_2.style.cursor = "pointer"
div_1_2.style.display = "flex"
div_1_2.style.justifyContent = "center"
div_1_2.style.alignItems = "center"
div_1_2.style.backgroundColor = "#AAD9D9"
div_1_2.style.borderRadius = "5px"
div_1.appendChild(div_1_2)

let div_2 = document.createElement('div')
div_2.style.width = "25vw"
div_2.style.margin = "auto"
div_2.style.marginTop = "10px"
div_2.style.display = "flex"
div_2.style.justifyContent = "space-between"
main_2_2_2.appendChild(div_2)

let div_2_1 = document.createElement('div')
div_2_1.style.width = "15vw"
div_2_1.style.height = "3vh"
div_2_1.innerHTML = "XXXXXXXXXXXX"
div_2.appendChild(div_2_1)

let div_2_2 = document.createElement('div')
div_2_2.style.width = "5vw"
div_2_2.innerHTML = "View"
div_2_2.style.cursor = "pointer"
div_2_2.style.display = "flex"
div_2_2.style.justifyContent = "center"
div_2_2.style.alignItems = "center"
div_2_2.style.backgroundColor = "#AAD9D9"
div_2_2.style.borderRadius = "5px"
div_2.appendChild(div_2_2)

let div_3 = document.createElement('div')
div_3.style.width = "25vw"
div_3.style.margin = "auto"
div_3.style.marginTop = "10px"
div_3.style.display = "flex"
div_3.style.justifyContent = "space-between"
main_2_2_2.appendChild(div_3)

let div_3_1 = document.createElement('div')
div_3_1.style.width = "15vw"
div_3_1.style.height = "3vh"
div_3_1.innerHTML = "XXXXXXXXXXXX"
div_3.appendChild(div_3_1)

let div_3_2 = document.createElement('div')
div_3_2.style.width = "5vw"
div_3_2.innerHTML = "View"
div_3_2.style.cursor = "pointer"
div_3_2.style.display = "flex"
div_3_2.style.justifyContent = "center"
div_3_2.style.alignItems = "center"
div_3_2.style.backgroundColor = "#AAD9D9"
div_3_2.style.borderRadius = "5px"
div_3.appendChild(div_3_2)



div_1_2.onclick = function () {
    alert("Report-1 viewed")
}
div_2_2.onclick = function () {
    alert("Report-2 viewed")
}
div_3_2.onclick = function () {
    alert("Report-3 viewed")
}
