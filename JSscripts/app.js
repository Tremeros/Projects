// // function sayHello(object) {
 
// //    if(this.hasOwnProperty("name") == true){
// //        console.log("Hello " + object.name);
// //    } else {
// //        console.log("Hello");
// //    }
// // }
// // let paweł = {
// //     name: "Paweł",
// //     age: 36,
// // }

// // sayHello(paweł);


// // function randomNumber(num) {

// //     return Math.floor(Math.random() * num);
// // }

// // console.log(randomNumber(6));


// Random number

// // function randomIndex(array) {
// //     return array[randomNumber(array.length)];       
// // }

// // let students = ["John", "Bill", "Emma", "Stella", "Rob"]

// // console.log(randomIndex(students));

// // function flattenAndSort(array) {
// //     let arr = [];
// //     let newArray = [];
  
// //     for(let i=0; i<array.length; i++){
// //         array[i].sort(function(a,b){
// //             return a-b;
// //           });
// //           arr.push(array[i]);
// //     }
// //     return arr.join();
  
 

    
    
     
// //   }

// //   console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));


// // function validatePIN(pin) {

// //     for(let i=0; i<pin.length; i++) {
// //         if (parseInt(pin[i]) === NaN) {
// //             return false;
// //         }
// //     }

  
// //       if (parseInt(pin) < 0) {
// //     return false;
// //     } else if (pin.length === 4 || pin.length === 6) {
// //       return true;
// //     } else {
// //     return false;
// //     }
// // }

// // console.log(validatePIN("-1.234"));

// function ankieta(num1, num2, num3, num4){
//     let count = num1 + num2 + num3 + num4;

    // let percent1 = Math.round((num1 * 100) / count);
    // let second1 = 100 - percent1;
    // let elem1 = document.querySelector("div.bar1");
    // let tekst1 = document.querySelector("div.bar1 span");
    // elem1.innerHTML = percent1 + "%";
    // elem1.style.backgroundImage = "linear-gradient(90deg, orangered #{percent1}%, dodgerblue #{percent2}%)";
    
  
//     let percent2 = Math.round((num2 * 100) / count);
//     let second2 = 100 - percent2;
//     let elem2 = document.querySelector("div.bar2");
//     let tekst2 = document.querySelector("div.bar2 span");
//     elem2.innerHTML = percent2 + "%";

//     let percent3 = Math.round((num3 * 100) / count);
//     let second3 = 100 - percent3;
//     let elem3 = document.querySelector("div.bar3");
//     let tekst3 = document.querySelector("div.bar3 span");
//     elem3.innerHTML = percent3 + "%";

//     let percent4 = Math.round((num4 * 100) / count);
//     let second4 = 100 - percent4;
//     let elem4 = document.querySelector("div.bar4");
//     let tekst4 = document.querySelector("div.bar4 span");
//     elem4.innerHTML = percent4 + "%";

   

// }




// ankieta(22, 345, 87, 4); 

// let sqr = document.querySelector("div.square1");
// sqr.style.backgroundColor = "green";


  
// function randomNumber() {      
//     return Math.floor(Math.random() * 4);
//    }
  

// function changeSquare() {
    
//   let nmr = randomNumber();
   

//   switch(nmr) {


//     case 0:
//         let sqr1 = document.querySelector("div.square-1");
//         sqr1.style.backgroundColor = "green";
//         setTimeout(function() {sqr1.style.backgroundColor = "white";}, 500);
//         break;
//     case 1:
//         let sqr2 = document.querySelector('div.square-2');
//         sqr2.style.backgroundColor = "green";
//         setTimeout(function() {sqr2.style.backgroundColor = "white";}, 500);
//         break;
//     case 2:
//         let sqr3 = document.querySelector('div.square-3');
//         sqr3.style.backgroundColor = "green";
//         setTimeout(function() {sqr3.style.backgroundColor = "white";}, 500);
//         break;
//     case 3:
//         let sqr4 = document.querySelector('div.square-4');
//         sqr4.style.backgroundColor = "green";
//         setTimeout(function() {sqr4.style.backgroundColor = "white";}, 500);
//         break;
//   }

//     setTimeout(function() {
//         sqr1.style.backgroundColor = "white";
//         sqr2.style.backgroundColor = "white";
//         sqr3.style.backgroundColor = "white";
//         sqr4.style.backgroundColor = "white";
//     }, 500);
 
// }


//  function colors() {
//      let interval = setInterval(changeSquare, 1000);
     
//  }

//  colors();



var comments = [
    {title: "First comment", body: "This is first comment"},
    {title: "Seccond comment", body: "This is second comment"}
];

function addComments() {
    setTimeout(() => {
     let output = "";
     comments.forEach(comment => {
         output += `<h1>${comment.title}</h1>` + `<p>${comment.body}</p>`;
     });
     document.body.innerHTML = output;
    }, 1000);
}



function createComment(comment, callback) {
    setTimeout(() => {
      comments.push(comment);
      callback();
    }, 2000);
}

createComment({title: "Third comment", body: "This website sucks!!!"}, addComments);

