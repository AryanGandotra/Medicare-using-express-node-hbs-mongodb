function template() {
    document.body.style.backgroundColor = "rgb(1, 9, 34)"
    document.body.style.margin = "0px"
    document.body.style.fontFamily = "Raleway"
    document.body.style.color = "white"

    var outer_div = document.createElement('div');
    outer_div.id = 'background';
    outer_div.style.width = "98vw"
    outer_div.style.marginTop = "20px"
    outer_div.style.margin = "auto"
    document.body.appendChild(outer_div);

    var inner_div_1 = document.createElement('div');
    inner_div_1.innerHTML = 'Test Results';
    inner_div_1.style.fontSize = "30px"
    inner_div_1.style.textAlign = "center"
    inner_div_1.style.marginTop = "10vh"
    outer_div.appendChild(inner_div_1);


    var inner_div_2 = document.createElement('div');
    inner_div_2.style.width = "70vw"
    inner_div_2.style.marginLeft = "auto"
    inner_div_2.style.marginRight = "auto"
    inner_div_2.style.marginTop = "20px"
    inner_div_2.style.padding = "30px"
    inner_div_2.style.textAlign = "center"
    inner_div_2.style.background = "rgba(255, 255, 255, .2)"
    inner_div_2.style.backdrop = "blur(10px);"
    inner_div_2.style.borderRadius = "20px"
    outer_div.appendChild(inner_div_2);



    let inner_div_3 = document.createElement('div')
    inner_div_3.innerHTML = "Test Name : Diabetes"
    inner_div_3.style.fontSize = "20px"
    inner_div_3.style.textAlign = "left"
    inner_div_3.style.marginLeft = '30px'
    inner_div_3.style.marginTop = '50px'
    inner_div_2.appendChild(inner_div_3);


    let inner_div_4 = document.createElement('div')
    inner_div_4.id = "inner_div_4"
    inner_div_4.style.fontSize = "20px"
    inner_div_4.style.textAlign = "left"
    inner_div_4.style.marginTop = '20px'
    inner_div_4.style.marginLeft = '30px'
    inner_div_2.appendChild(inner_div_4);

    let inner_div_5 = document.createElement('div')
    inner_div_5.id = "test_result"
    inner_div_5.style.width = "66vw"
    inner_div_5.style.margin = "auto"
    inner_div_5.style.marginTop = "20px"
    // inner_div_5.style.border = "2px solid yellow"
    inner_div_5.style.fontSize = "20px"
    inner_div_2.appendChild(inner_div_5);


    let inner_div_5_1 = document.createElement('div')
    let inner_div_5_2 = document.createElement('div')
    let inner_div_5_3 = document.createElement('div')
    let inner_div_5_4 = document.createElement('div')
    let inner_div_5_5 = document.createElement('div')
    let inner_div_5_6 = document.createElement('div')
    let inner_div_5_7 = document.createElement('div')

    inner_div_5_1.id = "inner_div_5_1"
    inner_div_5_2.id = "inner_div_5_2"
    inner_div_5_3.id = "inner_div_5_3"
    inner_div_5_4.id = "inner_div_5_4"
    inner_div_5_5.id = "inner_div_5_5"
    inner_div_5_6.id = "inner_div_5_6"
    inner_div_5_7.id = "inner_div_5_7"

    inner_div_5_1.style.display = "flex"
    inner_div_5_2.style.display = "flex"
    inner_div_5_3.style.display = "flex"
    inner_div_5_4.style.display = "flex"
    inner_div_5_5.style.display = "flex"
    inner_div_5_6.style.display = "flex"
    inner_div_5_7.style.display = "flex"

    inner_div_5_1.style.marginBottom = "20px"
    inner_div_5_2.style.marginBottom = "20px"
    inner_div_5_3.style.marginBottom = "20px"
    inner_div_5_4.style.marginBottom = "20px"
    inner_div_5_5.style.marginBottom = "20px"
    inner_div_5_6.style.marginBottom = "20px"
    inner_div_5_7.style.marginBottom = "20px"

    inner_div_5_1.style.justifyContent = "space-between"
    inner_div_5_2.style.justifyContent = "space-between"
    inner_div_5_3.style.justifyContent = "space-between"
    inner_div_5_4.style.justifyContent = "space-between"
    inner_div_5_5.style.justifyContent = "space-between"
    inner_div_5_6.style.justifyContent = "space-between"
    inner_div_5_7.style.justifyContent = "space-between"


    inner_div_5.appendChild(inner_div_5_1);
    inner_div_5.appendChild(inner_div_5_2);
    inner_div_5.appendChild(inner_div_5_3);
    inner_div_5.appendChild(inner_div_5_4);
    inner_div_5.appendChild(inner_div_5_5);
    inner_div_5.appendChild(inner_div_5_6);
    inner_div_5.appendChild(inner_div_5_7);

    let table = document.createElement('table')
    var row_1 = table.insertRow(0);
    var cell11 = row_1.insertCell(0);
    var cell12 = row_1.insertCell(1);
    cell11.innerHTML = "Reference Group";
    cell12.innerHTML = "HbA1c (in %)";
    cell11.style.border = "2px solid black"
    cell11.style.height = "60px"
    cell11.style.width = "500px"
    cell12.style.border = "2px solid black"
    cell12.style.width = "500px"

    var row_2 = table.insertRow(1);
    var cell21 = row_2.insertCell(0);
    var cell22 = row_2.insertCell(1);
    cell21.innerHTML = "Non Diabetic Adults >=18 years";
    cell22.innerHTML = "4.0 - 5.6";
    cell21.style.border = "2px solid black"
    cell22.style.border = "2px solid black"
    cell21.style.height = "40px"

    var row_3 = table.insertRow(2);
    var cell31 = row_3.insertCell(0);
    var cell32 = row_3.insertCell(1);
    cell31.innerHTML = "At Risk (Prediabetes)";
    cell32.innerHTML = "5.7 - 6.4";
    cell31.style.border = "2px solid black"
    cell32.style.border = "2px solid black"
    cell31.style.height = "40px"

    var row_4 = table.insertRow(3);
    var cell41 = row_4.insertCell(0);
    var cell42 = row_4.insertCell(1);
    cell41.innerHTML = "Diagnosing Diabetes";
    cell42.innerHTML = ">= 6.5";
    cell41.style.border = "2px solid black"
    cell42.style.border = "2px solid black"
    cell41.style.height = "40px"

    var row_5 = table.insertRow(4);
    var cell51 = row_5.insertCell(0);
    var cell52 = row_5.insertCell(1);
    cell51.innerHTML = "Therapeutic Goals for Glycemic control";
    cell52.innerHTML = "Goal of Therapy : < 7.0 Action Suggested : > 8.0";
    cell51.style.border = "2px solid black"
    cell52.style.border = "2px solid black"
    cell51.style.height = "40px"

    table.style.border = "2px solid black"
    table.style.textAlign = "center"
    table.style.margin = "auto"
    table.style.marginTop = "20px"

    inner_div_2.appendChild(table);


    let remove = document.createElement('div')
    remove.innerHTML = "Remove"
    remove.style.height = "40px"
    remove.style.width = "100px"
    remove.style.backgroundColor = "red"
    remove.style.borderRadius = "5px"
    remove.style.display = "flex"
    remove.style.justifyContent = "center"
    remove.style.alignItems = "center"
    remove.style.margin = "auto"
    remove.style.marginTop = "30px"
    remove.style.cursor="pointer"
    inner_div_2.appendChild(remove)


    remove.onclick = function () {
        f9()
    }

    function f9() {    
        outer_div.innerHTML= " ";
    }
}
function show() {
    let Given_index = prompt("Enter index");
    for (let ob of obj_array) {
        if (Given_index == ob.index) {
            let details = document.getElementById("test_result")
            let inner_div_5_1 = document.getElementById("inner_div_5_1")
            let inner_div_5_2 = document.getElementById("inner_div_5_2")
            let inner_div_5_3 = document.getElementById("inner_div_5_3")
            let inner_div_5_4 = document.getElementById("inner_div_5_4")
            let inner_div_5_5 = document.getElementById("inner_div_5_5")
            let inner_div_5_6 = document.getElementById("inner_div_5_6")
            let inner_div_5_7 = document.getElementById("inner_div_5_7")


            inner_div_5_1.innerHTML = "Patient FirstName: "
            inner_div_5_2.innerHTML = "Patient LastName: "
            inner_div_5_3.innerHTML = "Patient Gender: "
            inner_div_5_4.innerHTML = "Date of Test:  "
            inner_div_5_5.innerHTML = "Patient Phone Number: "
            inner_div_5_6.innerHTML = "Patient Email: "
            inner_div_5_7.innerHTML = "HbA1c Percentage from the Lab Test: "

            let inner_div_4 = document.getElementById("inner_div_4")

            inner_div_5_1.innerHTML += ob.first_name
            inner_div_5_2.innerHTML += ob.last_name
            inner_div_5_3.innerHTML += ob.gender
            inner_div_5_4.innerHTML += ob.date
            inner_div_5_5.innerHTML += ob.phone
            inner_div_5_6.innerHTML += ob.mail
            inner_div_5_7.innerHTML += ob.val

            inner_div_4.innerHTML = "You fall under the classification: "
            if (4 < ob.val & ob.val < 5.6) {
                inner_div_4.innerHTML += "Non Diabetic Adults >=18 years"
            }
            else if (5.7 < ob.val & ob.val < 6.4) {
                inner_div_4.innerHTML += "At Risk (Prediabetes)"
            }
            else if (ob.val >= 6.5) {
                inner_div_4.innerHTML += "Diagnosing Diabetes"
            }
        }
    }
}

