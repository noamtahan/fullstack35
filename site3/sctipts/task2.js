/*
console.log(document.getElementsByTagName("h1")[0].innerText);  // Noam
document.getElementsByTagName("h1")[0].innerText = "Noam after";
console.log(document.getElementsByTagName("h1")[0].innerText);  // Noam after

console.log(document.getElementById("mainTitle").innerText);  // noam
document.getElementById("mainTitle").innerText = "Noam after after";
console.log(document.getElementById("mainTitle").innerText);  // Noam after after
*/

/*
document.getElementsByTagName("h1")[0].style.color = "red"



console.log(typeof document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1"));

console.log(typeof document.getElementsByTagName("h1")[0]);
console.log(document.getElementsByTagName("h1")[0] + "");

console.log(typeof document.getElementsByTagName("h1")[0].innerText);
console.log(document.getElementsByTagName("h1")[0].innerText);

console.log(typeof document.getElementsByTagName("h1")[0].style.color);
console.log(document.getElementsByTagName("h1")[0].style.color);
*/

var h1Tags = document.getElementsByTagName("h1"); // Arrays of Objects (h1 tags)
var mainTitle = document.getElementById("mainTitle");  // Object (id mainTitle element)
var footer = document.getElementById("footer");  // Object (id footer element)

console.log(h1Tags[0].innerText);  // Noam 
h1Tags[0].innerText = "Noam after"; 
console.log(h1Tags[0].innerText);  // Noam after

console.log(mainTitle.innerText);  // noam
mainTitle.innerText = "Noam after after";
console.log(mainTitle.innerText);  // Noam after after

footer.style.backgroundColor = "green"; 
footer.style.color = "orange"; 
footer.style.fontSize = "5px"; 

