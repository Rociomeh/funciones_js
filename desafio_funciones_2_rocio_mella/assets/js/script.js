const ele = document.getElementById("ele1"); 

function pintar(color) {  
    ele.style.backgroundColor = color;
};

ele.addEventListener("click", function() {
    pintar("yellow");
}); 