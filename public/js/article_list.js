document.body.style.margin = "0px"
let main = document.createElement('div')
main.style.width = "98.9vw"
// main.style.border = "2px solid red"
main.style.margin = "auto"
document.body.appendChild(main)


let article_1 = document.createElement('div')
article_1.style.width = "98.9vw"
article_1.style.height = "60vh"
article_1.style.backgroundColor = "white"
article_1.style.display = "flex"
article_1.style.justifyContent = "space-around"
article_1.style.marginTop = "6vh"
main.appendChild(article_1)

let article_1_1 = document.createElement('div')
article_1_1.style.width = "40vw"
article_1_1.style.height = "50vh"
article_1_1.style.display = "flex"
article_1_1.style.flexDirection = "column"
article_1.appendChild(article_1_1)

let article_1_1_text = document.createElement('div')
article_1_1_text.innerHTML = "Food and Water - Safety, Hygiene and Sanitation"
article_1_1_text.style.color = "rgb(1, 9, 34)"
article_1_1_text.style.fontSize = "50px"
article_1_1_text.style.marginTop = "15vh"
article_1_1_text.style.fontWeight = "800"
article_1_1.appendChild(article_1_1_text)

let article_1_1_detail = document.createElement('div')
article_1_1_detail.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text "
article_1_1_detail.style.color = "rgb(1, 9, 34)"
article_1_1_detail.style.fontSize = "20px"
article_1_1_detail.style.marginTop = "1vh"
article_1_1_detail.style.fontWeight = "300"
article_1_1.appendChild(article_1_1_detail)

let article_1_1_btn_a = document.createElement('a')
article_1_1_btn_a.href = "article"
article_1_1_btn_a.style.textDecoration = "none"
article_1_1.appendChild(article_1_1_btn_a)

let article_1_1_btn = document.createElement('div')
article_1_1_btn.innerHTML = "Read more"
article_1_1_btn.style.backgroundColor = "rgb(1, 9, 34)"
article_1_1_btn.style.color = "white"
article_1_1_btn.style.fontSize = "20px"
article_1_1_btn.style.width = "10vw"
article_1_1_btn.style.height = "5vh"
article_1_1_btn.style.marginTop = "2vh"
article_1_1_btn.style.fontWeight = "300"
article_1_1_btn.style.borderRadius = "10px"
article_1_1_btn.style.display = "flex"
article_1_1_btn.style.justifyContent = "center"
article_1_1_btn.style.alignItems = "center"
article_1_1_btn_a.appendChild(article_1_1_btn)

let article_1_2 = document.createElement('img')
article_1_2.src = "images/water.png"
article_1_2.style.width = "50vh"
article_1_2.style.height = "50vh"
article_1_2.style.display = "flex"
article_1_2.style.flexDirection = "column"
article_1_2.style.marginTop = "5vh"
article_1_2.style.borderRadius = "10px"
article_1_2.style.marginLeft = "-10vw"
article_1.appendChild(article_1_2)





let article_2 = document.createElement('div')
article_2.style.width = "98.9vw"
article_2.style.height = "60vh"
article_2.style.backgroundColor = "rgb(1, 9, 34)"
article_2.style.display = "flex"
article_2.style.justifyContent = "space-around"
article_2.style.marginTop = "6vh"
main.appendChild(article_2)



let article_2_1 = document.createElement('div')
article_2_1.style.width = "40vw"
article_2_1.style.height = "50vh"
article_2_1.style.display = "flex"
article_2_1.style.flexDirection = "column"
article_2.appendChild(article_2_1)

let article_2_1_text = document.createElement('div')
article_2_1_text.innerHTML = "What is Migraine?"
article_2_1_text.style.color = "white"
article_2_1_text.style.fontSize = "50px"
article_2_1_text.style.marginTop = "15vh"
article_2_1_text.style.fontWeight = "800"
article_2_1.appendChild(article_2_1_text)

let article_2_1_detail = document.createElement('div')
article_2_1_detail.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text "
article_2_1_detail.style.color = "white"
article_2_1_detail.style.fontSize = "20px"
article_2_1_detail.style.marginTop = "1vh"
article_2_1_detail.style.fontWeight = "300"
article_2_1.appendChild(article_2_1_detail)

