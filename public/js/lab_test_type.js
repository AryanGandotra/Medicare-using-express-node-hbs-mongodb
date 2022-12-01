let main_container = document.createElement('div')
main_container.style.width = "90vw"
// main_container.style.border = "1px solid red"
main_container.style.margin = "auto"
main_container.style.marginTop = "10vh"
main_container.style.display = "flex"
main_container.style.flexDirection = "column"
// main_container.style.justifyContent = "space-between"
document.body.appendChild(main_container)




let main = document.createElement('div')
main.style.width = "90vw"
// main.style.border = "1px solid white"
main.style.margin = "auto"
main.style.display = "flex"
main.style.justifyContent = "space-between"
main_container.appendChild(main)

let main_low = document.createElement('div')
main_low.style.width = "90vw"
// main_low.style.border = "1px solid red"
main_low.style.margin = "auto"
main_low.style.display = "flex"
main_low.style.justifyContent = "space-between"
main_low.style.marginTop = "10vh"
main_container.appendChild(main_low)


let main_1 = document.createElement('div')
main_1.style.width = "18vw"
main_1.style.height = "65vh"
main_1.style.backgroundColor = "white"
main_1.style.borderRadius = "15px"
main_1.className = "main_container"
main_1.style.cursor = "pointer"
main_1.onclick = function () {
    window.location.href = "testDetails"
}
main.appendChild(main_1)

let main_1_1 = document.createElement('div')
main_1_1.style.width = "18vw"
main_1_1.style.height = "30vh"
// main_1_1.style.border="1px solid red"
main_1_1.style.borderRadius = "10px"
main_1.appendChild(main_1_1)

let main_1_img = document.createElement('img')
main_1_img.src = "images/diabetes.webp"
main_1_img.style.width = "18vw"
main_1_img.style.height = "30vh"
// main_1_img.style.border="1px solid blue"
main_1_img.style.borderRadius = "10px"
main_1_1.appendChild(main_1_img)

let main_1_2 = document.createElement('div')
main_1_2.style.width = "18vw"
main_1_2.style.height = "35vh"
// main_1_2.style.border="1px solid red"
main_1_2.style.borderRadius = "10px"
main_1_2.style.display = "flex"
main_1_2.style.flexDirection = "column"
main_1_2.style.alignItems = "center"
main_1.appendChild(main_1_2)

let main_1_2_head = document.createElement('h2')
main_1_2_head.innerHTML = "Diabetes"
main_1_2.appendChild(main_1_2_head)

let main_1_2_text = document.createElement('p')
main_1_2_text.style.width = "16vw"
main_1_2_text.style.fontSize - "8px"
main_1_2_text.style.fontWeight = "300"
main_1_2_text.style.textAlign = "justify"
main_1_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_1_2.appendChild(main_1_2_text)



let main_2 = document.createElement('div')
main_2.style.width = "18vw"
main_2.style.height = "65vh"
main_2.style.backgroundColor = "white"
main_2.style.borderRadius = "15px"
main_2.style.cursor = "pointer"
main_2.onclick = function () {
    window.location.href = "testDetails"
}
main.appendChild(main_2)

let main_2_1 = document.createElement('div')
main_2_1.style.width = "18vw"
main_2_1.style.height = "30vh"
main_2_1.style.borderRadius = "10px"
main_2.className = "main_container"
main_2.appendChild(main_2_1)

let main_2_img = document.createElement('img')
main_2_img.src = "images/blood pressure.webp"
main_2_img.style.width = "18vw"
main_2_img.style.height = "30vh"
main_2_img.style.borderRadius = "10px"
main_2_1.appendChild(main_2_img)

let main_2_2 = document.createElement('div')
main_2_2.style.width = "18vw"
main_2_2.style.height = "35vh"
main_2_2.style.borderRadius = "10px"
main_2_2.style.display = "flex"
main_2_2.style.flexDirection = "column"
main_2_2.style.alignItems = "center"
main_2.appendChild(main_2_2)

let main_2_2_head = document.createElement('h2')
main_2_2_head.innerHTML = "Blood Pressure"
main_2_2.appendChild(main_2_2_head)

let main_2_2_text = document.createElement('p')
main_2_2_text.style.width = "16vw"
main_2_2_text.style.fontSize - "8px"
main_2_2_text.style.fontWeight = "300"
main_2_2_text.style.textAlign = "justify"
main_2_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_2_2.appendChild(main_2_2_text)



let main_3 = document.createElement('div')
main_3.style.width = "18vw"
main_3.style.height = "65vh"
main_3.style.backgroundColor = "white"
main_3.style.borderRadius = "15px"
main_3.style.cursor = "pointer"
main_3.onclick = function () {
    window.location.href = "testDetails"
}
main.appendChild(main_3)

