document.body.style.backgroundColor = "rgb(1, 9, 34)"
document.body.style.fontFamily = "Raleway"

let main = document.createElement('div');
main.style.width = "90vw"
main.style.margin = "auto"
// main.style.border = "2px solid red"
main.style.marginBottom = "20px"
document.body.appendChild(main);

let div_container = document.createElement('div');
div_container.style.width = "90vw"
div_container.style.margin = "auto"
// div_container.style.border = "2px solid yellow"
div_container.style.marginTop = "10vh"
div_container.style.marginBottom = "20px"
div_container.style.display = "flex"
main.appendChild(div_container)


let div_1 = document.createElement('div')
let div_2 = document.createElement('div')
div_1.style.height = "70vh"
div_1.style.width = "45vw"
div_2.style.width = "45vw"
div_2.style.height = "70vh"
// div_1.style.border = "2px solid green"
// div_2.style.border = "2px solid blue"
div_1.style.display = "inline"
div_2.style.display = "inline-flex"
div_2.style.flexDirection = "column"
// div_2.style.justifyContent="center"
div_2.style.alignItems = "center"


let div_21 = document.createElement('div')
let div_22 = document.createElement('div')

div_21.style.fontSize = "60px"
div_21.style.marginLeft = "4vw"
div_22.style.marginLeft = "4vw"
div_22.style.fontSize = "45px"
div_22.style.paddingLeft = "8vw"
div_22.style.fontWeight = "200"
div_21.style.fontWeight = "600"

div_21.innerHTML = "We Care For You"
div_21.className = "div_21"
div_22.className = "div_22"
div_22.innerHTML = "Your Health Is Our Priority"
div_2.style.color = "white"


div_21.style.marginTop = "20%"
div_22.style.marginTop = "10%"

div_container.appendChild(div_1)
div_container.appendChild(div_2)


div_2.appendChild(div_21)
div_2.appendChild(div_22)

let div_img = document.createElement('img')
div_img["src"] = "images/woman-doctor-office.webp"
div_1.appendChild(div_img)

let content_1 = document.createElement('div')
content_1.style.width = "90vw"
content_1.style.height = "40vh"
content_1.style.margin = "auto"
content_1.style.marginTop = "20vh"
content_1.style.display = "flex"
content_1.style.justifyContent = "space-between"
main.appendChild(content_1)

let card_1_a = document.createElement('a')
card_1_a.href = "articlelist"
let card_2_a = document.createElement('a')
card_2_a.href = "articlelist"
let card_3_a = document.createElement('a')
card_3_a.href = "articlelist"
let card_4_a = document.createElement('a')
card_4_a.href = "articlelist"
let card_5_a = document.createElement('a')
card_5_a.href = "articlelist"

let card_1 = document.createElement('div')
let card_2 = document.createElement('div')
let card_3 = document.createElement('div')
let card_4 = document.createElement('div')
let card_5 = document.createElement('div')

let card_img_1 = document.createElement('img')
let card_img_2 = document.createElement('img')
let card_img_3 = document.createElement('img')
let card_img_4 = document.createElement('img')
let card_img_5 = document.createElement('img')

card_img_1.className = "card_img"
card_img_2.className = "card_img"
card_img_3.className = "card_img"
card_img_4.className = "card_img"
card_img_5.className = "card_img"

card_img_1.src = "images/a-clinician-works-with-patients-in-a-health-setting.jpg"
card_img_2.src = "images/F6FF3DF2-A99D-4BE0-99595C9E4717FEF4.webp"
card_img_3.src = "images/video-doctor-consultation-scaled.jpg"
card_img_4.src = "images/iStock-surgeons-1200x800.webp"
card_img_5.src = "images/lab-tests (1).jpg"


card_1.style.width = "200px"
card_1.style.borderRadius = "10px"
card_1.style.height = "35vh"

card_2.style.width = "200px"
card_2.style.borderRadius = "10px"
card_2.style.height = "35vh"

card_3.style.width = "200px"
card_3.style.borderRadius = "10px"
card_3.style.height = "35vh"

card_4.style.width = "200px"
card_4.style.borderRadius = "10px"
card_4.style.height = "35vh"

card_5.style.width = "200px"
card_5.style.borderRadius = "10px"
card_5.style.height = "35vh"


content_1.appendChild(card_1_a)
content_1.appendChild(card_2_a)
content_1.appendChild(card_3_a)
content_1.appendChild(card_4_a)
content_1.appendChild(card_5_a)
card_1_a.appendChild(card_1)
card_2_a.appendChild(card_2)
card_3_a.appendChild(card_3)
card_4_a.appendChild(card_4)
card_5_a.appendChild(card_5)
card_1.appendChild(card_img_1)
card_2.appendChild(card_img_2)
card_3.appendChild(card_img_3)
card_4.appendChild(card_img_4)
card_5.appendChild(card_img_5)


