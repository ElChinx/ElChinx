var p = {
    "obj":document.getElementById("delimiter"),
    "art":50,
    "activate":false,
    "w":false,
    "var":null,
    "bgr":false,
}


p.var = setInterval(() => {
    if(p.activate){
        if(p.w){
            if(p.art <= 80){
                p.art += 2
                p.obj.style.width = p.art+"%";
            }
        }else{
            if(p.art >= 20){
                p.art -= 2
                p.obj.style.width = p.art+"%";
            }
        }
    }else{
        if(p.art < 50){
            p.art += 2
            p.obj.style.width = p.art+"%";
        }
        if(p.art > 50){
            p.art -= 2
            p.obj.style.width = p.art+"%";
        }
    }
}, 5);

function select(value,value2){
    p.w = value2;
    p.activate = value;
}


// function bgr(x) {
//     x.classList.toggle("change");
//     var menu = document.getElementById("menu");
//     menu.style.display = menu.style.display === "none" ? "inline-block" : "none";
// }

// document.addEventListener("click", function (event) {
//     var menu = document.getElementById("menu");
//     var bgr = document.getElementById("bgr");
//     var isClickInsideMenu = menu.contains(event.target);
//     var isClickInsideBgr = bgr.contains(event.target);
//     if (!isClickInsideMenu && !isClickInsideBgr && menu.style.display != "none") {
//       menu.style.display = "none";
//       document.getElementById("bgrbtn").classList.toggle("change");
//     }
//   });
  
function bgr(x) {
    x.classList.toggle("change");
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
  
  document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var bgr = document.getElementById("bgr");
    var isClickInsideMenu = menu.contains(event.target);
    var isClickInsideBgr = bgr.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideBgr && menu.classList.contains("show")) {
      menu.classList.remove("show");
      document.getElementById("bgrbtn").classList.toggle("change");
    }
  });


function rsz(){
    if (screen.width >= 1024 || window.width >= 1024) {
        let i =  document.getElementById("nav-ul").querySelectorAll('li.i');
        i.forEach(e => {
                e.className = "i off";
                e.removeEventListener("click",close);
        })
        burger.innerHTML = "&#9776;";
        on = false;
    }else {
    let i = document.getElementById("nav-ul").querySelectorAll('li.i');
    i.forEach(e => {
        e.className = "i off";
        e.removeEventListener("click",close);
    });
    burger.innerHTML = "&#9776;";
    on = false;
    }
}
  


const scrollContainer = document.getElementById('fs');
const scrollDistance = 500; // Distancia de desplazamiento en píxeles

document.getElementById('r').addEventListener('click', function() {
  scrollContainer.scrollBy({
    top: 0,
    left: scrollDistance,
    behavior: 'smooth'
  });
});

document.getElementById('l').addEventListener('click', function() {
  scrollContainer.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: 'smooth'
  });
});
  
  