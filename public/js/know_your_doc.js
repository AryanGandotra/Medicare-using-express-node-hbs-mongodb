let main = document.createElement('div')
main.style.width = "90vw"
main.style.height = "80vh"
// main.style.border = "1px solid white"
main.style.margin = "auto"
main.style.display = "flex"
document.body.appendChild(main)


let main_1 = document.createElement('div')
// main_1.style.border = "2px solid blue"
main_1.style.width = "40vw"
main_1.style.marginLeft="5vw"
main.appendChild(main_1)

let main_1_1 = document.createElement('div')
main_1_1.innerHTML = "Know Your Doctor"
main_1_1.style.fontSize = "88px"
main_1_1.style.fontWeight = "700"
main_1_1.style.color = "#AAD9D9"
main_1_1.style.marginTop = "8vh"
main_1.appendChild(main_1_1)


let main_1_2 = document.createElement('div')
main_1_2.innerHTML = "Dr. Sharma has performed over 5000 sucessfull surgeries."
main_1_2.style.fontSize = "16px"
main_1_2.style.fontWeight = "300"
main_1_2.style.color = "white"
main_1_2.style.marginTop = "5vh"
main_1.appendChild(main_1_2)

let main_1_3 = document.createElement('div')
main_1_3.innerHTML = "He is also a fitness freak who loves dancing and painting."
main_1_3.style.fontSize = "16px"
main_1_3.style.fontWeight = "300"
main_1_3.style.color = "white"
main_1_3.style.marginTop = "2vh"
main_1.appendChild(main_1_3)

let main_1_4 = document.createElement('div')
main_1_4.innerHTML = "Experience : 21 years"
main_1_4.style.fontSize = "16px"
main_1_4.style.fontWeight = "300"
main_1_4.style.color = "white"
main_1_4.style.marginTop = "2vh"
main_1.appendChild(main_1_4)

let main_1_5 = document.createElement('div')
main_1_5.innerHTML = "MS, M.Ch-Urology, MBBS"
main_1_5.style.fontSize = "16px"
main_1_5.style.fontWeight = "300"
main_1_5.style.color = "white"
main_1_5.style.marginTop = "2vh"
main_1.appendChild(main_1_5)

let main_1_6_a = document.createElement('a')
main_1_6_a.href = "https://www.google.com/"
main_1_6_a.style.textDecoration = "none"
main_1.appendChild(main_1_6_a)
let main_1_6 = document.createElement('div')
main_1_6.innerHTML = "Contact"
main_1_6.style.width = "170px"
main_1_6.style.height = "40px"
main_1_6.style.backgroundColor = "AAD9D9"
main_1_6.style.color = "black"
main_1_6.style.borderRadius = "10px"
main_1_6.style.display = "flex"
main_1_6.style.justifyContent = "center"
main_1_6.style.alignItems = "center"
main_1_6.style.fontWeight = "500"
main_1_6.style.marginTop = "5vh"
main_1_6_a.appendChild(main_1_6)


let main_2 = document.createElement('div')
// main_2.style.border = "2px solid red"
let main_2_1 = document.createElement('img')
main_2_1.src = "images/image-removebg-preview.png"
main_2_1.style.height = "80vh"
main_2_1.style.width = "50vw"
main_2.appendChild(main_2_1)
main.appendChild(main_2)