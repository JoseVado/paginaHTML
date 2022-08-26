function nombres() {
    var formulario = document.getElementById("frm1");
    var texto = "";
    for (var i = 0; i < formulario.length; i++) {
        texto += formulario.elements[i].value + " ";
    }
    document.getElementById("varNombre").innerHTML = texto;
}