let article_2_1_btn_a = document.createElement('a')
article_2_1_btn_a.href = "article"
article_2_1_btn_a.style.textDecoration = "none"
article_2_1.appendChild(article_2_1_btn_a)

let article_2_1_btn = document.createElement('div')
article_2_1_btn.innerHTML = "Read more"
article_2_1_btn.style.backgroundColor = "white"
article_2_1_btn.style.color = "rgb(1, 9, 34)"
article_2_1_btn.style.fontSize = "20px"
article_2_1_btn.style.width = "10vw"
article_2_1_btn.style.height = "5vh"
article_2_1_btn.style.marginTop = "2vh"
article_2_1_btn.style.fontWeight = "400"
article_2_1_btn.style.borderRadius = "10px"
article_2_1_btn.style.display = "flex"
article_2_1_btn.style.justifyContent = "center"
article_2_1_btn.style.alignItems = "center"
article_2_1_btn_a.appendChild(article_2_1_btn)

let article_2_2 = document.createElement('img')
article_2_2.src = "images/migraine.jpg"
article_2_2.style.width = "50vh"
article_2_2.style.height = "50vh"
article_2_2.style.display = "flex"
article_2_2.style.flexDirection = "column"
article_2_2.style.marginTop = "5vh"
article_2_2.style.borderRadius = "10px"
article_2_2.style.marginLeft = "-10vw"
article_2.appendChild(article_2_2)

let article_3 = document.createElement('div')
article_3.style.width = "98.9vw"
article_3.style.height = "60vh"
article_3.style.backgroundColor = "white"
article_3.style.display = "flex"
article_3.style.justifyContent = "space-around"
article_3.style.marginTop = "6vh"
main.appendChild(article_3)

let article_3_1 = document.createElement('div')
article_3_1.style.width = "40vw"
article_3_1.style.height = "50vh"
article_3_1.style.display = "flex"
article_3_1.style.flexDirection = "column"
article_3.appendChild(article_3_1)

let article_3_1_text = document.createElement('div')
article_3_1_text.innerHTML = "Depression Can Cause Toothache! "
article_3_1_text.style.color = "rgb(1, 9, 34)"
article_3_1_text.style.fontSize = "50px"
article_3_1_text.style.marginTop = "15vh"
article_3_1_text.style.fontWeight = "800"
article_3_1.appendChild(article_3_1_text)

let article_3_1_detail = document.createElement('div')
article_3_1_detail.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text "
article_3_1_detail.style.color = "rgb(1, 9, 34)"
article_3_1_detail.style.fontSize = "20px"
article_3_1_detail.style.marginTop = "1vh"
article_3_1_detail.style.fontWeight = "300"
article_3_1.appendChild(article_3_1_detail)

let article_3_1_btn_a = document.createElement('a')
article_3_1_btn_a.href = "article"
article_3_1_btn_a.style.textDecoration = "none"
article_3_1.appendChild(article_3_1_btn_a)

let article_3_1_btn = document.createElement('div')
article_3_1_btn.innerHTML = "Read more"
article_3_1_btn.style.backgroundColor = "rgb(1, 9, 34)"
article_3_1_btn.style.color = "white"
article_3_1_btn.style.fontSize = "20px"
article_3_1_btn.style.width = "10vw"
article_3_1_btn.style.height = "5vh"
article_3_1_btn.style.marginTop = "2vh"
article_3_1_btn.style.fontWeight = "300"
article_3_1_btn.style.borderRadius = "10px"
article_3_1_btn.style.display = "flex"
article_3_1_btn.style.justifyContent = "center"
article_3_1_btn.style.alignItems = "center"
article_3_1_btn_a.appendChild(article_3_1_btn)

let article_3_2 = document.createElement('img')
article_3_2.src = "images/tooth.jpg"
article_3_2.style.width = "50vh"
article_3_2.style.height = "50vh"
article_3_2.style.display = "flex"
article_3_2.style.flexDirection = "column"
article_3_2.style.marginTop = "5vh"
article_3_2.style.borderRadius = "10px"
article_3_2.style.marginLeft = "-10vw"
article_3.appendChild(article_3_2)

