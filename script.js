document.getElementById("hamburger").addEventListener("click", function() {

    document.getElementById("x").style.display = "block";

    document.getElementById("nav").style.display = "flex";

    document.getElementById("hamburger").style.display = "none";

    document.getElementById("nav").style.animationName = "slide-in";
});

document. getElementById("x").addEventListener("click", function() {

  document.getElementById("nav").style.animationName = "slide-out";
    document.getElementById("nav").style.animation = "slide-out 0.5s forwards";

    document.getElementById("x").style.display = "none";

    document.getElementById("hamburger").style.display = "flex";

    
});