let main_3_1 = document.createElement('div')
main_3_1.style.width = "18vw"
main_3_1.style.height = "30vh"
main_3_1.style.borderRadius = "10px"
main_3.className = "main_container"
main_3.appendChild(main_3_1)

let main_3_img = document.createElement('img')
main_3_img.src = "images/thyroid.png"
main_3_img.style.width = "18vw"
main_3_img.style.height = "30vh"
main_3_img.style.borderRadius = "10px"
main_3_1.appendChild(main_3_img)

let main_3_2 = document.createElement('div')
main_3_2.style.width = "18vw"
main_3_2.style.height = "35vh"
main_3_2.style.borderRadius = "10px"
main_3_2.style.display = "flex"
main_3_2.style.flexDirection = "column"
main_3_2.style.alignItems = "center"
main_3.appendChild(main_3_2)

let main_3_2_head = document.createElement('h2')
main_3_2_head.innerHTML = "Thyroid"
main_3_2.appendChild(main_3_2_head)

let main_3_2_text = document.createElement('p')
main_3_2_text.style.width = "16vw"
main_3_2_text.style.fontSize - "8px"
main_3_2_text.style.fontWeight = "300"
main_3_2_text.style.textAlign = "justify"
main_3_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_3_2.appendChild(main_3_2_text)



let main_4 = document.createElement('div')
main_4.style.width = "18vw"
main_4.style.height = "65vh"
main_4.style.backgroundColor = "white"
main_4.style.borderRadius = "15px"
main_4.style.cursor = "pointer"
main_4.onclick = function () {
    window.location.href = "testDetails"
}
main.appendChild(main_4)

let main_4_1 = document.createElement('div')
main_4_1.style.width = "18vw"
main_4_1.style.height = "30vh"
main_4_1.style.borderRadius = "10px"
main_4.className = "main_container"
main_4.appendChild(main_4_1)

let main_4_img = document.createElement('img')
main_4_img.src = "images/cbc.webp"
main_4_img.style.width = "18vw"
main_4_img.style.height = "30vh"
main_4_img.style.borderRadius = "10px"
main_4_1.appendChild(main_4_img)

let main_4_2 = document.createElement('div')
main_4_2.style.width = "18vw"
main_4_2.style.height = "35vh"
main_4_2.style.borderRadius = "10px"
main_4_2.style.display = "flex"
main_4_2.style.flexDirection = "column"
main_4_2.style.alignItems = "center"
main_4.appendChild(main_4_2)

let main_4_2_head = document.createElement('h2')
main_4_2_head.innerHTML = "Complete Blood Count"
main_4_2.appendChild(main_4_2_head)

let main_4_2_text = document.createElement('p')
main_4_2_text.style.width = "16vw"
main_4_2_text.style.fontSize - "8px"
main_4_2_text.style.fontWeight = "300"
main_4_2_text.style.textAlign = "justify"
main_4_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_4_2.appendChild(main_4_2_text)

let main_5 = document.createElement('div')
main_5.style.width = "18vw"
main_5.style.height = "65vh"
main_5.style.backgroundColor = "white"
main_5.style.borderRadius = "15px"
main_5.style.cursor = "pointer"
main_5.onclick = function () {
    window.location.href = "testDetails"
}
main_low.appendChild(main_5)

let main_5_1 = document.createElement('div')
main_5_1.style.width = "18vw"
main_5_1.style.height = "30vh"
main_5_1.style.borderRadius = "10px"
main_5.className = "main_container"
main_5.appendChild(main_5_1)

let main_5_img = document.createElement('img')
main_5_img.src = "images/Haemoglobin A1C.png"
main_5_img.style.width = "18vw"
main_5_img.style.height = "30vh"
main_5_img.style.borderRadius = "10px"
main_5_1.appendChild(main_5_img)

let main_5_2 = document.createElement('div')
main_5_2.style.width = "18vw"
main_5_2.style.height = "35vh"
main_5_2.style.borderRadius = "10px"
main_5_2.style.display = "flex"
main_5_2.style.flexDirection = "column"
main_5_2.style.alignItems = "center"
main_5.appendChild(main_5_2)

let main_5_2_head = document.createElement('h2')
main_5_2_head.innerHTML = "Haemoglobin A1C"
main_5_2.appendChild(main_5_2_head)

let main_5_2_text = document.createElement('p')
main_5_2_text.style.width = "16vw"
main_5_2_text.style.fontSize - "8px"
main_5_2_text.style.fontWeight = "300"
main_5_2_text.style.textAlign = "justify"
main_5_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_5_2.appendChild(main_5_2_text)



let main_6 = document.createElement('div')
main_6.style.width = "18vw"
main_6.style.height = "65vh"
main_6.style.backgroundColor = "white"
main_6.style.borderRadius = "15px"
main_6.style.cursor = "pointer"
main_6.onclick = function () {
    window.location.href = "testDetails"
}
main_low.appendChild(main_6)

