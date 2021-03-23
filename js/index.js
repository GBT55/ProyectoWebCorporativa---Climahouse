// JS DEL MENU HAMBURGUESA (PARA QUE SE ABRA Y SE CIERRE)
const fotoMenuHamburguesa = document.querySelector("#fotoMenuHamburguesa"), MenuHamburguesa = document.querySelector("#MenuHamburguesa");
fotoMenuHamburguesa.addEventListener("click", (e) => {
    MenuHamburguesa.classList.toggle("activeMenuHamburguesa");
    document.body.classList.toggle('opacityMenuHamburguesa');
    const rutaActual = e.target.getAttribute('src');
    if(rutaActual == '../img/icon_burger.png'){
        e.target.setAttribute('src','../img/icon_burger_cierre.png');
    }
    else{
        e.target.setAttribute('src','../img/icon_burger.png');
    }
}
)
;