let article_4 = document.createElement('div')
article_4.style.width = "98.9vw"
article_4.style.height = "60vh"
article_4.style.backgroundColor = "rgb(1, 9, 34)"
article_4.style.display = "flex"
article_4.style.justifyContent = "space-around"
article_4.style.marginTop = "6vh"
main.appendChild(article_4)

let article_4_1 = document.createElement('div')
article_4_1.style.width = "40vw"
article_4_1.style.height = "50vh"
article_4_1.style.display = "flex"
article_4_1.style.flexDirection = "column"
article_4.appendChild(article_4_1)

let article_4_1_text = document.createElement('div')
article_4_1_text.innerHTML = "How Knee Replacement Can Change Your Life"
article_4_1_text.style.color = "white"
article_4_1_text.style.fontSize = "50px"
article_4_1_text.style.marginTop = "15vh"
article_4_1_text.style.fontWeight = "800"
article_4_1.appendChild(article_4_1_text)

let article_4_1_detail = document.createElement('div')
article_4_1_detail.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text "
article_4_1_detail.style.color = "white"
article_4_1_detail.style.fontSize = "20px"
article_4_1_detail.style.marginTop = "1vh"
article_4_1_detail.style.fontWeight = "300"
article_4_1.appendChild(article_4_1_detail)

let article_4_1_btn_a = document.createElement('a')
article_4_1_btn_a.href = "article"
article_4_1_btn_a.style.textDecoration = "none"
article_4_1.appendChild(article_4_1_btn_a)

let article_4_1_btn = document.createElement('div')
article_4_1_btn.innerHTML = "Read more"
article_4_1_btn.style.backgroundColor = "white"
article_4_1_btn.style.color = "rgb(1, 9, 34)"
article_4_1_btn.style.fontSize = "20px"
article_4_1_btn.style.width = "10vw"
article_4_1_btn.style.height = "5vh"
article_4_1_btn.style.marginTop = "2vh"
article_4_1_btn.style.fontWeight = "400"
article_4_1_btn.style.borderRadius = "10px"
article_4_1_btn.style.display = "flex"
article_4_1_btn.style.justifyContent = "center"
article_4_1_btn.style.alignItems = "center"
article_4_1_btn_a.appendChild(article_4_1_btn)

let article_4_2 = document.createElement('img')
article_4_2.src = "images/knee.jpg"
article_4_2.style.width = "50vh"
article_4_2.style.height = "50vh"
article_4_2.style.display = "flex"
article_4_2.style.flexDirection = "column"
article_4_2.style.marginTop = "5vh"
article_4_2.style.borderRadius = "10px"
article_4_2.style.marginLeft = "-10vw"
article_4.appendChild(article_4_2)

let article_5 = document.createElement('div')
article_5.style.width = "98.9vw"
article_5.style.height = "60vh"
article_5.style.backgroundColor = "white"
article_5.style.display = "flex"
article_5.style.justifyContent = "space-around"
article_5.style.marginTop = "6vh"
main.appendChild(article_5)

let article_5_1 = document.createElement('div')
article_5_1.style.width = "40vw"
article_5_1.style.height = "50vh"
article_5_1.style.display = "flex"
article_5_1.style.flexDirection = "column"
article_5.appendChild(article_5_1)

let article_5_1_text = document.createElement('div')
article_5_1_text.innerHTML = "5 Common Reasons of Back Pain in People"
article_5_1_text.style.color = "rgb(1, 9, 34)"
article_5_1_text.style.fontSize = "50px"
article_5_1_text.style.marginTop = "15vh"
article_5_1_text.style.fontWeight = "800"
article_5_1.appendChild(article_5_1_text)

let article_5_1_detail = document.createElement('div')
article_5_1_detail.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text "
article_5_1_detail.style.color = "rgb(1, 9, 34)"
article_5_1_detail.style.fontSize = "20px"
article_5_1_detail.style.marginTop = "1vh"
article_5_1_detail.style.fontWeight = "300"
article_5_1.appendChild(article_5_1_detail)

