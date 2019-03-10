
// $(document).ready(function () {

$(function () {
    // $("body").on("click", "p", function () {
    //     alert();
    // });
    var counter = 0;
    $("#hereonly").on("click", "p", function () {
        alert("here only");
    });

    $("#hideallmyp").click(function () {
        $("p").hide();
    });

    $("#showallmyp").click(function () {
        $("p").show();
    });

    $("#toggleallmyp").click(function () {
        if(counter == 0) {
            $("p:hidden").show();
            counter++;
        } else {

        }
        $("p").toggle();
    });

    $("p").click(function () {
        alert();
    });



    $("#addp").click(function () {
        $("#allmyp").append("<p>Test allmyp</p>");
        $("#hereonly").append("<p>Test hereonly</p>");
        // alert();
    });


});