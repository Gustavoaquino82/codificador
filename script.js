let matrixCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
const input_texto = document.querySelector(".input-texto");
const input_mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".btn-copiar")




//função para limpar texto do text area ao clicar no botão home
function limparinputtexto () {
    document.querySelector('.input-texto').value = "";
}
//captura o id e esconde a div-aparece da tela
document.getElementById("div-aparece").style.display = 'none';
inputverificar();

// caputura o id no momento do click e direciona para o metódo que codifica o texto
document.getElementsByClassName('btn-codificar').onclick = (e) =>{
    e.preventDefault();
    const textoCodificado = criptografar(input_texto.value.toLowercase());
    input_mensagem.value = textoCodificado;
    input_texto.value = "";
    aparece()
}

// caputura o id no momento do click e direciona para o metódo que desencripta o texto
document.getElementsByClassName('btn-decodificar').onclick = (e) => {
    e.preventDefault();
    const textoDecodificado = descriptografar(input_texto.value.toLowercase());
    input_mensagem.value = textoDecodificado;
    input_texto.value = "";
    aparece()
}

// caputura o id no momento do click e faz a validação de copiar o texto
document.getElementsByClassName('btn-copiar').onclick = (e) => {
    e.preventDefault();
    input_mensagem.select();
    navigator.clipboard.writeText(input_mensagem.value)
    input_mensagem.value = "";
}

//função que faz o botão de codificar funcionar
function btnCodificar(){
const textoCodificado = criptografar(input_texto.value)
    input_mensagem.value = textoCodificado
    input_mensagem.style.backgroundImagem = "none"
    aparece()
}
// função de criptografia
function criptografar(stringCodificada){
    stringCodificada =stringCodificada.toLowerCase();
    for (let i = 0; i < matrixCodigo.length; i++) {
        if (stringCodificada.includes(matrixCodigo [i][0])){
        stringCodificada = stringCodificada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringCodificada;
}
//função que faz o btão de decodificar funcionar
function btnDecodificar(){
    const textoDecodificado = descriptografar(input_texto.value)
    input_mensagem.value = textoDecodificado
    input_mensagem.style.backgroundImagem = "none"
    aparece()
}
// função de decriptografar
function descriptografar(stringDecodificada){
    for( let i = 0; i < matrixCodigo.length; i++){
        if (stringDecodificada.includes(matrixCodigo[i][1])){
            stringDecodificada = stringDecodificada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
        }
    }
    return stringDecodificada;
}
// função do botão de copiar
function copiar (){
    const msg = document.querySelector(".mensagem")
    msg.select();
    navigator.clipboard.writeText(msg.value)
}
//manipula o DOM para que a imagem e o texto suma ao clicar nos botões de codificar e decodificar
function aparece(){
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("div-aparece").style.display = 'block' ;
}
// função de reinicar a pagina e limpar o texto do input texto
function home(){
    document.getElementById("div-aparece").style.display = 'none';
    document.getElementById("div-desaparece").style.display = 'block';
    return limparinputtexto();
}

function inputverificar(){
    var inputPalavra = document.querySelector(".input-texto");
    inputPalavra.addEventListener("keypress", function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.wich);
        if(keyCode > 32 && keyCode < 65){
            e.preventDefault();
        }
    })
}