
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log('numero aleatorio', numeroAleatorio);

let resultadoFinal = document.querySelector('.resultadoFinal');
let altoOuBaixo = document.querySelector('.altoOuBaixo');

let envioPalpite = document.querySelector('.envioPalpite');
let userPalpite = document.querySelector('.userPalpite');
let mensagemFimDeJogo = document.querySelector('.mensagemFimDeJogo');
let mensagemPalpites = document.querySelector('.mensagemPalpites');
let botaoReinicio = document.querySelector('.reiniciarGame');
let mensagemStatus =  document.querySelector('.mensagemStatus');

let maximoTentativas = 10;
let tentativaAtual = 1;

function checarPalpite() {
    let valorCampo = Number(userPalpite.value);
    mensagemPalpites.textContent = 'Tentativas: ' + tentativaAtual;

    if (userPalpite.value == false) {
        mensagemStatus.textContent =  'Digite algum valor';
        mensagemStatus.style.backgroundColor = 'red';
        return;
      } 

    else {
        mensagemStatus.textContent = '';
    }

    if (valorCampo === numeroAleatorio) {
        resultadoFinal.textContent = 'Parabéns! Você acertou!';
        resultadoFinal.style.backgroundColor = 'green';
        userPalpite.disabled = true;
        envioPalpite.disabled = true;
        mensagemFimDeJogo.textContent = 'Fim de Jogo!';
        botaoReinicio.disabled = false;
        botaoReinicio.addEventListener('click', reinicioJogo)

    } else if (tentativaAtual === maximoTentativas) {
        mensagemFimDeJogo.textContent = 'Fim de Jogo!';
        mensagemFimDeJogo.style.backgroundColor = 'red';
        userPalpite.disabled = true;
        envioPalpite.disabled = true;
        botaoReinicio.disabled = false;
        botaoReinicio.addEventListener('click', reinicioJogo)

    } else {
        resultadoFinal.textContent = 'Errado!';
        resultadoFinal.style.backgroundColor = 'red';

        if (valorCampo < numeroAleatorio) {
            altoOuBaixo.textContent = "Seu palpite foi muito baixo!";

        } else {
            altoOuBaixo.textContent = "Seu palpite foi muito alto!";

        } 
        
    } 

    tentativaAtual++;
}
envioPalpite.addEventListener('click', checarPalpite);

function reinicioJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio);
    userPalpite.disabled = false;
    envioPalpite.disabled = false;
    mensagemFimDeJogo.textContent = '';
    mensagemPalpites.textContent = '';
    resultadoFinal.textContent = '';
    altoOuBaixo.textContent = '';
    userPalpite.value = '';
    tentativaAtual = 1;
    botaoReinicio.disabled = true;


}


















