let main = document.createElement('div')
main.style.width = "90vw"
main.style.height = "85vh"
main.style.margin = "auto"
// main.style.border = "2px solid red"
document.body.appendChild(main)


let h1 = document.createElement('h1')
h1.innerHTML = "Publish Your Writing"
h1.style.color = "white"
main.appendChild(h1)

let div_container = document.createElement('div')
div_container.style.width = "70vw"
// div_container.style.border="2px solid green"
div_container.style.marginBottom = "30px"
div_container.style.margin = "auto"
div_container.style.display = "flex"
div_container.style.justifyContent = "space-between"
main.appendChild(div_container)


let div_1 = document.createElement('div')
let div_2 = document.createElement('div')
let div_3 = document.createElement('div')
let div_4 = document.createElement('div')
let div_5 = document.createElement('div')
let div_6 = document.createElement('div')
let div_7 = document.createElement('div')
let div_8 = document.createElement('div')
let div_9 = document.createElement('div')

div_1.style.display = "flex"
div_2.style.display = "flex"
div_3.style.display = "flex"
div_4.style.display = "flex"
div_5.style.display = "flex"
div_6.style.display = "flex"
div_7.style.display = "flex"
div_8.style.display = "flex"
div_9.style.display = "flex"


div_1.style.justifyContent = "center"
div_1.style.alignItems = "center"
div_2.style.justifyContent = "center"
div_2.style.alignItems = "center"
div_3.style.justifyContent = "center"
div_3.style.alignItems = "center"
div_4.style.justifyContent = "center"
div_4.style.alignItems = "center"
div_5.style.justifyContent = "center"
div_5.style.alignItems = "center"
div_6.style.justifyContent = "center"
div_6.style.alignItems = "center"
div_7.style.justifyContent = "center"
div_7.style.alignItems = "center"
div_8.style.justifyContent = "center"
div_8.style.alignItems = "center"
div_9.style.justifyContent = "center"
div_9.style.alignItems = "center"

div_1.style.width = "7vw"
div_2.style.width = "7vw"
div_3.style.width = "7vw"
div_4.style.width = "7vw"
div_5.style.width = "7vw"
div_6.style.width = "7vw"
div_7.style.width = "7vw"
div_8.style.width = "7vw"
div_9.style.width = "7vw"

div_1.style.height = "7vh"
div_2.style.height = "7vh"
div_3.style.height = "7vh"
div_4.style.height = "7vh"
div_5.style.height = "7vh"
div_6.style.height = "7vh"
div_7.style.height = "7vh"
div_8.style.height = "7vh"
div_9.style.height = "7vh"

div_1.style.border = "1px solid #AAD9D9"
div_2.style.border = "1px solid #AAD9D9"
div_3.style.border = "1px solid #AAD9D9"
div_4.style.border = "1px solid #AAD9D9"
div_5.style.border = "1px solid #AAD9D9"
div_6.style.border = "1px solid #AAD9D9"
div_7.style.border = "1px solid #AAD9D9"
div_8.style.border = "1px solid #AAD9D9"
div_9.style.border = "1px solid #AAD9D9"

div_1.className = "btn"
div_2.className = "btn"
div_3.className = "btn"
div_4.className = "btn"
div_5.className = "btn"
div_6.className = "btn"
div_7.className = "btn"
div_8.className = "btn"
div_9.className = "btn "


div_1.innerHTML = "Bold"
div_2.innerHTML = "Italic"
div_6.innerHTML = "Upper Case"
div_7.innerHTML = "Lower Case"
div_8.innerHTML = "Capitalize"
div_9.innerHTML = "Clear Text"



let div_3_i = document.createElement('i')
div_3_i.className = "fas fa-align-left"

let div_4_i = document.createElement('i')
div_4_i.className = "fas fa-align-center"

let div_5_i = document.createElement('i')
div_5_i.className = "fas fa-align-right"


div_3.appendChild(div_3_i)
div_4.appendChild(div_4_i)
div_5.appendChild(div_5_i)


div_1.onclick = function () {
    f1()
}

div_2.onclick = function () {
    f2()
}

div_3.onclick = function () {
    f3()
}

div_4.onclick = function () {
    f4()
}

div_5.onclick = function () {
    f5()
}

div_6.onclick = function () {
    f6()
}

div_7.onclick = function () {
    f7()
}

div_8.onclick = function () {
    f8()
}

div_9.onclick = function () {
    f9()
}



div_container.appendChild(div_1)
div_container.appendChild(div_2)
div_container.appendChild(div_3)
div_container.appendChild(div_4)
div_container.appendChild(div_5)
div_container.appendChild(div_6)
div_container.appendChild(div_7)
div_container.appendChild(div_8)
div_container.appendChild(div_9)



function f1() {
    document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
    document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
    document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
    document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
    document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
    document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
    document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
    document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}

let content = document.createElement('textarea')
content.rows = "15"
content.cols = "100"
content.id = "textarea1"
content.placeholder = "Enter your text here"
main.appendChild(content)


let submit = document.createElement('div')
submit.style.height = "40px"
submit.style.width = "150px"
submit.style.backgroundColor = "#AAD9D9"
submit.style.borderRadius = "10px"
submit.innerHTML = "Save"
submit.style.margin = "auto"
submit.style.marginTop = "30px"
submit.style.display = "flex"
submit.style.justifyContent = "center"
submit.style.alignItems = "center"
main.appendChild(submit)

submit.onclick = function () {
    alert("Article saved")
}