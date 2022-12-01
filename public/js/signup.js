document.body.style.margin = "0"
document.body.style.fontFamily = "raleway"
let main = document.createElement('div')
main.style.display = "flex"
// main.style.border = "2px solid red"
document.body.appendChild(main)


let left = document.createElement('div')
left.style.width = "50vw"
left.style.height = "100vh"
// left.style.border = "2px solid red"
let right = document.createElement('div')
right.style.width = "50vw"
right.style.height = "100vh"
right.style.backgroundColor = "rgb(1, 9, 34)"

let image = document.createElement('img')
image.src = "images/loginSvg.svg"
image.style.height = "100vh"
image.style.width = "50vw"
right.appendChild(image)

let text_1 = document.createElement('h1')
text_1.innerHTML = "Sign Up"
text_1.style.textAlign = "center"
text_1.style.width = "26vw"
text_1.style.color = "white"
// text_1.style.border="2px solid red"
text_1.style.margin = "auto"
text_1.style.marginTop = "18vh"
left.appendChild(text_1)

let input = document.createElement('div')
input.style.width = "26vw"
input.style.margin = "auto"
input.style.marginTop = "10vh"
// input.style.border = "2px solid red"
input.style.display = "flex"
input.style.flexDirection = "column"
input.style.alignItems = "center"

let mail = document.createElement('div')
mail.innerHTML = "E-mail"
// mail.style.border = "2px solid blue"
mail.style.width = "26vw"
mail.style.color = "white"
mail.style.marginLeft = "10px"
input.appendChild(mail)



let input_1 = document.createElement('input')
input_1.placeholder = "abc@gmail.com"
input_1.style.color = "rgb(1, 9, 34)"
input_1.style.width = "400px"
input_1.id="mail"
input_1.style.paddingLeft = "20px"
input_1.style.borderRadius = "50px"
input_1.style.border = "2px solid rgb(1, 9, 34)"
input_1.style.height = "40px"
input_1.style.marginTop = "1vh"
input.appendChild(input_1)


let pass = document.createElement('div')
pass.innerHTML = "Password"
// pass.style.border = "2px solid blue"
pass.style.width = "26vw"
pass.style.color = "white"
pass.style.marginLeft = "10px"
pass.style.marginTop = "4vh"
input.appendChild(pass)

let input_2 = document.createElement('input')
input_2.placeholder = "Enter password"
input_2.style.width = "400px"
input_2.style.color = "rgb(1, 9, 34)"
input_2.id="password"
input_2.style.paddingLeft = "20px"
input_2.style.borderRadius = "50px"
input_2.style.border = "2px solid rgb(1, 9, 34)"
input_2.style.height = "40px"
input_2.style.marginTop = "1vh"
input.appendChild(input_2)

let pass1= document.createElement('div')
pass1.innerHTML = "Confirm Password"
// pass.style.border = "2px solid blue"
pass1.style.width = "26vw"
pass1.style.color = "white"
pass1.style.marginLeft = "10px"
pass1.style.marginTop = "4vh"
input.appendChild(pass1)

let input_3 = document.createElement('input')
input_3.placeholder = "Renter password"
input_3.style.width = "400px"
input_3.style.color = "rgb(1, 9, 34)"
input_3.id="password"
input_3.style.paddingLeft = "20px"
input_3.style.borderRadius = "50px"
input_3.style.border = "2px solid rgb(1, 9, 34)"
input_3.style.height = "40px"
input_3.style.marginTop = "1vh"
input.appendChild(input_3)

let check_div = document.createElement('div')
check_div.style.width = "26vw"
check_div.style.marginTop = "2vh"

let check = document.createElement('input')
check.type = "checkbox"
check.style.display = "inline"
check.style.marginLeft = "1vw"
check_div.appendChild(check)

let rem = document.createElement('span')
rem.innerHTML = "Remember Me"
rem.style.fontSize = "10px"
rem.style.color = "white"
check_div.appendChild(rem)


let forget = document.createElement('span')
forget.innerHTML = "Forget Password?"
forget.style.fontSize = "10px"
forget.style.marginLeft = "13vw"
forget.style.color = "white"
check_div.appendChild(forget)
input.appendChild(check_div)
left.style.backgroundColor = "rgb(1, 9, 34)"
left.appendChild(input)





let btn_1_a = document.createElement('a')
// btn_1_a.href = "dashboard.html"
btn_1_a.style.textDecoration = "none"
let btn_1 = document.createElement('div')
btn_1.innerHTML = "Sign Up"
btn_1.style.border = "2px solid white"
btn_1.style.height = "40px"
btn_1.id="btn_1"
btn_1.style.width = "26vw"
btn_1.style.display = "flex"
btn_1.style.justifyContent = "center"
btn_1.style.alignItems = "center"
btn_1.style.borderRadius = "30px"
btn_1.style.margin = "auto"
btn_1.style.marginTop = "3vh"
left.appendChild(btn_1_a)
btn_1_a.appendChild(btn_1)
main.appendChild(left)
main.appendChild(right)