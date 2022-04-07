'use strict';
//Variaveis
let somaCalabresa = 0;
let somaMarguerita = 0;
let somaQuatroqueijos = 0;
let somaPortuguesa = 0;
let vendaCalabresa = 0.00;
let vendaMaguerita = 0.00;
let vendaQuatroqueijos = 0.00;
let vendaPortuguesa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('exportar');

//Eventos
btnVendas.addEventListener('click' , vendas, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click' , planilha, false);

//Funções
function vendas(e)[
    if(document.getElementById('clabresa') .cheked){
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 30.00;
    }else if(document.addEventListener('marguerita').cheked)
]