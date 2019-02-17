var AvshalomTrim = document.getElementsByTagName("tr");



for (var index = 1; index < AvshalomTrim.length; index++) {
    if(index%2 == 1) {
        // AvshalomTrim[index].style.color = "red";    
        AvshalomTrim[index].classList.add("odd");   
        AvshalomTrim[index].classList.add("noam");   
        AvshalomTrim[index].classList.add("tahan");  
        AvshalomTrim[index].className = "odd";
        AvshalomTrim[index].setAttribute("id", "democlass");
        AvshalomTrim[index].setAttribute("title", "noam noam noam");

        // AvshalomTrim[index].style.border = "solid 1px red"    
 
    } else {
        AvshalomTrim[index].classList.add("even");    
        // AvshalomTrim[index].style.border = "solid 1px red"    

    }
}


var AvshalomTable = document.getElementsByTagName("table");

AvshalomTable[0].style.border = "solid 1px red"    
