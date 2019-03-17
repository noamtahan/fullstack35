$(document).ready(function () {
    var dataTableFromLocalStorage = localStorage.getItem("tableData") ? localStorage.getItem("tableData") : null;

    if (dataTableFromLocalStorage) {
        var dataTableFromLocalStorageArr = JSON.parse(dataTableFromLocalStorage);

        dataTableFromLocalStorageArr.forEach(function (element) {
            $("tbody").append(`<tr><td>${element.fullName}</td><td>${element.age}</td></tr>`);
        });
    }

    $("tbody").sortable();




    $("#tableDataAll tr").each(function (index) {

        // var dataTableFromLocalStorage = localStorage.getItem("tableData");

        // var dataTableFromLocalStorageArr = JSON.parse(dataTableFromLocalStorage);

        if (index == 0) {
            $(this).prepend(`<th>ID</th>`);
            $(this).append(`<th>Gender</th>`);
            $(this).append(`<th>Actions</th>`);
        } else if (index == $("#tableDataAll tr").length - 1) {

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
            $("#gender" + index).val(dataTableFromLocalStorageArr[index - 1].gender);

            $(this).append(`
            <td>
                <button type="button" class="btn btn-warning editrow">Edit</button>
                <button type="button" class="btn btn-danger deleterow">Delete</button>
            </td>    
        `);

        }
    });

    $("body").on("click", ".deleterow", function () {
        $(this).parents("tr").remove();
    });

    $("#insertDataToTable").click(function () {
        // var tr = $("tbody tr:last-child").clone();
        var tr = $("tfoot tr").clone();
        if ($("tbody tr").length == 0) {
            i = 1
        } else {
            i = $("tbody tr").length + 1;
        }
        tr.find("td")[0].innerText = i;
        tr.find("td")[1].innerText = $("#fullname").val();
        tr.find("td")[2].innerText = $("#age").val();
        $("#fullname").val("");
        $("#age").val("");
        $("#tableDataAll tbody").append(tr);
        $('#addModal').modal('hide')



    });

    $("#btn-save-top, #btn-save-bottom").click(function () {
        var tableData = [];
        $("tbody tr").each(function (index) {
            tableData[index] = {};
            tableData[index].id = $(this).find("td")[0].innerText;
            tableData[index].fullName = $(this).find("td")[1].innerText;
            tableData[index].age = $(this).find("td")[2].innerText;
            tableData[index].gender = $(this).find("select option:selected").text();

        });
        console.log(tableData);

        localStorage.setItem("tableData", JSON.stringify(tableData));

    })

});
