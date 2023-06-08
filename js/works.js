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