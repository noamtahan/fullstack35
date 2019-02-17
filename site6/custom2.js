function insertImg() {
    imgSrc = document.getElementById("imgSrc").value;
    document.getElementById("imgSrc").value = "";

    // document.getElementById("hereToAddImg").innerHTML =  '<div class="col-sm-6">' +
    // '<img class="img-fluid" src="https://www.w3schools.com/bootstrap4/img_chania.jpg" alt="Chania">' +
    // '</div>';

    // document.getElementById("hereToAddImg").innerHTML =  '<div class="col-sm-6"><img class="img-fluid" src="https://www.w3schools.com/bootstrap4/img_chania.jpg" alt="Chania"></div>';

    // document.getElementById("hereToAddImg").innerHTML =  `<div class="col-sm-6">
    // <img class="img-fluid" src="`+imgSrc+`" alt="Chania">
    // </div>` + document.getElementById("hereToAddImg").innerHTML;

    document.getElementById("hereToAddImg").innerHTML =  `<div class="col-sm-6">


    <img class="img-fluid" src="${imgSrc}" alt="Chania">



    </div>` + document.getElementById("hereToAddImg").innerHTML;

}