let heading = document.createElement('h1')
heading.innerHTML = "Top Searches"
heading.style.color = "white"
main.appendChild(heading)


let link = document.createElement('div')
link.style.width = "90vw"
main.appendChild(link)

let link_1 = document.createElement('div')
link_1.style.width = "90vw"
link.appendChild(link_1)

let link_2 = document.createElement('div')
link_2.style.width = "90vw"
link.appendChild(link_2)

link_2.style.marginTop = "30px"

link_1.style.display = "flex"
link_1.style.justifyContent = "space-between"

link_2.style.display = "flex"
link_2.style.justifyContent = "space-between"


let link_nav_1 = document.createElement('div')
link_nav_1.style.backgroundColor = "#AAD9D9"
link_nav_1.style.height = "100px"
link_nav_1.style.width = "350px"

let link_nav_2 = document.createElement('div')
link_nav_2.style.backgroundColor = "#AAD9D9"
link_nav_2.style.height = "100px"
link_nav_2.style.width = "350px"


let link_nav_3 = document.createElement('div')
link_nav_3.style.backgroundColor = "#AAD9D9"
link_nav_3.style.height = "100px"
link_nav_3.style.width = "350px"


let link_nav_11 = document.createElement('div')
link_nav_11.style.backgroundColor = "#AAD9D9"
link_nav_11.style.height = "100px"
link_nav_11.style.width = "350px"

let link_nav_12 = document.createElement('div')
link_nav_12.style.backgroundColor = "#AAD9D9"
link_nav_12.style.height = "100px"
link_nav_12.style.width = "350px"


let link_nav_13 = document.createElement('div')
link_nav_13.style.backgroundColor = "#AAD9D9"
link_nav_13.style.height = "100px"
link_nav_13.style.width = "350px"


link_nav_1.style.borderRadius = "10px"
link_nav_2.style.borderRadius = "10px"
link_nav_3.style.borderRadius = "10px"
link_nav_11.style.borderRadius = "10px"
link_nav_12.style.borderRadius = "10px"
link_nav_13.style.borderRadius = "10px"

let link_nav_1_a = document.createElement('a')
link_nav_1_a.href = "article"
link_nav_1_a.style.textDecoration = "none"
link_nav_1_a.style.color = "black"

let link_nav_2_a = document.createElement('a')
link_nav_2_a.href = "medicine"
link_nav_2_a.style.textDecoration = "none"
link_nav_2_a.style.color = "black"

let link_nav_3_a = document.createElement('a')
link_nav_3_a.href = "doc"
link_nav_3_a.style.textDecoration = "none"
link_nav_3_a.style.color = "black"

let link_nav_11_a = document.createElement('a')
link_nav_11_a.href = "labtesttype"
link_nav_11_a.style.textDecoration = "none"
link_nav_11_a.style.color = "black"

let link_nav_12_a = document.createElement('a')
link_nav_12_a.href = "labtesttype"
link_nav_12_a.style.textDecoration = "none"
link_nav_12_a.style.color = "black"

let link_nav_13_a = document.createElement('a')
link_nav_13_a.href = "articlelist"
link_nav_13_a.style.textDecoration = "none"
link_nav_13_a.style.color = "black"


link_nav_1.innerHTML = "Home Remedies"
link_nav_2.innerHTML = "Shop"
link_nav_3.innerHTML = "Connect To A Doctor"
link_nav_11.innerHTML = "Book Tests"
link_nav_12.innerHTML = "Cold, Cough, fever"
link_nav_13.innerHTML = "Depression"

link_nav_1.style.fontWeight = "600"
link_nav_2.style.fontWeight = "600"
link_nav_3.style.fontWeight = "600"
link_nav_11.style.fontWeight = "600"
link_nav_12.style.fontWeight = "600"
link_nav_13.style.fontWeight = "600"


link_nav_1.style.display = "flex"
link_nav_2.style.display = "flex"
link_nav_3.style.display = "flex"
link_nav_11.style.display = "flex"
link_nav_12.style.display = "flex"
link_nav_13.style.display = "flex"

link_nav_1.style.justifyContent = "center"
link_nav_2.style.justifyContent = "center"
link_nav_3.style.justifyContent = "center"
link_nav_11.style.justifyContent = "center"
link_nav_12.style.justifyContent = "center"
link_nav_13.style.justifyContent = "center"

link_nav_1.style.alignItems = "center"
link_nav_2.style.alignItems = "center"
link_nav_3.style.alignItems = "center"
link_nav_11.style.alignItems = "center"
link_nav_12.style.alignItems = "center"
link_nav_13.style.alignItems = "center"

