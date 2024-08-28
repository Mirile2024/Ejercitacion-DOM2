let elegirTema = document.querySelector("body");
let h1 = document.querySelector("h1");
let item = document.querySelectorAll(".item")
let h2 = document.querySelectorAll("h2")
let p = document.querySelectorAll("p")

let confirmarTema= confirm("Quiere Cambiar a Modo Oscuro?")
if(confirmarTema==true){
    elegirTema.classList.toggle("body-modoOscuro");
    h1.classList.toggle("h1-modoOscuro");
    for (let i = 0; i < item.length; i++){
    item[i].classList.toggle("item-modoOscuro");
    h2[i].classList.toggle("h2-modoOscuro");
    p[i].classList.toggle("p-modoOscuro");
    }
}
    