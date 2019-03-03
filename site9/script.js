arr = [1,2,3,4,5,6,7,8,9,120];
var arrObj = [
    { id:'0343797979', name: "Alfi1"},
    { id:'0341237979', name: "Alfi2"},
    { id:'0323497979', name: "Alfi3"},
    { id:'0334597979', name: "Alfi4"},
    { id:'0345697979', name: "Alfi5"},
]

var output ="";

function creatElementim() {
    var btn = document.createElement("BUTTON");
    var span = document.createElement("SPAN");
    var text = document.createTextNode("CLICK ME");
    
    btn.appendChild(span);
    span.appendChild(text);
    document.body.appendChild(btn);
    
    /*
    var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
    var att = document.createAttribute("class");       // Create a "class" attribute
    att.value = "democlass";                           // Set the value of the class attribute
    h1.setAttributeNode(att);                          // Add the class attribute to <h1>
    */
   
  }
  

for (let index = 0; index < arrObj.length; index++) {
    console.log(arrObj[index].name);
    if(index ==  arrObj.length - 1) {
        output +="<div style='animation: noamFadeIn 10s;'>";
    } else {
        output +="<div>";
    }
        output += `<div onmouseover="fafa(this)" noam-haaluf="${index}" onclick="dada(this)"><span class="deleteme">X</span>${arrObj[index].name} is with id #${arrObj[index].id}</div>`;
    output += "</div>"
}

document.getElementById("arr").innerHTML = output;

console.log(arrObj);

function dada(d) {
     ind = d.getAttribute("noam-haaluf");
    var removed = arrObj.splice(ind,1);
    document.getElementById("arr").innerHTML = "";
    console.log(d.getAttribute("noam-haaluf"));
    output = "";

    for (let index = 0; index < arrObj.length; index++) {
        console.log(arrObj[index].name);
        if(index ==  arrObj.length - 1) {
            output +="<div style='animation: noamFadeIn 10s;'>";
        } else {
            output +="<div>";
        }
            output += `<div onmouseover="fafa(this)" noam-haaluf="${index}" onclick="dada(this)"><span class="deleteme">X</span>${arrObj[index].name} is with id #${arrObj[index].id}</div>`;
        output += "</div>"
    }
    
    document.getElementById("arr").innerHTML = output;
}

function fafa(elem) {
    deletButton = elem.innerHTML;
    console.log(deletButton);
    
}