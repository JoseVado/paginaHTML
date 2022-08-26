function calcular() {
    var formulario = document.getElementById("calc");

    var num1 = parseInt(formulario[0].value);
    var num2 = parseInt(formulario[1].value);

    if (formulario[2].checked) {
        document.getElementById("respuesta").value = num1 + num2;
    }

    if (formulario[3].checked) {
        document.getElementById("respuesta").value = num1 - num2;
    }

    if (formulario[4].checked) {
        document.getElementById("respuesta").value = num1 * num2;
    }

    if (formulario[5].checked) {
        document.getElementById("respuesta").value = num1 / num2;
    }

    
}
