document.body.style.margin = "0px"
document.body.style.fontFamily = "Raleway"
document.body.style.color = "white"

let bg = document.getElementById("background")
bg.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('images/wallpaperflare.com_wallpaper.jpg')"
bg.style.height = "100%"
bg.style.width = "100%"
bg.style.objectFit = "fill"
bg.style.paddingTop = "20px"



let lab_test = document.getElementById("lab_test")
lab_test.innerHTML = "Lab Test Details"
lab_test.style.fontSize = "40px"
lab_test.style.color = "white"
lab_test.style.textAlign = "center"
lab_test.style.marginBottom = "20px"

let test_container = document.getElementById("test_container")
test_container.style.background = "rgba(1, 9, 34 , 0.8)"
test_container.style.height = "75vh "
test_container.style.width = "60vw"
test_container.style.margin = "auto"
test_container.style.padding = "10px"
test_container.style.padding = "10px"



let test_name = document.getElementById("test_name")
test_name.innerHTML = "Diabetes"
test_name.style.fontSize = "30px"
test_name.style.textAlign = "center"
test_name.style.marginTop = "15px"



let input_container = document.getElementById("input_container")
// input_container.style.border = "2px solid red"
input_container.style.width = "50vw"
input_container.style.height = "50vh"
input_container.style.margin = "auto"
input_container.style.marginBottom = "30px"
input_container.style.display = "flex"
// input_container.style.flexDirection = "column"



let first_name = document.getElementById("first_name")
first_name.innerHTML = "First Name"

let last_name = document.getElementById("last_name")
last_name.innerHTML = "Last Name"

let gender = document.getElementById("gender")
gender.innerHTML = "Gender"

let date = document.getElementById("date")
date.innerHTML = "Date"

let phone = document.getElementById("phone")
phone.innerHTML = "Phone Number"

let mail = document.getElementById("mail")
mail.innerHTML = "E-mail"

let val = document.getElementById("val")
val.innerHTML = "Enter the HbA1c Percentage in Lab Test"


class Patient {
    static index = 0
    constructor(first_name, last_name, gender, date, phone, mail, val) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.index = ++Patient.index
        this.gender = gender;
        this.date = date;
        this.phone = phone;
        this.mail = mail;
        this.val = val;
    }

    // getFirstName() {
    //     return this.first_name;
    // }

    // getindex() {
    //     return this.index;
    // }

    // getGender() {
    //     return this.gender;
    // }

    // getDate() {
    //     return this.marks2;
    // }

    // getPhone() {
    //     return this.Phone;
    // }
    // getMail() {
    //     return this.mail;
    // }
    // getVal() {
    //     return this.val;
    // }

}

let obj_array = [];

function enroll() {
    index = Patient.index
    first_name = document.getElementById("input-1").value
    last_name = document.getElementById("input-2").value;
    gender = document.getElementById("input-3").value;
    date = document.getElementById("input-4").value;
    phone = document.getElementById("input-5").value;
    mail = document.getElementById("input-6").value;
    val = document.getElementById("input-7").value;
    let ob = new Patient(first_name, last_name, gender, date, phone, mail, val);
    obj_array.push(ob);
    document.getElementsByName("form1")[0].reset();
    alert("Form Submitted successfully")
    alert("your registration Number:" + (index + 1));

}


// function showAll() {
//     for (let ob of obj_array) {
//         console.log("First name:" + ob.first_name + ",Last Name:" + ob.last_name + ",Gender" + ob.gender + ",Date:" + ob.date + ",Phone:" + ob.phone + ",Mail:" + ob.mail + ",Test value:" + ob.val);
//     }
// }



function showRoll() {
    let Given_index = prompt("Enter index");
    for (let ob of obj_array) {
        if (Given_index == ob.index)
            console.log("First name:" + ob.first_name + ",Last Name:" + ob.last_name + ",Gender" + ob.gender + ",Date:" + ob.date + ",Phone:" + ob.phone + ",Mail:" + ob.mail + ",Test value:" + ob.val);
    }
}

let input_1 = document.getElementById('input-1')
input_1.style.height="40px"
input_1.style.width="300px"
input_1.style.marginTop="10px"

let input_2 = document.getElementById('input-2')
input_2.style.height="40px"
input_2.style.width="300px"
input_2.style.marginTop="10px"

let input_3 = document.getElementById('input-3')
input_3.style.height="40px"
input_3.style.width="300px"
input_3.style.marginTop="10px"


let input_4 = document.getElementById('input-4')
input_4.style.height="40px"
input_4.style.width="300px"
input_4.style.marginTop="10px"


let input_5 = document.getElementById('input-5')
input_5.style.height="40px"
input_5.style.width="300px"
input_5.style.marginTop="10px"

let input_6 = document.getElementById('input-6')
input_6.style.height="40px"
input_6.style.width="300px"
input_6.style.marginTop="10px"


let input_7 = document.getElementById('input-7')
input_7.style.height="40px"
input_7.style.width="300px"
input_7.style.marginTop="10px"