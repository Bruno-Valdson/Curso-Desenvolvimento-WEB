window.onload = function(){
    let nome = localStorage.getItem("nome");
    let h1 = document.getElementById("h1");
    h1.innerHTML = nome;
}
function atualizar(e){
    let valor  = e.value;
    console.log(valor);

    let h1 = document.getElementById("h1");
    h1.innerHTML = valor;

    localStorage.setItem("nome", valor);
}