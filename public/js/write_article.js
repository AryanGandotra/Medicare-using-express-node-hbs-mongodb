document.body.style.fontFamily = "Raleway"

let main = document.createElement('div')
main.style.width = "90vw"
main.style.height = "80vh"
// main.style.border = "2px solid red"
main.style.margin = "auto "
document.body.appendChild(main)


let container = document.createElement('div')
container.style.width = "90vw"
// container.style.border = "2px solid white"
container.style.display = "flex"
main.appendChild(container)


let text = document.createElement('div')
text.style.width = "45vw"
// text.style.border = "2px solid yellow"
text.style.height = "80vh"
text.style.height = "80vh"
text.justifyContent = "space-around"

let text_content_1 = document.createElement('div')
text_content_1.innerHTML = "Publish Your Writing"
text_content_1.style.height = "200px"
text_content_1.style.width = "45vw"
// text_content_1.style.border = "2px solid orange"
text_content_1.style.color = "#AAD9D9"
text_content_1.style.fontSize = "88px"
text_content_1.style.marginTop = "80px"
text_content_1.style.fontWeight = "800"
text.appendChild(text_content_1)


let text_content_2 = document.createElement('div')
text_content_2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eum fuga sint nam amet sunt fugit in qui suscipit est quae asperiores voluptatum ut, porro aliquam iusto iste esse. Veniam."
text_content_2.style.height = "100px"
text_content_2.style.width = "40vw"
// text_content_2.style.border = "2px solid orange"
text_content_2.style.color = "white"
text_content_2.style.fontSize = "16px"
text_content_2.style.marginTop = "60px"
text_content_2.style.textAlign = "justify"
text_content_2.style.fontWeight = "200"
text.appendChild(text_content_2)


let text_content_3 = document.createElement('div')
text_content_3.innerHTML = "Write article"
text_content_3.style.height = "40px"
text_content_3.style.width = "170px"
// text_content_3.style.border = "2px solid orange"
text_content_3.style.color = "black"
text_content_3.style.backgroundColor = "#AAD9D9"
text_content_3.style.fontSize = "16px"
text_content_3.style.marginTop = "50px"
text_content_3.style.fontWeight = "500"
text_content_3.style.display = "inline-flex"
text_content_3.style.justifyContent = "center"
text_content_3.style.alignItems = "center"
text_content_3.style.borderRadius = "10px"

let text_content_4 = document.createElement('div')
text_content_4.innerHTML = "Read other articles"
text_content_4.style.height = "40px"
text_content_4.style.width = "170px"
// text_content_4.style.border = "2px solid orange"
text_content_4.style.color = "black"
text_content_4.style.backgroundColor = "#AAD9D9"
text_content_4.style.fontSize = "16px"
text_content_4.style.marginTop = "50px"
text_content_4.style.marginLeft = "50px"
text_content_4.style.fontWeight = "500"
text_content_4.style.display = "inline-flex"
text_content_4.style.justifyContent = "center"
text_content_4.style.alignItems = "center"
text_content_4.style.borderRadius = "10px"

let img = document.createElement('div')
img.style.width = "45vw"
img.style.height = "80vh"

let image = document.createElement('img')
image.src = "images/art.png"
image.style.height = "80vh"
image.style.width = "45vw"
img.appendChild(image)

let text_a1  = document.createElement('a')
let text_a2  = document.createElement('a')
text_a1.href="articleadd"
text_a2.href="articlelist"
text_a1.appendChild(text_content_3)
text_a2.appendChild(text_content_4)


text.appendChild(text_a1)
text.appendChild(text_a2)
container.appendChild(text)
container.appendChild(img)


