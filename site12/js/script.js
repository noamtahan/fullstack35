
$(document).ready(function () {

    $("tbody").sortable();




    $("tr").each(function (index) {
        if (index == 0) {
            $(this).prepend(`<th>ID</th>`);
            $(this).append(`<th>Gender</th>`);
            $(this).append(`<th>Actions</th>`);
        } else {
            $(this).prepend(`<td>${index}</td>`);
            $(this).append(`
            <td>
                <select class="form-control" id="gender${index}">
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </td>
        `);

            $(this).append(`
            <td>
                <button type="button" class="btn btn-warning editrow">Edit</button>
                <button type="button" class="btn btn-danger deleterow">Delete</button>
            </td>    
        `);

        }
    });

    $("body").on("click" , ".deleterow", function () {
        // $(this).parent().parent().remove();     
        $(this).parents("tr").remove();     
        // console.log($(this));
            

    });
    $("#btn-add-top").click(function () {
        // $(this).parent().parent().remove();     
        // $("tbody").append($("tbody tr:last-child").clone());     
        // console.log($(this));
    });

    $("#insertDataToTable").click(function () {
        var tr = $("tbody tr:last-child").clone();
        tr.find("td")[0].innerText = $("tbody tr").length +1;
        tr.find("td")[1].innerText = $("#fullname").val();
        tr.find("td")[2].innerText = $("#age").val();
        $("#fullname").val("");
        $("#age").val("");
        $("tbody").append(tr);     
        $('#addModal').modal('hide')



    });

    // $("[id^=btn-save]").click(function(){
    $("#btn-save-top, #btn-save-bottom").click(function () {
        var tableData = [];
        $("tbody tr").each(function (index) {
            tableData[index] = {};
            tableData[index].id = $(this).find( "td" )[0].innerText;
            tableData[index].fullName = $(this).find( "td" )[1].innerText;
            tableData[index].age = $(this).find( "td" )[2].innerText;
            tableData[index].gender = $(this).find( "select option:selected").text();
            // console.log($(this).find( "td" )[1].innerText);
            // console.log($(this).find( "td" )[2].innerText);
            // console.log($(this).find( "td" )[3].innerText);
            // console.log($(this));
            
        });
        console.log(tableData);
        // localStorage.tableData = JSON.stringify(tableData);
        localStorage.setItem("tableData", JSON.stringify(tableData));
           
    })

    // $("tr").each(function(index){
    //     if (index == 0) {
    //         $(this).append(`<th>Gender</th>`);
    //     } else {
    //         $(this).append(`
    //             <td>
    //                 <div class="form-group">
    //                     <select class="form-control" id="gender">
    //                         <option></option>
    //                         <option>Male</option>
    //                         <option>Female</option>
    //                     </select>
    //                 </div>
    //             </td>
    //         `);
    //     }
    // });








    // $("td:first-child").each(function(index){
    //     $(this).html(index+1);
    // });

    // $("td:first-child").html("1");
});
