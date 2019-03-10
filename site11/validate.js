$(document).ready(function () {


    $("input[type=submit]").on("click" , function() {
        alert();
    })


console.log( $("input[required]").length );

$("<br><span>noam</span>").insertAfter("input[required]").css("color", "red");



$("input[required]").each(function (index)  {
    let id = $(this).attr("name");
    $(this).next().next("span").attr("id" , id +"err").hide();
    $(this).next().next("span").text(id + " is req!").hide();
})
















});
