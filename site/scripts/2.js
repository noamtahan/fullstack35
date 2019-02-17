console.log("start");

var dayNum = parseInt(prompt("Please insert day number to parse (1-7) :"));
// var day = "Error";

switch (dayNum) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
       day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
        day = "Saturday";
    default:
        day = "Not a real day bnamber";
  }

  alert(day);
  



// if(dayNum == 1) {
//     alert("Sunday");
// } else if(dayNum == 2) {
//     alert("Monday");
// } else if(dayNum == 3) {
//     alert("Tuesday");
// } else if(dayNum == 4) {
//     alert("Wednesday");
// } else if(dayNum == 5) {
//     alert("Thursday");
// } else if(dayNum == 6) {
//     alert("Friday");
// } else if(dayNum == 7) {
//     alert("Saturday");
// } else {
//     alert("Error!!!!!!!!!!!!!!!!!!!!!!");
// }
















console.log(1==1.0000000);      // true
console.log(1==01);             // true
console.log("Noam"=="Noam");    // true
console.log("NOAM"=="noam");    // false
console.log("123"==123);        // true
console.log("123"===123);       // false

console.log(typeof "Noam");
console.log(typeof 123);
console.log(typeof "true");
console.log(typeof true);

console.log(isNaN(parseInt("Noam")));

// a = parseFloat("Noam");
// console.log(typeof a);





console.log("end");