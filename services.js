var toggle = document.getElementById("toggle");
var inst = document.getElementsByClassName("inst")[0];
var sidenav = document.getElementsByClassName("sidenav")[0];
toggle.addEventListener("click", function() {
    inst.classList.toggle("inst-active");
    sidenav.classList.toggle("sidenav-active");
})
var sidenavButtons = document.getElementsByClassName("sidenav-button");
function navigate(n) {
    for (let index = 0; index < sidenavButtons.length; index++) {
        if (index != n) {
            sidenavButtons[index].classList.remove("sidenav-button-active");
        }
        sidenavButtons[n].classList.add("sidenav-button-active");
    }
}