let logodesj = document.getElementById("logoDesj");
let logodesj2 = document.getElementById("imgLogoDesj");

logodesj.addEventListener("mouseover", function () {
    logodesj2.src = "img/desjardins-logo_white.png";
});

logodesj.addEventListener("mouseout", function () {
    logodesj2.src = "img/logodesj.png";
});