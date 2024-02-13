var textInput = document.querySelector(".input-texto");
var outInput = document.querySelector("#box-resultado");

document.getElementById("div-aparece").style.display= 'none';
inputverificar();


document.getElementsByClassName('btn-codificar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensagem.value = textoEncriptado;
  input.value = "";
  aparece()
}


document.getElementsByClassName('btn-decodificar').onclick = (e) => {
  e.preventDefault();
  const textoDecriptado = decodificar(input.value);
  mensagem.value = textoDecriptado;
  input.value = "";
  aparece()
}


document.getElementsByClassName('btn-copiar').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#box-resultado");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
}

function btnCodificar() {
    const textoCodificado = encriptar(textInput.value)
    outInput.value =textoCodificado
    outInput.style.backgroundImage="none"
    aparece()
}
function encriptar(stringCodificada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCodificada =stringCodificada.toLowerCase();

    for (let i=0; i<matrizCodigo.length; i++){
        if( stringCodificada.includes(matrizCodigo[i][0])) {
            stringCodificada =stringCodificada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringCodificada;
}

function btnDecodificar(){
    const textoCodificado = desencriptar(textInput.value)
    outInput.value = textoCodificado
    outInput.style.backgroundImage="none"
    aparece()
}
function desencriptar (stringDecodificada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDecodificada =stringDecodificada.toLowerCase();

    for (let i=0; i<matrizCodigo.length; i++){
        if (stringDecodificada.includes(matrizCodigo[i][1])){
            stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDecodificada;
}

function copiar() {
    const msg = document.querySelector(".mensagem");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value="";
}
function aparece() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("div-aparece").style.display = 'block';
  }
  
  //manipula o dom para que alguns componentes apareçam e desapareçam da tela
  function home() {
    document.getElementById("div-aparece").style.display = 'none';
    document.getElementById("div-desaparece").style.display = 'block';
  }
  function inputverificar() {
    var inputPalavra = document.querySelector(".input-texto");
    inputPalavra.addEventListener("keypress", function (e) {
      var keyCode = (e.keyCode ? e.keyCode : e.which);
  
      if (keyCode > 47 && keyCode < 65) {
        e.preventDefault();
    }
});
}  