let main_6_1 = document.createElement('div')
main_6_1.style.width = "18vw"
main_6_1.style.height = "30vh"
main_6_1.style.borderRadius = "10px"
main_6.className = "main_container"
main_6.appendChild(main_6_1)

let main_6_img = document.createElement('img')
main_6_img.src = "images/Liquid Panel.jpg"
main_6_img.style.width = "18vw"
main_6_img.style.height = "30vh"
main_6_img.style.borderRadius = "10px"
main_6_1.appendChild(main_6_img)

let main_6_2 = document.createElement('div')
main_6_2.style.width = "18vw"
main_6_2.style.height = "35vh"
main_6_2.style.borderRadius = "10px"
main_6_2.style.display = "flex"
main_6_2.style.flexDirection = "column"
main_6_2.style.alignItems = "center"
main_6.appendChild(main_6_2)

let main_6_2_head = document.createElement('h2')
main_6_2_head.innerHTML = "Liquid Panel"
main_6_2.appendChild(main_6_2_head)

let main_6_2_text = document.createElement('p')
main_6_2_text.style.width = "16vw"
main_6_2_text.style.fontSize - "8px"
main_6_2_text.style.fontWeight = "300"
main_6_2_text.style.textAlign = "justify"
main_6_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_6_2.appendChild(main_6_2_text)

let main_7 = document.createElement('div')
main_7.style.width = "18vw"
main_7.style.height = "65vh"
main_7.style.backgroundColor = "white"
main_7.style.borderRadius = "15px"
main_7.style.cursor = "pointer"
main_low.appendChild(main_7)

let main_7_1 = document.createElement('div')
main_7_1.style.width = "18vw"
main_7_1.style.height = "30vh"
main_7_1.style.borderRadius = "10px"
main_7.className = "main_container"
main_7.onclick = function () {
    window.location.href = "testDetails"
}
main_7.appendChild(main_7_1)

let main_7_img = document.createElement('img')
main_7_img.src = "images/Liver Function Test.webp"
main_7_img.style.width = "18vw"
main_7_img.style.height = "30vh"
main_7_img.style.borderRadius = "10px"
main_7_1.appendChild(main_7_img)

let main_7_2 = document.createElement('div')
main_7_2.style.width = "18vw"
main_7_2.style.height = "35vh"
main_7_2.style.borderRadius = "10px"
main_7_2.style.display = "flex"
main_7_2.style.flexDirection = "column"
main_7_2.style.alignItems = "center"
main_7.appendChild(main_7_2)

let main_7_2_head = document.createElement('h2')
main_7_2_head.innerHTML = "Liver Function Test"
main_7_2.appendChild(main_7_2_head)

let main_7_2_text = document.createElement('p')
main_7_2_text.style.width = "16vw"
main_7_2_text.style.fontSize - "8px"
main_7_2_text.style.fontWeight = "300"
main_7_2_text.style.textAlign = "justify"
main_7_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_7_2.appendChild(main_7_2_text)


let main_8 = document.createElement('div')
main_8.style.width = "18vw"
main_8.style.height = "65vh"
main_8.style.backgroundColor = "white"
main_8.style.borderRadius = "15px"
main_8.style.cursor = "pointer"
main_8.onclick = function () {
    window.location.href = "testDetails"
}
main_low.appendChild(main_8)

let main_8_1 = document.createElement('div')
main_8_1.style.width = "18vw"
main_8_1.style.height = "30vh"
main_8_1.style.borderRadius = "10px"
main_8.className = "main_container"
main_8.appendChild(main_8_1)

let main_8_img = document.createElement('img')
main_8_img.src = "images/Hepatitis.jpg"
main_8_img.style.width = "18vw"
main_8_img.style.height = "30vh"
main_8_img.style.borderRadius = "10px"
main_8_1.appendChild(main_8_img)

let main_8_2 = document.createElement('div')
main_8_2.style.width = "18vw"
main_8_2.style.height = "35vh"
main_8_2.style.borderRadius = "10px"
main_8_2.style.display = "flex"
main_8_2.style.flexDirection = "column"
main_8_2.style.alignItems = "center"
main_8_1.appendChild(main_8_2)

let main_8_2_head = document.createElement('h2')
main_8_2_head.innerHTML = "Hepatitis"
main_8_2.appendChild(main_8_2_head)

let main_8_2_text = document.createElement('p')
main_8_2_text.style.width = "16vw"
main_8_2_text.style.fontSize - "8px"
main_8_2_text.style.fontWeight = "300"
main_8_2_text.style.textAlign = "justify"
main_8_2_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores porro voluptatem laboriosam, iste saepe minima numquam"
main_8_2.appendChild(main_8_2_text)