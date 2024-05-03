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
        background.style.backgroundColor="#FFFFF0";
        theme.style.backgroundColor="#333333 ";;
        icon.classList.remove("fa-sun-o");
        icon.classList.add("fa-moon-o");
        theme.style.color="#2E86AB";
        theme.style.border="3px solid #2E86AB";
        logoBorder.style.border="3px solid #2E86AB";
        navBorder.style.borderBottom="3px solid #2E86AB";
        slideSpan.style.color="#2E86AB";
        textContent.style.color="#2E86AB";
    }else {
        background.style.backgroundColor="#333333 ";
        theme.style.backgroundColor="#FFFFF0";
        icon.classList.remove("fa-moon-o");
        icon.classList.add("fa-sun-o");
        theme.style.color="#F4D03F";
        theme.style.border="3px solid #F4D03F";
        logoBorder.style.border="3px solid #F4D03F";
        navBorder.style.borderBottom="3px solid #F4D03F";
        slideSpan.style.color="#F4D03F";
        textContent.style.color="#F4D03F";
    }
});