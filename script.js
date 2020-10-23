function changeNavMode() {
    if (document.getElementById("side-nav-menu").style.width == "0px" || document.getElementById("side-nav-menu").style.width == 0) {
        document.getElementById("side-nav-menu").style.width = "177px";
        document.getElementById("main-page").style.marginRight = "177px";
        document.getElementById("main-page").style.marginLeft = "-177px";
        document.getElementById("main-lang").style.display = "none";
    } else {
        document.getElementById("side-nav-menu").style.width = "0px";
        document.getElementById("main-page").style.marginRight = "0px";
        document.getElementById("main-page").style.marginLeft = "0px";
        document.getElementById("main-lang").style.display = "block";
    }
}

function closeNav() {
    document.getElementById("side-nav-menu").style.width = "0px";
    document.getElementById("main-page").style.marginRight = "0px";
    document.getElementById("main-page").style.marginLeft = "0px";
    document.getElementById("main-lang").style.display = "block";
}