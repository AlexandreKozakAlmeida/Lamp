const turnOn = document.querySelector('#on');
const turnOff = document.querySelector('#off');
const title = document.querySelector("#header")
const background = document.querySelector("body");

turnOn.addEventListener('click', lightOn);
turnOff.addEventListener('click', lightOff);

function lightOn() {
    background.classList.remove('disable');
    background.classList.add("active");

   title.style.color = "#000000"
};

function lightOff() {
    background.classList.remove('active');
    background.classList.add('disable');

    title.style.color = "#ffffff"
};
