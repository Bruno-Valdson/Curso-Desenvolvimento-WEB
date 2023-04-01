// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

// funcão clicar nos botões 


window.onload = function () {

    var column = document.getElementById("column-2");
    // column.innerHTML += `style="margin: 0px; height: 200px;"`

    var el = document.getElementById("qtdConvidados");

    el.addEventListener('click', function (e) {
        var element = e.target.id;

        console.log(element);

        let qtdDuracao = parseInt(document.getElementById("qtdDuracao").innerText);
        let qtdCrianca = parseInt(document.getElementById("qtdCrianca").innerText);
        let qtdAdultos = parseInt(document.getElementById("qtdAdulto").innerText);

        let duracao = document.getElementById("qtdDuracao");
        let criancas = document.getElementById("qtdCrianca");
        let adulto = document.getElementById("qtdAdulto");

        switch (element) {
            case "btnPlus-adulto":
                qtdAdultos++;
                adulto.innerText = qtdAdultos;
                break;
            case "btnSub-adulto":
                if (qtdAdultos > 0) {
                    qtdAdultos--;
                    adulto.innerText = qtdAdultos;
                }
                break;
            case "btnPlus-crianca":
                qtdCrianca++;
                criancas.innerText = qtdCrianca;
                break;
            case "btnSub-crianca":
                if (qtdCrianca > 0) {
                    qtdCrianca--;
                    criancas.innerText = qtdCrianca;
                }
                break;
            case "btnPlus-duracao":
                qtdDuracao++;
                duracao.innerText = qtdDuracao;
                break;
            case "btnSub-duracao":
                if (qtdDuracao > 0) {
                    qtdDuracao--;
                    duracao.innerText = qtdDuracao;
                }
                break;
            default:
                break;
        }

        let resultado = document.getElementById("resultado");

        let qtdTotalCarne = carnePP(qtdDuracao) * qtdAdultos + (carnePP(qtdDuracao) / 2 * qtdCrianca);
        let qtdTotalCerveja = cervejaPP(qtdDuracao) * qtdAdultos
        let qtdTotalBebidas = bebidasPP(qtdDuracao) * qtdAdultos + (bebidasPP(qtdDuracao) / 2 * qtdCrianca);

        resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas de 2L de Refrigerante</p>`
    });

    function carnePP(qtdDuracao) {
        if (qtdDuracao >= 6) {
            return 650;
        } else {
            return 400
        }
    }
    function cervejaPP(qtdDuracao) {
        ;
        if (qtdDuracao >= 6) {
            return 2000;
        } else {
            return 1200
        }
    }
    function bebidasPP(qtdDuracao) {
        if (qtdDuracao >= 6) {
            return 1500;
        } else {
            return 1000
        }
    }
}