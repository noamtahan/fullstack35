
var index = 0;

// if(localStorage.getItem("names") == null) {
//     namesFromStarage = [];
// } else {
//     namesFromStarage =localStorage.getItem("names");
// }

var namesFromStarage = localStorage.getItem("names") == null ? JSON.stringify([]) : localStorage.getItem("names");

var namesArr = JSON.parse(namesFromStarage);
var output ="";

for (var index = 0; index < namesArr.length; index++) {
    output += "<li data-id='" + index + "'>"  + namesArr[index].name  + "</li>";
}

document.getElementById("res").innerHTML = output;


lists = document.getElementsByTagName("li");

// for (var index = 0; index < lists.length; index++) {
//     lists[index].onclick = function() {
//         id = this.getAttribute("data-id");

//     };
    
// }

for (var index = 0; index < lists.length; index++) {
    lists[index].onclick = deleteFromLocalName;
}





// namesArr.forEach(element => {
//     alert(element.name)
// });





// var namesStorage = localStorage.getItem("name");

function insertToLocalName() {
    name = document.getElementById("name").value;
    newName = {
        'id': index,
        'name': name
    }
    namesArr.push(newName);
    index++;

    localStorage.setItem("names", JSON.stringify(namesArr));
    gilad(); 

}

// document.getElementById("name").value = localStorage.getItem("name");

function deleteFromLocalName() {
    var namesFromStarage = localStorage.getItem("names") == null ? JSON.stringify([]) : localStorage.getItem("names");
    var namesArr = JSON.parse(namesFromStarage);
    var idToDelete = document.getElementById("deleteId").value
    namesArr.splice(idToDelete, 1);
    localStorage.setItem("names", JSON.stringify(namesArr));
    gilad(); 


}

function deleteFromLocalName() {
    id = this.getAttribute("data-id");
    var namesFromStarage = localStorage.getItem("names") == null ? JSON.stringify([]) : localStorage.getItem("names");
    var namesArr = JSON.parse(namesFromStarage);
    namesArr.splice(id, 1);
    localStorage.setItem("names", JSON.stringify(namesArr));   
    gilad(); 
}


function gilad() {
    output ="";
    namesFromStarage = localStorage.getItem("names") ;
    var namesArr = JSON.parse(namesFromStarage);

    for (var index = 0; index < namesArr.length; index++) {
        output += "<li data-id='" + index + "'>"  + namesArr[index].name  + "</li>";
    }
    
    document.getElementById("res").innerHTML = output;
    for (var index = 0; index < lists.length; index++) {
        lists[index].onclick = deleteFromLocalName;
    }
    
    

}