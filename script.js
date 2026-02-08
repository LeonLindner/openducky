var textarea;
var final = document.getElementById("final");

function loop() {
    textarea = document.getElementById("text");
    textarea.focus();
    final.innerHTML =
        marked.parse(textarea.value);
    setTimeout(loop, 10);
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("loaded");
    loop();
});
