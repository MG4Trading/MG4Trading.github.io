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

if ((navigator.userAgent.match(/iPhone/)) || (navigator.userAgent.match(/iPod/))) {
    document.getElementById("body").style.webkitTextSizeAdjust = "250%";
    document.getElementById("contacts-body").style.webkitTextSizeAdjust = "250%";
 }
