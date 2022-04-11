let burger = document.getElementById("burger");
var on = false;
burger.addEventListener("click",burgerSH);

function burgerSH(){
    let i = document.getElementById("nav-ul").querySelectorAll('li.i');
    i.forEach(e => {
        if(!on){
            e.style.display = 'flex';
            e.addEventListener("click",close)
        }else{
            e.style.display = 'none';
            e.removeEventListener("click",close);
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
            e.style.display = 'none';
            e.removeEventListener("click",close);
    });
    burger.innerHTML = "&#9776;";
    on = false;
  
}

function rsz(){
    if (screen.width >= 1024) {
        let i =  document.getElementById("nav-ul").querySelectorAll('li.i');
        i.forEach(e => {
                e.style.display = 'inline-block';
                e.removeEventListener("click",close);
        })
        burger.innerHTML = "&#9776;";
        on = false;
    }else {
        on = true;
        burgerSH()
    }
}