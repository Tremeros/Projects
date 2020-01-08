let button = document.querySelector(".btn");
let main = document.querySelector(".main");

button.addEventListener("click", function(e) {
    e.preventDefault();
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
          console.log(xhttp.responseUrl);
        }
    }
    xhttp.open("GET", "http://example.com/test", true);
    xhttp.send();
})