let burger = document.getElementById("burger");
var on = false;
burger.addEventListener("click",burgerSH);

function burgerSH(){
    let i =  document.getElementById("nav-ul").querySelectorAll('li.i');
    i.forEach(e => {
        if(on){
            e.className = 'i off';
            e.removeEventListener("click",close);
        }else{
            e.className = 'i on';
            e.addEventListener("click",close)
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
    let i =  document.getElementById("nav-ul").querySelectorAll('li.on');
    i.forEach(e => {
            e.style.display = 'none';
            e.removeEventListener("click",close);
    });
    burger.innerHTML = "&#9776;";
        on = false;
}