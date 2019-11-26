

document.addEventListener("DOMContentLoaded", function() {
  let searchButton = document.querySelector(".btn");
 
searchButton.addEventListener("click", function(e) {

  let userInput = document.querySelector(".user-input");
  
  let user = userInput.value;
  let users = "https://api.github.com/users/" + user;
  getUser(users);
})
  


})


function getUser(url) {
    fetch(url)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("error");
        }
      })
      .then(users => {
        // searchUsers(users);
       searchUsers(users);
        console.log(users);
      });
  }





  function searchUsers(users) {
    document.querySelector(".user-name span").innerText = users.name;
    let reposLink = document.createElement("a");
    reposLink.setAttribute("href", users.html_url);
    reposLink.InnerText = "Repos";
    document.querySelector(".user-repos span").append(reposLink);
    reposLink.innerText = users.html_url;

    // let main = document.querySelector(".main");
    // let avatar = document.createElement("img");
    // avatar.setAttribute("src", users.avatar_url);
    // main.append(avatar);
  }