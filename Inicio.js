document.getElementById("IconoMenu").addEventListener("click", openMenu);

imagen = document.getElementById("imagen");
menu = document.getElementById("Menu");
navegador = document.getElementById("Navegador");
icono = document.getElementById("IconoMenu");
quitar = document.getElementById("Cruz");

function openMenu(){
    imagen.style.margin = " 0px 0px 40px 0px";
    navegador.style.transform = "translateX(0px)";
    menu.style.position = "fixed";
    menu.style.background = "white";
    menu.style.height = "100%";
    icono.style.display = "none";
    quitar.style.display = "block";
}

document.getElementById("Cruz").addEventListener("click", closeMenu);

function closeMenu(){
    navegador.style.transform = "translateX(-100000000000000px)";
    menu.style.height = "200px";
    quitar.style.display = "none";
    icono.style.display = "block";
    imagen.style.margin = "0px";
    menu.style.position = "relative";
    navegador.style.transition = "0.5s";
}