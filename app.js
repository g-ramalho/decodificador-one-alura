let alertaTexto = document.getElementById("alerta-texto");
let input = document.getElementById("decodificador-input");
let alertaImagem = document.getElementById("saida-imagem");
let alertaTitulo = document.getElementById("alerta-titulo");
let output = document.getElementById("decodificador-output");
let botaoClipboard = document.getElementById("botao-clipboard");
const decAlerta = document.querySelectorAll(".decodificador__saida__alerta");

function mostrarResultado(resultado) {
    alertaImagem.style.display = "none";
    alertaTitulo.style.display = "none";
    alertaTexto.style.display = "none";
    botaoClipboard.style.display = "block";    
    output.style.display = "flex";
    output.value = resultado;
    decAlerta.forEach(elemento => {
        elemento.style.display = "none"; 
    })
}

function resetarLayout() {
    decAlerta.forEach(elemento => {
        elemento.setAttribute("style", ""); 
    })
    input.value = "";
    alertaImagem.setAttribute("style", "");
    output.setAttribute("style", "");
    botaoClipboard.setAttribute("style", "");
    alertaTitulo.setAttribute("style", "");
    alertaTexto.setAttribute("style", "");
    alertaTitulo.innerHTML = "Nenhuma mensagem encontrada";
    alertaTexto.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar.";
}

function verificarTexto(texto) {
    const regex = /[A-Z`@#$%^&*()_+\-=\[\]{};':"\\|<>\/~]/;
    if (texto.length == 0 || texto.length == undefined) {
        resetarLayout();
        return true;
    }else if (regex.test(texto)) {
        resetarLayout();
        alertaTitulo.innerHTML = "Mensagem inválida!";
        alertaTexto.innerHTML = "A mensagem digitada não pode conter caracteres especiais e deve ser escrita totalmente com letras minúsculas";
        return true;
    }else {
        return false;
    }
}

function criptografar() {
    let texto = input.value;
    if (!verificarTexto(texto)) {
        let resultado = texto.replaceAll("e","enter");
        resultado = resultado.replaceAll("i", "imes");
        resultado = resultado.replaceAll("a",   "ai");
        resultado = resultado.replaceAll("o", "ober");
        resultado = resultado.replaceAll("u", "ufat");
        mostrarResultado(resultado);
    }
}

function descriptografar() {
    let texto = input.value;
    if (!verificarTexto(texto)) {
        let resultado = texto.replaceAll("enter","e");
        resultado = resultado.replaceAll("imes", "i");
        resultado = resultado.replaceAll("ai",   "a");
        resultado = resultado.replaceAll("ober", "o");
        resultado = resultado.replaceAll("ufat", "u");
        mostrarResultado(resultado);
    }
}

async function copiarTexto() {
    try {
        await navigator.clipboard.writeText(output.value);
    }catch (error) {
        console.error(error.message);
    }
}