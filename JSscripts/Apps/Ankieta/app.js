

document.addEventListener("DOMContentLoaded", function(){

    // let githubUrl = "https://api.github.com/repos/fightplights/chode-stream/issues";
    // githubFetch(githubUrl);
    
    let img = document.querySelector(".image");
let canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
let div = document.querySelector(".nowa-ankieta");
div.append(canvas);
console.log(canvas);

});




// function githubFetch(url) {
//     fetch(url)
//     .then(resp => {
//         if(resp.ok) {
//           return  resp.json();
//         } else {
//             throw new Error('error');
//         }
//     })
//     .then(git => {
//         console.log(git);
//     })
// }


// function smallestNumber(array) {
//     let count = 1;
//     for(let i = 1; i <= array.length + 1; i++) {
//       if(array.indexOf(count) === -1) {
//           return count;
//       }
//       count ++;
//     }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(smallestNumber(arr));

