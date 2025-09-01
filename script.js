    document.getElementById("precio").addEventListener("input", function (e) {
        this.value = this.value.replace(/[^0-9]/g, ""); // elimina cualquier caracter que no sea número
    });