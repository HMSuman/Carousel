const imgs = document.querySelector("#images");
const img = document.querySelectorAll("#images img");
let i = 0;

function run() {
    i++;
    if (i > img.length - 1) {
        i = 0;
    }
    imgs.style.transform = `translateX(${-i * 500}px)`;
}
setInterval(run, 2000);