const farbeAuswahlen = document.querySelector("#farbeAuswahlen");
const button = document.querySelector("#button");

button.addEventListener("click", (event) => {
event.preventDefault();

const body = document.querySelector("body");
let color = (farbeAuswahlen.value).toLowerCase();

body.style.backgroundColor = color.replace(" ", "");
})