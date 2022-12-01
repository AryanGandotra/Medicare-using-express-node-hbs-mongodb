let footer = document.createElement('div')
footer.style.width = "98vw"
footer.style.height = "50vh"
footer.style.marginTop = "20vh"
footer.style.backgroundColor = "#AAD9D9"
footer.style.paddingTop = "10vh"
footer.style.fontSize = "18px"
// main.appendChild(footer)
document.body.appendChild(footer)

let footer_div = document.createElement('div')
// footer_div.style.border = "2px solid blue"
footer_div.style.width = "80vw"
footer_div.style.margin = "auto"
footer_div.style.display = "flex"
footer_div.style.justifyContent = "space-between"

let footer_text = document.createElement('div')
footer_text.innerHTML = ".MediCare."
footer_text.style.width = "80vw"
footer_text.style.fontSize = "30px"
footer_text.style.display = "flex"
// footer_text.style.border="2px solid green"
footer_text.style.margin = "auto"
footer_text.style.marginTop = "10vh"
footer_text.style.justifyContent = "center"
footer_text.style.alignItems = "center"
footer_text.style.fontWeight = "bolder"

footer.appendChild(footer_div)
footer.appendChild(footer_text)
let ul_1 = document.createElement('ul')
let ul_2 = document.createElement('ul')
let ul_3 = document.createElement('ul')
let ul_4 = document.createElement('ul')
let ul_5 = document.createElement('ul')
ul_1.style.listStyle = "none"
ul_2.style.listStyle = "none"
ul_3.style.listStyle = "none"
ul_4.style.listStyle = "none"
ul_5.style.listStyle = "none"
let li_11 = document.createElement('li')
let li_12 = document.createElement('li')
let li_13 = document.createElement('li')
let li_14 = document.createElement('li')

li_11.innerHTML = "MediCare"
li_12.innerHTML = "About Us"
li_13.innerHTML = "Blog"
li_14.innerHTML = "Contact Us"

let li_21 = document.createElement('li')
let li_22 = document.createElement('li')
let li_23 = document.createElement('li')
let li_24 = document.createElement('li')
let li_25 = document.createElement('li')
let li_26 = document.createElement('li')
let li_27 = document.createElement('li')
li_21.innerHTML = "For patients"
li_22.innerHTML = "Book Diagnostic Tests"
li_23.innerHTML = "Book Full Body Checkups"
li_24.innerHTML = "MediCare Plus"
li_25.innerHTML = "Covid Hospital listing"
li_26.innerHTML = "Read health articles"
li_27.innerHTML = "Read about medicines"

let li_31 = document.createElement('li')
let li_32 = document.createElement('li')

li_31.innerHTML = "For doctors"
li_32.innerHTML = "MediCare Profile"


let li_41 = document.createElement('li')
let li_42 = document.createElement('li')

li_41.innerHTML = "For Corporates"
li_42.innerHTML = "Wellness Plans"

let li_51 = document.createElement('li')
let li_52 = document.createElement('li')
let li_53 = document.createElement('li')
let li_54 = document.createElement('li')
let li_55 = document.createElement('li')
let li_56 = document.createElement('li')

li_51.innerHTML = "Social"
li_52.innerHTML = "Facebook"
li_53.innerHTML = "Twitter"
li_54.innerHTML = "Youtube"
li_55.innerHTML = "LinkedIn"
li_56.innerHTML = "Github"


li_11.style.fontWeight = "bolder"
li_21.style.fontWeight = "bolder"
li_31.style.fontWeight = "bolder"
li_41.style.fontWeight = "bolder"
li_51.style.fontWeight = "bolder"

li_11.style.marginBottom = "15px"
li_21.style.marginBottom = "15px"
li_31.style.marginBottom = "15px"
li_41.style.marginBottom = "15px"
li_51.style.marginBottom = "15px"

// footer.style.border="2px solid red"


ul_1.appendChild(li_11)
ul_1.appendChild(li_12)
ul_1.appendChild(li_13)
ul_1.appendChild(li_14)
ul_2.appendChild(li_21)
ul_2.appendChild(li_22)
ul_2.appendChild(li_23)
ul_2.appendChild(li_24)
ul_2.appendChild(li_25)
ul_2.appendChild(li_26)
ul_2.appendChild(li_27)
ul_3.appendChild(li_31)
ul_3.appendChild(li_32)
ul_4.appendChild(li_41)
ul_4.appendChild(li_42)
ul_5.appendChild(li_51)
ul_5.appendChild(li_52)
ul_5.appendChild(li_53)
ul_5.appendChild(li_54)
ul_5.appendChild(li_55)
ul_5.appendChild(li_56)
footer_div.appendChild(ul_1)
footer_div.appendChild(ul_2)
footer_div.appendChild(ul_3)
footer_div.appendChild(ul_4)
footer_div.appendChild(ul_5)



