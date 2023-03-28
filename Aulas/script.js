var numero = 0;
var timer;
var h1;

window.onload = function(){
    let h = titulo();
}
function titulo(){
    let nome = localStorage.getItem("nome");
    h1 = document.getElementById("h1");
    h1.innerHTML = nome;
}
// function atualizar(e){
//     let valor  = e.value;
//     console.log(valor);

//     let h1 = document.getElementById("h1");
//     h1.innerHTML = valor;

//     localStorage.setItem("nome", valor);
// }
function sortear(){
    let np = 100;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("h1").innerHTML = ns;
}

function iniciar(){
    let h = document.getElementById("h1");
    h.innerHTML =  "Sorteando..."

    timer = setTimeout(sortear,1000);
}
function cancelar(){

    clearTimeout(timer);
    let h = titulo();
}