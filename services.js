var toggle = document.getElementById("toggle");
var inst = document.getElementsByClassName("inst")[0];
var sidenav = document.getElementsByClassName("sidenav")[0];
console.log(toggle);
toggle.addEventListener("click", function() {
    inst.classList.toggle("inst-active");
    sidenav.classList.toggle("sidenav-active");
})