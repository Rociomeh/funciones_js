let Color = ""; //variable vacía
var div1 = document.getElementById("key");
let div2 = document.createElement("div");

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    //cambiar color 1
    Color = "pink";
    div1.style.backgroundColor = Color;
    console.log("se apretó la A y el color es :" , Color);
} 
else if (event.key === 's') { 
    //cambia color 2
    Color = "orange";
    div1.style.backgroundColor = Color; //se llama a la variable 
    console.log("se apretó la S y el color es :" , Color);
}
else if (event.key === 'd') { 
    //cambia color 3
    Color = "lightblue"; 
    div1.style.backgroundColor = Color;
    console.log("se apretó la D y el color es :" , Color);
} 

//creando nunevo div
else if (event.key === 'q') { 
    crearDiv(); //llama a esta función
    Color = "purple";
    div2.style.backgroundColor = Color; //cambiar a color 2 
    console.log("se apretó la Q y el color es :" , Color);
}
else if (event.key === 'w') { 
    crearDiv();
    Color = "grey";
    div2.style.backgroundColor = Color;
    console.log("se apretó la W y el color es :" , Color);
}
else if (event.key === 'e') { 
    crearDiv();
    Color = "brown";
    div2.style.backgroundColor = Color;
    console.log("se apretó la E y el color es :" , Color);
} })

function crearDiv() {
    console.log("prueba");
    div2.style.width = "200px";
    div2.style.height = "200px";
    div2.style.border = "2px solid black";
    var contenedor = document.getElementById("nuevoDiv");
    contenedor.appendChild(div2); //appendChild: enlaza el div2 con el nuevoDiv del HTML
}
