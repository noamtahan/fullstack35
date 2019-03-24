function loadPosts() {

    var url = "https://jsonplaceholder.typicode.com/posts/"

    $.get(url, function (data, status) {
        if (status == "success") {            
            response = data;
            // console.log(response);
            response.forEach(element => {
                // console.log(element);
                var url = "https://jsonplaceholder.typicode.com/users/" + element.userId;
                // console.log(url);

                $.get(url, function (data, status) {
                    if (status == "success") {
                        element.userInfo = data;
                        document.getElementById("blog").innerHTML += `      
                        <h2>${element.title}</h2>
                        <h5>Writtrn by <a data-userId="${element.userInfo.id}" href="#" data-toggle="modal" data-target="#userInfo"  >${element.userInfo.name}</a>, Sep 2, 2017</h5>
                        <div class="fakeimg">Fake Image</div>
                        <p><a href="post.html?id=${element.id}">read more ... </a></p>
                        <p>${element.body}</p>`;
                    }

                });
            });

        }
    });
}

function getIdFromUrl() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    return id;

}

function loadPost() {

    var id = getIdFromUrl();

    var url = "https://jsonplaceholder.typicode.com/posts/" + id;
    var commentsUrl = "https://jsonplaceholder.typicode.com/comments?postId=" + id;

    $.get(url, function (data, status) {
        if (status == "success") {
            $.get(commentsUrl, function (data, status) {
                if (status == "success") {
                    response = data;
                    console.log(response);


                    response.forEach(element => {
                        $("#comments").append(`      
                        <h2>${element.name}</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <p>${element.body}</p>`);
                    });


                }
            });

            response = data;
            console.log(response);
            $("#blog").prepend(`      
                    <h2>${response.title}</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div class="fakeimg">Fake Image</div>
                    <p></p>
                    <p>${response.body}</p>`);
        }
    });
}
