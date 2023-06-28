var menu = document.querySelector(".menu");
var right = document.querySelector(".right");
var open = document.querySelector(".ri-menu-line");
var close = document.querySelector(".ri-close-line");

var flag = 0;
right.addEventListener("click",function(){
    if(flag == 0){
        menu.style.top = "0";
        open.style.display = "none";
        close.style.display = "block";
        close.style.color = "white";
        
        flag = 1;
    }else{
        open.style.display = "block";
        close.style.display = "none";
        menu.style.top = "-100vh";
        flag = 0;
    }
})