var theme=document.getElementById("theme-btn");
var background=document.body
var icon = theme.querySelector("i");
var logoBorder=document.getElementById("logoImage")
var navBorder=document.getElementById("navbar")
var slideSpan=document.getElementById("slideSpan")
var textContent=document.getElementById("hero")
let count=2;

theme.addEventListener("click",function(){
    count++;
    if (count%2==0){
        background.style.backgroundColor="white";
        theme.style.backgroundColor="black";;
        icon.classList.remove("fa-sun-o");
        icon.classList.add("fa-moon-o");
        theme.style.color="rgb(8, 136, 255)";
        theme.style.border="3px solid rgb(8, 136, 255)";
        logoBorder.style.border="3px solid rgb(8, 136, 255";
        navBorder.style.borderBottom="3px solid rgb(8, 136, 255";
        slideSpan.style.color="rgb(8, 136, 255)";
        textContent.style.color="rgb(8, 136, 255)";
    }else {
        background.style.backgroundColor="black";
        theme.style.backgroundColor="white";
        icon.classList.remove("fa-moon-o");
        icon.classList.add("fa-sun-o");
        theme.style.color="rgb(255, 196, 0)";
        theme.style.border="3px solid rgb(255, 196, 0)";
        logoBorder.style.border="3px solid rgb(255, 196, 0)";
        navBorder.style.borderBottom="3px solid rgb(255, 196, 0)";
        slideSpan.style.color="rgb(255, 196, 0)";
        textContent.style.color="rgb(255, 196, 0)";
    }
});