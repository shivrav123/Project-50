let loadText = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let load = 0;

function loading() {
    load++;

    if(load>99) {
        clearInterval(int);
    }
    
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers/77913298#77913298

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let int = setInterval(loading, 50);