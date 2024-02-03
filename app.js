function mostrarResultado(resultado) {
    document.getElementById("saida-imagem").style.display = "none";
    document.getElementById("alerta-titulo").style.display = "none";
    document.getElementById("alerta-texto").style.display = "none";

    document.getElementById("botao-clipboard").style.display = "block";
    let output = document.getElementById("decodificador-output");
    output.style.display = "flex";
    output.value = resultado;
}

function resetarLayout() {
    document.getElementById("saida-imagem").setAttribute("style", "");
    document.getElementById("alerta-titulo").setAttribute("style", "");
    document.getElementById("alerta-texto").setAttribute("style", "");
    document.getElementById("decodificador-output").setAttribute("style", "");
    document.getElementById("botao-clipboard").setAttribute("style", "");

    document.getElementById("decodificador-input").value = "";
}

function verificarTexto(texto) {
    const regex = /[A-Z`@#$%^&*()_+\-=\[\]{};':"\\|<>\/~]/;
    if (texto.length == 0 || texto.length == undefined || regex.test(texto)) {
        resetarLayout();
        return true;
    }else {
        return false;
    }
}

function criptografar() {
    let textoInput = document.getElementById("decodificador-input");
    let texto = textoInput.value;
    if (verificarTexto(texto)) {
        // o input invalido
    }else{
        let resultado = texto.replaceAll("a",   "ai");
        resultado = resultado.replaceAll("e","enter");
        resultado = resultado.replaceAll("i", "imes");
        resultado = resultado.replaceAll("o", "ober");
        resultado = resultado.replaceAll("u", "ufat");

        mostrarResultado(resultado);
    }
}

function descriptografar() {
    let textoInput = document.getElementById("decodificador-input");
    let texto = textoInput.value;
    if (verificarTexto(texto)) {
        // o input invalido
    }else{
        let resultado = texto.replaceAll("ai",   "a");
        resultado = resultado.replaceAll("enter","e");
        resultado = resultado.replaceAll("imes", "i");
        resultado = resultado.replaceAll("ober", "o");
        resultado = resultado.replaceAll("ufat", "u");

        mostrarResultado(resultado);
    }
}

async function copiarTexto() {
    let textoInput = document.getElementById("decodificador-output");

    try {
        await navigator.clipboard.writeText(textoInput.value);
    }catch (error) {
        console.error(error.message);
    }
}