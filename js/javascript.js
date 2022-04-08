
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
function venda(e){
    if(document.getElementById('clabresa') .cheked)
    {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 30.00;
        document.getElementById('resultadoCalabresa') .innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa') .innerHTML = vendaCalabresa.toFixed(2);
    }else if(document.addEventListener('marguerita').cheked)
    {
        somaMarguerita = somaMarguerita + 1;
        vendaMaguerita = vendaMaguerita + 30.00;
        document.getElementById('resultadoMarquerita') .innerHTML = somaMarguerita;
        document.getElementById('vendaMarguerita') .innerHTML = vendaMaguerita.toFixed(2);
    }else if(document.getElementById9('quatroqueijos') .cheked)
    {
        somaQuatroqueijos = somaQuatroqueijos + 1;
        vendaQuatroqueijos = vendaQuatroqueijos + 30.00;
        document.getElementById('resultadoQuatroqueijos') .innerHTML = somaQuatroqueijos;
        document.getElementById('vendaQuatroqueijos') .innerHTML = vendaQuatroqueijos.toFixed(2);
    }else if(document.getElementById('portuguesa') .cheked)
    {
        somaPortuguesa = somaPortuguesa + 1;
        vendaPortuguesa = vendaPortuguesa + 30.00;
        document.getElementById('reaultadoPortuquesa') .innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa') .innerHTML = vendaPortuguesa.toFixed(2);
    }
}