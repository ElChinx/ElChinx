let burger = document.getElementById("burger");
var on = false;
burger.addEventListener("click",burgerSH);

function burgerSH(){
    let i = document.getElementById("nav-ul").querySelectorAll('li.i');
    i.forEach(e => {
        if(on){
            e.className = "i off";
            e.removeEventListener("click",close)
        }else{
            e.className = "i";
            e.addEventListener("click",close);
        }
    });
    if(on){
        burger.innerHTML = "&#9776;";
        on = false;
    }else{
        burger.innerHTML = "&#x2716;";
        on = true;
    }
}

function close(){
    let i =  document.getElementById("nav-ul").querySelectorAll('li.i');
    i.forEach(e => {
            e.className = "i off";
            e.removeEventListener("click",close);
    });
    burger.innerHTML = "&#9776;";
    on = false;
}

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

document.getElementById("l").addEventListener("click",function(){
    moveF(false,"friends-scroll");
});
document.getElementById("r").addEventListener("click",function(){
    moveF(true,"friends-scroll");
});

document.getElementById("l-w").addEventListener("click",function(){
    moveF(false,"works-scroll");
});
document.getElementById("r-w").addEventListener("click",function(){
    moveF(true,"works-scroll");
});

function moveF(d,s){
    var l = document.getElementById(s);
    if(d){
        l.scrollLeft += 612;
    }else{
        l.scrollLeft -= 612;
    }
}
