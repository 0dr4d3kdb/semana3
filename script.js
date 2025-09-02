const nombre_planta = document.getElementById("nombre");
const especie_planta = document.getElementById("especie");
const precio_planta = document.getElementById("precio");
const cantidad_planta = document.getElementById("cantidad");
const frutal_planta = document.getElementById("frutalselect");
const veneno_planta = document.getElementById("venenoselect");
const error = document.getElementById("error");

//Eliminar caracteres no numéricos
document.getElementById("precio").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, ""); 
});

document.getElementById("cantidad").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, ""); 
});

//validaciones inputs
nombre_planta.addEventListener('keyup', function(e){
    if(nombre_planta.value.length < 5){
        error.innerHTML = "El nombre de la planta debe tener 5 caracteres como mínimo";
    }else{
        error.innerHTML = "&nbsp;";
    }
});

especie_planta.addEventListener('keyup', function(e){
    if(especie_planta.value.length == 0){
        error.innerHTML = "El campo de la especie de la planta no puede estar vacío";
    }else{
        error.innerHTML = "&nbsp;";
    }
});

precio_planta.addEventListener('keyup', function(e){
    let precio_int = parseInt(precio_planta.value);
    if(precio_int < 1000 || precio_int > 100000){
        error.innerHTML = "El valor debe ser mayor a $1000 y menor a $100000";
    }else{
        error.innerHTML = "&nbsp;";
    }
});

cantidad_planta.addEventListener('keyup', function(e){
    let cantidad_int = parseInt(cantidad_planta.value);
    if(cantidad_int == 0 || cantidad_planta.value.length == 0){
        error.innerHTML = "La cantidad mínima es de 1 planta";
    }else{
        error.innerHTML = "&nbsp;";
    }
});


frutal_planta.addEventListener('change', function(e) {
    if (frutal_planta.value === "seleccionar") {
        error.innerHTML = "Debe seleccionar la opción (Sí o No) en planta frutal.";
    } else {
        error.innerHTML = "&nbsp;";
    }
});

veneno_planta.addEventListener('change', function(e) {
    if (veneno_planta.value === "seleccionar") {
        error.innerHTML = "Debe seleccionar la opción (Sí o No) en planta venenosa.";
    } else {
        error.innerHTML = "&nbsp;";
    }
});
