let menuVisible = false;

function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList ="";
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList ="";
    manuVisible = false;
}