var menuIcon = document.getElementById("menu-icon");
var menuMobile = document.getElementById("menu-mobile");
var barsIcon = document.getElementById("bars");
var crossIcon = document.getElementById("cross");

menuIcon.addEventListener("click", function () {
    menuMobile.classList.toggle("invisible");
    menuIcon.classList.toggle("active");
});