// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

window.onload = function () {
    var el = document.getElementById("qtdConvidados");
    var el2 = document.getElementById("qtdBebidas");
    var el3 = document.getElementById("qtd-acompanhamentos");
    var el4 = document.getElementById("qtdSuprimentos");

    var qtdDuracao = parseInt(document.getElementById("qtdDuracao").innerText);
    var duracao = document.getElementById("qtdDuracao");

    var qtdCrianca = parseInt(document.getElementById("qtdCrianca").innerText);
    var qtdAdultos = parseInt(document.getElementById("qtdAdulto").innerText);
    var criancas = document.getElementById("qtdCrianca");
    var adulto = document.getElementById("qtdAdulto");

    var clickCerveja;
    var clickCervejaLata;
    var clickRefri;

    // funcão clicar qtd convidados
    el.addEventListener('click', function (e) {
        var element = e.target.id;
        // console.log(element);
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

        let resConvidados = document.getElementById("conv-qtd");
        let resCarnes = document.getElementById("qtd-carnes");
        let resRefri = document.getElementById("resulRefri");


        let qtdTotalCarne = carnePP(qtdDuracao) * qtdAdultos + (carnePP(qtdDuracao) / 2 * qtdCrianca);
        let qtdTotalBebidas = bebidasPP(qtdDuracao) * qtdAdultos + (bebidasPP(qtdDuracao) / 2 * qtdCrianca);

        // Qunatidade de convidados
        resConvidados.innerHTML = `<p>${qtdAdultos}</p>`;
        resConvidados.innerHTML += `<p>${qtdCrianca}</p>`;

        // Quantidade de carnes
        resCarnes.innerHTML = `<p>${qtdTotalCarne / 1000} Kg</p>`
        resCarnes.innerHTML += `<p>${(qtdTotalCarne / 1000) / 2} Kg</p>`

        //Quantidade bebidas



    });

    // Clicar em Bebidas
    el2.addEventListener('click', function (e) {
        var ident = e.target.id;

        let cerveja = document.getElementById("resulCer");
        let cervejaLata = document.getElementById("resulCerLata");
        let refri = document.getElementById("resulRefri");

        switch (ident) {
            case "tp-cerveja":
            case "bb-cerveja":
            case "cerveja":
            case "icon-cerveja":
                if (cerveja.innerText != "-") {
                    console.log(cerveja.innerText);
                    clickCerveja = 0;
                    cerGarrafa(clickCerveja);
                } else {
                    cerveja.innerText = 0;
                    clickCerveja = 1;
                    cerGarrafa(clickCerveja);
                }
                break;
            case "tp-cerveja-lata":
            case "bb-cerveja-lata":
            case "cerveja-lata":
            case "icon-cerveja-lata":
                if (cervejaLata.innerText != "-") {
                    console.log(cervejaLata.innerText);
                    clickCervejaLata = 0;
                    cerLata(clickCervejaLata);
                } else {
                    cervejaLata.innerText = 0;
                    clickCervejaLata = 1;
                    cerLata(clickCervejaLata);
                }
                break
            case "tp-refrigerante":
            case "bb-refrigerante":
            case "refrigerante":
            case "icon-refrigerante":
                if (refri.innerText != "-") {
                    console.log(refri.innerText);
                    clickRefri = 0;
                    Refrigerante(clickRefri);
                } else {
                    refri.innerText = 0;
                    clickRefri = 1;
                    Refrigerante(clickRefri);
                }
                break
            default:
                break;
        }
        // console.log(qtd);
    });

    // Resultado Bebidas
    // Resultado cerveja (600)
    function cerGarrafa(qtd) {
        let resCerveja = document.getElementById("resulCer");
        let qtdTotalCerveja = cerveja(qtdDuracao) * qtdAdultos;


        console.log("Entrou na função");
        console.log(qtd);
        // console.log(qtdDuracao);


        if (qtd > 0) {
            resCerveja.innerHTML = `<p>${Math.ceil(qtdTotalCerveja / 600)} Garrafas</p>`
            console.log("Entrou no IF TRUE " + Math.ceil(qtdTotalCerveja / 600));
        } else {
            resCerveja.innerHTML = "-";
            console.log("Entrou no IF FALSE " + Math.ceil(qtdTotalCerveja / 600));
        }
    }

    // Resultado Cerveja lata
    function cerLata(qtd) {
        let resCerveLata = document.getElementById("resulCerLata");
        let qtdTotalCervejaLata = lataCerveja(qtdDuracao) * qtdAdultos;


        console.log("Entrou na função");
        console.log(qtd);
        // console.log(qtdDuracao);


        if (qtd > 0) {
            resCerveLata.innerHTML = `<p>${Math.ceil(qtdTotalCervejaLata / 355)} Latas</p>`
            console.log("Entrou no IF TRUE " + qtdTotalCervejaLata / 355);
        } else {
            resCerveLata.innerHTML = "-";
            console.log("Entrou no IF FALSE " + qtdTotalCervejaLata / 355);
        }
    }

    // Resultado Refrigerante
    function Refrigerante(qtd) {
        let resRefri = document.getElementById("resulRefri");
        let qtdRefri = bebidasPP(qtdDuracao) * qtdAdultos + (bebidasPP(qtdDuracao) / 2 * qtdCrianca);


        console.log("Entrou na função");
        console.log(qtd);
        // console.log(qtdDuracao);


        if (qtd > 0) {
            resRefri.innerHTML = `<p>${Math.ceil(qtdRefri / 2000)} Garrafas</p>`
            console.log("Entrou no IF TRUE " + Math.ceil(qtdRefri / 2000));
        } else {
            resRefri.innerHTML = "-";
            console.log("Entrou no IF FALSE " + Math.ceil(qtdRefri / 2000));
        }
    }

    // Calcular quantidades
    function carnePP(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 650;
        } else {
            return 400
        }
    }

    function cerveja(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 5500;
        } else {
            return 3000
        }
    }

    function lataCerveja(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 5500;
        } else {
            return 3000
        }
    }

    function bebidasPP(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 1500;
        } else {
            return 1000
        }
    }
}



// mudar cor background

// const cor1 = "#ce1818";
// const cor2 = "#ffffff";
// let cor3 = document.getElementById("tp-cerveja").style.backgroundColor;

                // if (cor3 == "rgb(255, 255, 255)") {
                //     document.getElementById("tp-cerveja").style.backgroundColor = cor1;
                //     document.getElementById("tp-cerveja").style.borderRadius = "20px";
                //     document.getElementById("tp-cerveja").style.color = "WHITE";
                // } else {
                //     document.getElementById("tp-cerveja").style.backgroundColor = cor2;
                //     document.getElementById("tp-cerveja").style.borderRadius = "20px";
                //     document.getElementById("tp-cerveja").style.color = "BLACK";
                // }