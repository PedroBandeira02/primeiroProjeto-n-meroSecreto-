let listaNumerosSorteados = [];
let numeroMaximo = 100;
let numerosecreto = numeroAleatorio();
console.log(numerosecreto);
let Tentativas = 1 

function exibirTexto(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibiçaoDeTexto() {
    exibirTexto('h1', 'Bem vindos ao jogo do número secreto');
    exibirTexto('p', `escolha um número de 1 a ${numeroMaximo}`); 
}
exibiçaoDeTexto();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute == numerosecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavratentativa = Tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemP = `Você descobriu o número secreto com ${Tentativas} ${palavratentativa}`;
        exibirTexto('p', mensagemP);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else { 
       if (chute > numerosecreto) {
        exibirTexto ('p', 'o número secreto é menor');
       } else {
        exibirTexto ('p', 'o número secreto é maior');
       }
       Tentativas++ 
       limparInput(); 
    }
}

function numeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let quantDeNumerosLista = listaNumerosSorteados.length;
    if (quantDeNumerosLista == numeroMaximo) {
        listaNumerosSorteados = []; 
    }
    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return numeroAleatorio(); 
    }else {listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
}
 function limparInput() {
    chute = document.querySelector('input');
    chute.value = '';
 }

 function botaoReiniciar() {
    numerosecreto = numeroAleatorio();
    limparInput();
    exibiçaoDeTexto();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    Tentativas = 1 
    console.log(numerosecreto);
 }