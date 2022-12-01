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
text_1.innerHTML = "Login"
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
input_2.style.paddingLeft = "20px"
input_2.style.borderRadius = "50px"
input_2.style.border = "2px solid rgb(1, 9, 34)"
input_2.style.height = "40px"
input_2.style.marginTop = "1vh"
input.appendChild(input_2)

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

let sub_a = document.createElement('a')
sub_a.href = "dashboard.html"
sub_a.style.textDecoration = "none"
sub_a.style.color = "white"
sub_a.style.marginTop = "3vh"
let submit = document.createElement('div')
submit.innerHTML = "Login"
submit.style.width = "26vw"
submit.id = "login_1"
submit.style.borderRadius = "30px"
submit.style.border = "2px solid white"
submit.style.height = "40px"
submit.style.display = "flex"
submit.style.justifyContent = "center"
submit.style.alignItems = "center"
input.appendChild(sub_a)
sub_a.appendChild(submit)


left.style.backgroundColor = "rgb(1, 9, 34)"
left.appendChild(input)





let btn_1_a = document.createElement('a')
btn_1_a.href = "sign"
btn_1_a.style.textDecoration = "none"
let btn_1 = document.createElement('div')
btn_1.innerHTML = "Sign Up"
btn_1.style.border = "2px solid white"
btn_1.style.height = "40px"
btn_1.id = "btn_1"
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