link_nav_1.style.fontSize = "16px"
link_nav_2.style.fontSize = "16px"
link_nav_3.style.fontSize = "16px"
link_nav_11.style.fontSize = "16px"
link_nav_12.style.fontSize = "16px"
link_nav_13.style.fontSize = "16px"



link_1.appendChild(link_nav_1_a)
link_nav_1_a.appendChild(link_nav_1)
link_1.appendChild(link_nav_2_a)
link_nav_2_a.appendChild(link_nav_2)
link_1.appendChild(link_nav_3_a)
link_nav_3_a.appendChild(link_nav_3)


link_2.appendChild(link_nav_11_a)
link_nav_11_a.appendChild(link_nav_11)
link_2.appendChild(link_nav_12_a)
link_nav_12_a.appendChild(link_nav_12)
link_2.appendChild(link_nav_13_a)
link_nav_13_a.appendChild(link_nav_13)


let heading_1 = document.createElement('h1')
heading_1.innerHTML = "Consult top doctors online for any health concern"
heading_1.style.color = "white"
heading_1.style.marginTop = "60px"
main.appendChild(heading_1)


let heading_2 = document.createElement('h4')
heading_2.innerHTML = "Private online consultations with verified doctors in all specialists"
heading_2.style.color = "white"
heading_2.style.fontWeight = "100"
main.appendChild(heading_2)


let doctor = document.createElement('div')
doctor.style.width = "90vw"
// doctor.style.border="2px solid yellow"
doctor.style.marginTop = "30px"
doctor.style.display = "flex"
doctor.style.justifyContent = "space-between"
main.appendChild(doctor)


let doctor_div_1 = document.createElement('div')
let doctor_div_2 = document.createElement('div')
let doctor_div_3 = document.createElement('div')
let doctor_div_4 = document.createElement('div')
let doctor_div_5 = document.createElement('div')

let doctor_img_1 = document.createElement('img')
let doctor_img_2 = document.createElement('img')
let doctor_img_3 = document.createElement('img')
let doctor_img_4 = document.createElement('img')
let doctor_img_5 = document.createElement('img')

doctor_img_1.src = "images/dentist.jpg"
doctor_img_2.src = "images/nutritionist.jpg"
doctor_img_3.src = "images/physiotherapist.webp"
doctor_img_4.src = "images/gynaecologist.jpg"
doctor_img_5.src = "images/orthopedic.webp"

doctor_img_1.className = "doctor_img"
doctor_img_2.className = "doctor_img"
doctor_img_3.className = "doctor_img"
doctor_img_4.className = "doctor_img"
doctor_img_5.className = "doctor_img"

doctor_div_1.style.height = "200px"
doctor_div_1.style.width = "200px"
doctor_div_1.style.cursor = "pointer"
doctor_div_1.onclick = function () {
    window.location.href = "doc"
}
doctor_div_2.style.height = "200px"
doctor_div_2.style.width = "200px"
doctor_div_2.style.cursor = "pointer"
doctor_div_2.onclick = function () {
    window.location.href = "doc"
}
doctor_div_3.style.height = "200px"
doctor_div_3.style.width = "200px"
doctor_div_3.style.cursor = "pointer"
doctor_div_3.onclick = function () {
    window.location.href = "doc"
}
doctor_div_4.style.height = "200px"
doctor_div_4.style.width = "200px"
doctor_div_4.style.cursor = "pointer"
doctor_div_4.onclick = function () {
    window.location.href = "doc"
}
doctor_div_5.style.height = "200px"
doctor_div_5.style.width = "200px"
doctor_div_5.style.cursor = "pointer"
doctor_div_5.onclick = function () {
    window.location.href = "doc"
}

doctor.appendChild(doctor_div_1)
doctor.appendChild(doctor_div_2)
doctor.appendChild(doctor_div_3)
doctor.appendChild(doctor_div_4)
doctor.appendChild(doctor_div_5)
doctor_div_1.appendChild(doctor_img_1)
doctor_div_2.appendChild(doctor_img_2)
doctor_div_3.appendChild(doctor_img_3)
doctor_div_4.appendChild(doctor_img_4)
doctor_div_5.appendChild(doctor_img_5)


let doctor_text = document.createElement('div')
doctor_text.style.width = "90vw"
doctor_text.style.marginTop = "10px"
doctor_text.style.color = "white"
doctor_text.style.display = "flex"
doctor_text.style.justifyContent = "space-between"
main.appendChild(doctor_text)

let doctor_text_1 = document.createElement('div')
let doctor_text_2 = document.createElement('div')
let doctor_text_3 = document.createElement('div')
let doctor_text_4 = document.createElement('div')
let doctor_text_5 = document.createElement('div')

