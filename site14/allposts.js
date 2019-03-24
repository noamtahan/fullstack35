function loadDoc() {

    var url = "https://jsonplaceholder.typicode.com/posts/"
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
      if (this.status == 200) {
      //   document.getElementById("demo").innerHTML = this.responseText;
          response = JSON.parse(this.response);
          console.log(response);
          response.forEach(element => {
              document.getElementById("blog").innerHTML += `      
              <h2>${element.title}</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div class="fakeimg">Fake Image</div>
              <p><a href="post.html?id=${element.id}">read more ... </a></p>
              <p>${element.body}</p>`;
          });
          
          // output = `
          // <h1>${response.title}</h1>
          // <p>${response.body}</p>
          // `;
          // document.getElementById("demo").innerHTML = output;
  
  
      } else 
        document.getElementById("blog").innerHTML = "lo lo lo!!!";
      }
    };
    xhttp.open("GET", url , true);
    xhttp.send();
  }
  function loadPost() {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    // console.log(id);
    // console.log(window.location.href);
    // document.write(id);


    var url = "https://jsonplaceholder.typicode.com/posts/" + id;
    var commentsUrl = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
    
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
      if (this.status == 200) {
      //   document.getElementById("demo").innerHTML = this.responseText;
          response = JSON.parse(this.response);
          console.log(response);
            document.getElementById("blog").innerHTML += `      
            <h2>${response.title}</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div class="fakeimg">Fake Image</div>
            <p></p>
            <p>${response.body}</p>`;
          
          // output = `
          // <h1>${response.title}</h1>
          // <p>${response.body}</p>
          // `;
          // document.getElementById("demo").innerHTML = output;
  
  
      } else 
        document.getElementById("blog").innerHTML = "lo lo lo!!!";
      }
    };
    xhttp.open("GET", url , true);
    xhttp.send();


    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
      if (this.readyState == 4) {
      if (this.status == 200) {
      //   document.getElementById("demo").innerHTML = this.responseText;
          response = JSON.parse(this.response);
          console.log(response);           
      } else 
        document.getElementById("blog").innerHTML = "lo lo lo!!!";
      }
    };
    xhttp1.open("GET", commentsUrl , true);
    xhttp1.send();



  }
  