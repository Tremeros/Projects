

document.addEventListener("DOMContentLoaded", function(){

    let githubUrl = "https://api.github.com/repos/fightplights/chode-stream/issues";
    githubFetch(githubUrl);
    

});




function githubFetch(url) {
    fetch(url)
    .then(resp => {
        if(resp.ok) {
          return  resp.json();
        } else {
            throw new Error('error');
        }
    })
    .then(git => {
        console.log(git);
    })
}

