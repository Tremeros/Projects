let hero = document.querySelector(".hero");
let btn = document.querySelector(".btn");




window.addEventListener("keydown", function(e) {
   e.preventDefault();
   let press = e.key;
   if(press == "s") {
    hero.classList.add("moveDown");
   } else if(press == "w") {
       hero.classList.add("moveUp");
   } else if(press == "a") {
       hero.classList.add("moveLeft");
   } else if(press == "d") {
       hero.classList.add("moveRight");
   }
})



window.addEventListener("keyup", function(e) {
    e.preventDefault();
        let downPosition = hero.offsetTop;
        let rightPosition = hero.offsetLeft;
        hero.style.top = downPosition + "px";
        hero.style.left = rightPosition + "px";
        hero.classList.remove("moveDown", "moveUp", "moveLeft", "moveRight");
        
 })

