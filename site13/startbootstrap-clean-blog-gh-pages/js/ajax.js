var postsDisplay ="" , posts, users;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        posts = JSON.parse(this.responseText);

    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
xhttp.send();

var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        users = JSON.parse(this.responseText);
    }
};
xhttp1.open("GET", "https://jsonplaceholder.typicode.com/users", false);
xhttp1.send();

function init() {
    console.log(users[1].name);
    console.log(posts);

    posts.forEach((element,index) => {
        element.userName = users[element.userId - 1].name;
        postsDisplay += `
        <div class="post-preview">
        <a href="post.html?p=${element.id}">
          <h2 class="post-title">
            ${element.title}
          </h2>
          <h3 class="post-subtitle">
          ${element.body}
          </h3>
        </a>
        <p class="post-meta">Posted by
          <a href="http://127.0.0.1:5500/user/${element.userId}">${element.userName}</a>
          on July 8, 2019</p>
      </div>
      <hr>
        `;
    });

    console.log(users);
    console.log(posts);


    document.getElementById("allposts").innerHTML = postsDisplay;

    // setTimeout(() => {
    //     console.log(users);
    //     console.log(posts);
    // }, 5000);

}

