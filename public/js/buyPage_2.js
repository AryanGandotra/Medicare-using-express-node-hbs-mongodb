async function loadContent(){
    let request = new Request("json/buyPageDesc.json")
    let response = await fetch(request)

    let json_obj = await response.json()
    loadheading1(json_obj)
    loadDesc1(json_obj)
    loadDesc2(json_obj)
    loadDesc3(json_obj)
    loadheading2(json_obj)
    loadDesc4(json_obj)
    loadheading3(json_obj)
    loadDesc5(json_obj)
}


let header1 = document.querySelector(".desc_heading1")
let discription1 = document.querySelector(".descContainer1")
let discription2 = document.querySelector(".descContainer1")
let discription3 = document.querySelector(".descContainer1")

function loadheading1(json_obj)
{
    let head1 = document.createElement("h2")
    head1.textContent = json_obj['heading1']
    header1.appendChild(head1)

}

function loadDesc1(json_obj)
{
    let desc1 = document.createElement("p")
    desc1.textContent = json_obj['desc1']
    discription1.appendChild(desc1)

}

function loadDesc2(json_obj)
{
    let desc2 = document.createElement("p")
    desc2.textContent = json_obj['desc2']
    discription2.appendChild(desc2)

}

function loadDesc3(json_obj)
{
    let desc3 = document.createElement("p")
    desc3.textContent = json_obj['desc3']
    discription3.appendChild(desc3)

}


let header2 = document.querySelector(".desc_heading2")
let discription4 = document.querySelector(".descContainer2")

function loadheading2(json_obj)
{
    let head2 = document.createElement("h2")
    head2.textContent = json_obj['heading2']
    header2.appendChild(head2)

}

function loadDesc4(json_obj)
{
    let desc4 = document.createElement("p")
    desc4.textContent = json_obj['desc4']
    discription4.appendChild(desc4)

}


let header3 = document.querySelector(".desc_heading3")
let discription5 = document.querySelector(".descContainer3")

function loadheading3(json_obj)
{
    let head3 = document.createElement("h2")
    head3.textContent = json_obj['heading3']
    header3.appendChild(head3)

}

function loadDesc5(json_obj)
{
    let desc5 = document.createElement("p")
    desc5.textContent = json_obj['desc5']
    discription5.appendChild(desc5)

}



loadContent()