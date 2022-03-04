// Controle de Interface

let seuVotoPara = document.querySelector('.d11 span'); 
let cargo = document.querySelector('.d12 span');
let descricao = document.querySelector('.d14');
let aviso = document.querySelector('.d2');
let lateral = document.querySelector('.d1d');
let numeros = document.querySelector('.d13');


let etapaAtual = 0;
let numero = '';


function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0; i<etapa.numeros;i++) {
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = ' ';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    
}

function clicou(n) {
    alert('Clicou em ' +n);
}

function branco() {
    alert('Clicou em BRANCO');
}
function corrige() {
    alert('Clicou em CORRIGE');
}
function confirma() {
    alert('Clicou em CONFIRMA');
}


comecarEtapa();