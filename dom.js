let mainElement = document.querySelector(".main");
let column = document.querySelector(".col-1");

console.log(mainElement);
console.log(mainElement.children[1]);
mainElement.children[1].style.background = "linear-gradient(135deg, #4d2800, #994f00)";

console.log(column.firstElementChild);

let newDiv = document.createElement("div");
console.log(newDiv);

newDiv.className = ".col-5";
let newDivText = document.createTextNode("Hello");

newDiv.appendChild(newDivText);

let addNewDiv = document.querySelector(".main");
let main = document.querySelector(".col-4");
addNewDiv.insertBefore(newDiv, main);

newDiv.style.fontSize = "40px";
newDiv.style.color = "dodgerblue";

