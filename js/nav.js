
function bgr(x) {
    x.classList.toggle("change");
    var menu = document.getElementById("menu");
    menu.classList.toggle("noshow");
}
  
document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var bgr = document.getElementById("bgr");
    var isClickInsideMenu = menu.contains(event.target);
    var isClickInsideBgr = bgr.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideBgr && menu.classList.contains("noshow")) {
        menu.classList.toggle("noshow");
        document.getElementById("bgrbtn").classList.toggle("change");
    }
});