let article_5_1_btn_a = document.createElement('a')
article_5_1_btn_a.href = "article"
article_5_1_btn_a.style.textDecoration = "none"
article_5_1.appendChild(article_5_1_btn_a)

let article_5_1_btn = document.createElement('div')
article_5_1_btn.innerHTML = "Read more"
article_5_1_btn.style.backgroundColor = "rgb(1, 9, 34)"
article_5_1_btn.style.color = "white"
article_5_1_btn.style.fontSize = "20px"
article_5_1_btn.style.width = "10vw"
article_5_1_btn.style.height = "5vh"
article_5_1_btn.style.marginTop = "2vh"
article_5_1_btn.style.fontWeight = "300"
article_5_1_btn.style.borderRadius = "10px"
article_5_1_btn.style.display = "flex"
article_5_1_btn.style.justifyContent = "center"
article_5_1_btn.style.alignItems = "center"
article_5_1_btn_a.appendChild(article_5_1_btn)

let article_5_2 = document.createElement('img')
article_5_2.src = "images/back-pain.jpg"
article_5_2.style.width = "50vh"
article_5_2.style.height = "50vh"
article_5_2.style.display = "flex"
article_5_2.style.flexDirection = "column"
article_5_2.style.marginTop = "5vh"
article_5_2.style.borderRadius = "10px"
article_5_2.style.marginLeft = "-10vw"
article_5.appendChild(article_5_2)

let article_6 = document.createElement('div')
article_6.style.width = "98.9vw"
article_6.style.height = "60vh"
article_6.style.backgroundColor = "rgb(1, 9, 34)"
article_6.style.display = "flex"
article_6.style.justifyContent = "space-around"
article_6.style.marginTop = "6vh"
main.appendChild(article_6)


let article_6_1 = document.createElement('div')
article_6_1.style.width = "40vw"
article_6_1.style.height = "50vh"
article_6_1.style.display = "flex"
article_6_1.style.flexDirection = "column"
article_6.appendChild(article_6_1)

let article_6_1_text = document.createElement('div')
article_6_1_text.innerHTML = "Importance of Ayurveda"
article_6_1_text.style.color = "white"
article_6_1_text.style.fontSize = "50px"
article_6_1_text.style.marginTop = "15vh"
article_6_1_text.style.fontWeight = "800"
article_6_1.appendChild(article_6_1_text)

let article_6_1_detail = document.createElement('div')
article_6_1_detail.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text "
article_6_1_detail.style.color = "white"
article_6_1_detail.style.fontSize = "20px"
article_6_1_detail.style.marginTop = "1vh"
article_6_1_detail.style.fontWeight = "300"
article_6_1.appendChild(article_6_1_detail)

let article_6_1_btn_a = document.createElement('a')
article_6_1_btn_a.href = "article"
article_6_1_btn_a.style.textDecoration = "none"
article_6_1.appendChild(article_6_1_btn_a)

let article_6_1_btn = document.createElement('div')
article_6_1_btn.innerHTML = "Read more"
article_6_1_btn.style.backgroundColor = "white"
article_6_1_btn.style.color = "rgb(1, 9, 34)"
article_6_1_btn.style.fontSize = "20px"
article_6_1_btn.style.width = "10vw"
article_6_1_btn.style.height = "5vh"
article_6_1_btn.style.marginTop = "2vh"
article_6_1_btn.style.fontWeight = "500"
article_6_1_btn.style.borderRadius = "10px"
article_6_1_btn.style.display = "flex"
article_6_1_btn.style.justifyContent = "center"
article_6_1_btn.style.alignItems = "center"
article_6_1_btn_a.appendChild(article_6_1_btn)

let article_6_2 = document.createElement('img')
article_6_2.src = "images/ayurveda.png"
article_6_2.style.width = "50vh"
article_6_2.style.height = "50vh"
article_6_2.style.display = "flex"
article_6_2.style.flexDirection = "column"
article_6_2.style.marginTop = "5vh"
article_6_2.style.borderRadius = "10px"
article_6_2.style.marginLeft = "-10vw"
article_6.appendChild(article_6_2)