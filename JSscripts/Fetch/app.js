
let main = document.querySelector(".main");
let button = document.querySelector(".btn");
let file = "https://jsonplaceholder.typicode.com/users";

function getText(file) {
    fetch(file)
    .then(file => {
       return file.json();
    })
    .then(resp => {
        console.log(resp);
        resp.forEach(el => {
            let username = document.createElement("h1");
            let name = document.createElement("span");
            let usermail = document.createElement("span");
            username.innerText = el.username;
            main.append(username);
            name.innerText = el.name;
            main.append(name);
            usermail.innerText = el.email;
            main.append(usermail);
        })
    })
}

button.addEventListener("click", function(e) {
    e.preventDefault();
    getText(file);
    console.log(file);
})