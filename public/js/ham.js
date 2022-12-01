document.body.style.margin = "0"
document.body.style.backgroundColor = "#AAD9D9"
document.body.style.fontFamily = "Raleway"

let main = document.createElement('div')
main.style.width = "100vw"
main.style.height = "100vh"
main.style.display = "flex"
document.body.appendChild(main)


let left = document.createElement('div')
left.style.width = "60vw"
left.style.height = "100vh"
left.style.backgroundColor = "rgb(1,9,34)"
main.appendChild(left)


let right = document.createElement('img')
right.src = "images/doc.jpg   "
right.style.width = "40vw"
right.style.height = "100vh"
right.style.backgroundColor = "rgb(1,9,34)"
main.appendChild(right)

let close_container = document.createElement('div')
close_container.style.width = "60vw"
close_container.style.height = "10vh"
left.appendChild(close_container)

let close_a = document.createElement('a')
close_a.style.textDecoration = "none"
close_a.style.color = "white"
close_a.href = "/"
let close_text = document.createElement('div')
close_text.innerHTML = "Close"
close_text.style.fontSize = "20px"
close_text.style.marginLeft = "30px"
close_text.style.paddingTop = "20px"
close_a.appendChild(close_text)
close_container.appendChild(close_a)

let left_1 = document.createElement('div')
left_1.style.width = "30vw"
left_1.style.height = "80vh"
// left_1.style.border="2px solid red"
left_1.style.margin = "auto"
left_1.style.display = "flex"
left_1.style.flexDirection = "column"
left_1.style.justifyContent = "space-around"
left_1.style.color = "white"
left.appendChild(left_1)

let left_1_h1_a = document.createElement('a')
let left_1_h1 = document.createElement('h1')
left_1_h1_a.href = "dash"
left_1_h1_a.style.textDecoration = "none"
left_1_h1_a.style.color = "white"
left_1_h1.innerHTML = "Dashboard"
left_1_h1.className = "heading"
left_1.appendChild(left_1_h1_a)
left_1_h1_a.appendChild(left_1_h1)


let left_1_h2_a = document.createElement('a')
let left_1_h2 = document.createElement('h1')
left_1_h2_a.href = "doc"
left_1_h2_a.style.textDecoration = "none"
left_1_h2_a.style.color = "white"
left_1_h2.innerHTML = "Connect to a Doctor"
left_1_h2.className = "heading"
left_1.appendChild(left_1_h2_a)
left_1_h2_a.appendChild(left_1_h2)

let left_1_h3_a = document.createElement('a')
let left_1_h3 = document.createElement('h1')
left_1_h3_a.href = "articleadd"
left_1_h3_a.style.textDecoration = "none"
left_1_h3_a.style.color = "white"
left_1_h3.innerHTML = "Write Article"
left_1_h3.className = "heading"
left_1.appendChild(left_1_h3_a)
left_1_h3_a.appendChild(left_1_h3)

let left_1_h4_a = document.createElement('a')
let left_1_h4 = document.createElement('h1')
left_1_h4_a.href = "articlelist"
left_1_h4_a.style.textDecoration = "none"
left_1_h4_a.style.color = "white"
left_1_h4.innerHTML = "Read Article"
left_1_h4.className = "heading"
left_1.appendChild(left_1_h4_a)
left_1_h4_a.appendChild(left_1_h4)

let left_1_h5_a = document.createElement('a')
let left_1_h5 = document.createElement('h1')
left_1_h5_a.href = "labtesttype"
left_1_h5_a.style.textDecoration = "none"
left_1_h5_a.style.color = "white"
left_1_h5.innerHTML = "Common lab test check"
left_1_h5.className = "heading"
left_1.appendChild(left_1_h5_a)
left_1_h5_a.appendChild(left_1_h5)

let left_1_h6_a = document.createElement('a')
let left_1_h6 = document.createElement('h1')
left_1_h6_a.href = "login"
left_1_h6_a.style.textDecoration = "none"
left_1_h6_a.style.color = "white"
left_1_h6.innerHTML = "Logout"
left_1_h6.className = "heading"
left_1.appendChild(left_1_h6_a)
left_1_h6_a.appendChild(left_1_h6)





