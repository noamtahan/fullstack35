
// $(document).ready(function () {

    $(function () {


        // $("body").on("click", "p", function () {
        //     alert();
        // });
    
    
        $("#hereonly").on("click", "p", function () {
            alert("here only");
        });
    
        $("#hideallmyp").click(function () {
            // $("p").hide();
            var p = document.getElementsByTagName("p");
            for (let index = 0; index < p.length; index++) {             
                p[index].style.display = "none";
            }
        });

        $("#showallmyp").click(function () {
            // $("p").hide();
            var p = document.getElementsByTagName("p");
            for (let index = 0; index < p.length; index++) {             
                p[index].style.display = "none";
            }
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