doctor_text_1.innerHTML = "Dentist"
doctor_text_2.innerHTML = "Nutritionist"
doctor_text_3.innerHTML = "Physiotherapist"
doctor_text_4.innerHTML = "Gynaecologist"
doctor_text_5.innerHTML = "Orthopedic"


doctor_text_1.style.display = "flex"
doctor_text_1.style.width = "200px"
doctor_text_1.style.justifyContent = "center"

doctor_text_2.style.display = "flex"
doctor_text_2.style.width = "200px"
doctor_text_2.style.justifyContent = "center"

doctor_text_3.style.display = "flex"
doctor_text_3.style.width = "200px"
doctor_text_3.style.justifyContent = "center"

doctor_text_4.style.display = "flex"
doctor_text_4.style.width = "200px"
doctor_text_4.style.justifyContent = "center"

doctor_text_5.style.display = "flex"
doctor_text_5.style.width = "200px"
doctor_text_5.style.justifyContent = "center"


doctor_text.appendChild(doctor_text_1)
doctor_text.appendChild(doctor_text_2)
doctor_text.appendChild(doctor_text_3)
doctor_text.appendChild(doctor_text_4)
doctor_text.appendChild(doctor_text_5)

main.appendChild(doctor_text)


let go = document.createElement('div')
go.style.width = "90vw"
go.style.height = "30vh"
// go.style.border = "2px solid lightgreen"    
go.style.marginTop = "20vh"
go.style.display = "flex"
go.style.justifyContent = "space-around"
main.appendChild(go)

let go_1 = document.createElement('div')
go_1.style.width = "30vw"
// go_1.style.border="2px solid yellow"
go_1.style.display = "flex"
go_1.style.flexDirection = "column"
// go_1.style.alignItems="center"
go.appendChild(go_1)

let go_div = document.createElement('div')
go_div.innerHTML = "Read Top Articles From Health Experts"
go_div.style.color = "white"
go_div.style.fontSize = "45px"
go_div.style.width = "30vw"
go_div.style.marginTop = "4vh"
// go_div.style.border = "2px solid blue"
go_1.appendChild(go_div)

let btn = document.createElement('div')
let btn_a = document.createElement('a')
btn_a.href = "articlelist"
btn_a.style.text
btn_a.style.textDecoration = "none"
btn_a.style.color = "black"
btn.innerHTML = "See All Articles"
btn.style.backgroundColor = "#AAD9D9"
btn.style.width = "150px"
btn.style.borderRadius = "10px"
btn.style.marginTop = "20px"
btn.style.height = "40px"
btn.style.display = "flex"
btn.style.justifyContent = "center"
btn.style.alignItems = "center"
go_1.appendChild(btn_a)
btn_a.appendChild(btn)


var slider = document.createElement('div');
slider.id = 'slider'
slider.style.borderRadius = "5px"
slider.style.height = "50vh"
// slider.style.width = "90vw"
// slider.style.margin = "auto"
go.appendChild(slider);

var img_div_1 = document.createElement('div');
var img_1 = document.createElement('img');
img_div_1.className = "imageSlides";
img_1["src"] = "images/covid.jpg"
img_1.className = "slider_img"
img_div_1.appendChild(img_1);
slider.appendChild(img_div_1);

var img_div_2 = document.createElement('div');
var img_2 = document.createElement('img');
img_div_2.className = "imageSlides";
img_2["src"] = "images/healthy.jpg"
img_2.className = "slider_img"
img_div_2.appendChild(img_2);
slider.appendChild(img_div_2);

var img_div_3 = document.createElement('div');
var img_3 = document.createElement('img');
img_div_3.className = "imageSlides";
img_3["src"] = "images/water.png"
img_3.className = "slider_img"
img_div_3.appendChild(img_3);
slider.appendChild(img_div_3);


let a_1 = document.createElement('a')
a_1.className = "slider-btn previous"
a_1.innerHTML = "❮"

let a_2 = document.createElement('a')
a_2.className = "slider-btn next"
a_2.innerHTML = "❯"

slider.appendChild(a_1);
slider.appendChild(a_2);


a_1.onclick = function () {
    setSlides(-1)
};

a_2.onclick = function () {
    setSlides(1)
};
var currentIndex = 1;
displaySlides(currentIndex);
function setSlides(num) {
    displaySlides(currentIndex += num);
}
function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}



let footer = document.createElement('div')
footer.style.width = "98.411vw"
footer.style.height = "50vh"
footer.style.marginTop = "20vh"
footer.style.backgroundColor = "#AAD9D9"
footer.style.paddingTop = "10vh"
footer.style.fontSize = "18px"
main.appendChild(footer)

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
footer.style.marginLeft = "-4vw"


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



