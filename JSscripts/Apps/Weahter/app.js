

document.addEventListener("DOMContentLoaded", function() {
    let cityList = "https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22";
    getCityList(cityList);


})

function getCityList(list) {
    fetch(list)
    .then(resp => {
        if(resp.ok) {
            resp.json();
        }
        else {
            throw new Error("error");
        }
    })
    .then(list => {
        console.log(list);
    })
}