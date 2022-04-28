var toggle = document.getElementById("toggle");
var inst = document.getElementsByClassName("transform")[0];
console.log(toggle);
toggle.addEventListener("click", function() {
    inst.classList.toggle("transform-active");
})