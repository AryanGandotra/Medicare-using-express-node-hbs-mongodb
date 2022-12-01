document.body.style.backgroundColor = "rgb(1, 9, 34)"
document.body.style.fontFamily = "Raleway"


var nav = document.createElement('div');
nav.id = 'background';
nav.style.width = "90vw"
nav.style.height = "7vh"
nav.style.margin = "auto"
nav.style.marginBottom = "30px"
nav.style.display = "flex"
document.body.appendChild(nav);


let head = document.createElement('h2')
head.style.height = "inherit"
head.innerHTML = ".MediCare."
head.style.marginTop = "0px"
head.style.color = "white"
head.style.display = "flex"
head.style.justifyContent = "center"
head.style.alignItems = "center"
nav.appendChild(head)

head.onclick = function(){
    window.location.href="main.html"
}


let lab = document.createElement('div')
let lab_a = document.createElement('a')
lab_a.id = "lab"
lab.style.height = "inherit"
lab.innerHTML = "Lab Tests"
lab.style.marginTop = "0px"
lab.style.color = "white"
lab.style.display = "flex"
lab.style.justifyContent = "center"
lab.style.alignItems = "center"
lab_a.style.height = "7vh"
lab_a.href = "lab_test_type.html"
lab_a.style.textDecoration = "none"
lab_a.appendChild(lab)
nav.appendChild(lab_a)


let Medicine = document.createElement('div')
let Medicine_a = document.createElement('a')
Medicine.id = "lab"
Medicine.style.height = "inherit"
Medicine.innerHTML = "Medicines"
Medicine.style.marginTop = "0px"
Medicine.style.color = "white"
Medicine.style.display = "flex"
Medicine.style.justifyContent = "center"
Medicine.style.alignItems = "center"
Medicine_a.style.height = "7vh"
Medicine_a.href = "medicine.html"
Medicine_a.style.textDecoration = "none"
Medicine_a.appendChild(Medicine)
nav.appendChild(Medicine_a)

let blogs = document.createElement('div')
let blogs_a = document.createElement('a')
blogs_a.id = "lab"
blogs.style.height = "inherit"
blogs.innerHTML = "Blogs"
blogs.style.marginTop = "0px"
blogs.style.color = "white"
blogs.style.display = "flex"
blogs.style.justifyContent = "center"
blogs.style.alignItems = "center"
blogs_a.style.height = "7vh"
blogs_a.href = "write_article.html"
blogs_a.style.textDecoration = "none"
blogs_a.appendChild(blogs)
nav.appendChild(blogs_a)

let doctors = document.createElement('div')
let doctors_a = document.createElement('a')
doctors_a.id = "lab"
doctors.style.height = "inherit"
doctors.innerHTML = "Doctors"
doctors.style.marginTop = "0px"
doctors.style.color = "white"
doctors.style.display = "flex"
doctors.style.justifyContent = "center"
doctors.style.alignItems = "center"
doctors_a.style.height = "7vh"
doctors_a.href = "know_your_doc.html"
doctors_a.style.textDecoration = "none"
doctors_a.appendChild(doctors)
nav.appendChild(doctors_a)

let aboutus = document.createElement('div')
let aboutus_a = document.createElement('a')
aboutus_a.id = "lab"
aboutus.style.height = "inherit"
aboutus.innerHTML = "About Us"
aboutus.style.marginTop = "0px"
aboutus.style.color = "white"
aboutus.style.display = "flex"
aboutus.style.justifyContent = "center"
aboutus.style.alignItems = "center"
aboutus_a.style.height = "7vh"
aboutus_a.href = "aboutUs.html"
aboutus_a.style.textDecoration = "none"
aboutus_a.appendChild(aboutus)
nav.appendChild(aboutus_a)


let login = document.createElement('div')
let login_a = document.createElement('a')
login_a.id = "login"
login.style.height = "inherit"
login.innerHTML = "Login/Sign Up"
login.style.marginTop = "0px"
login.style.color = "white"
login.style.display = "flex"
login.style.justifyContent = "center"
login.style.alignItems = "center"
login_a.style.height = "7vh"
login_a.href = "login.html"
login_a.style.textDecoration = "none"
login_a.appendChild(login)
nav.appendChild(login_a)

let hamburger = document.createElement('img')
let hamburger_a = document.createElement('a')
hamburger_a.id = "hamburger"

hamburger.src = "images/ham.png"
hamburger.style.height = "20px"
hamburger.style.width = "35px"
hamburger.style.marginTop = "2vh"
hamburger_a.style.marginLeft = "2vw"
hamburger_a.href = "ham.html"
hamburger_a.style.textDecoration = "none"
hamburger_a.appendChild(hamburger)
nav.appendChild(hamburger_a)
