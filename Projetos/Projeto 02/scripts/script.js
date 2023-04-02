// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

// funcão clicar nos botões 


window.onload = function () {
    var el = document.getElementById("qtdConvidados");
    var el2 = document.getElementById("qtdBebidas");
    var el3 = document.getElementById("qtd-acompanhamentos");
    var el4 = document.getElementById("qtdSuprimentos");
    var qtd = 1;

    var qtdDuracao = parseInt(document.getElementById("qtdDuracao").innerText);
    var qtdCrianca = parseInt(document.getElementById("qtdCrianca").innerText);
    var qtdAdultos = parseInt(document.getElementById("qtdAdulto").innerText);

    var duracao = document.getElementById("qtdDuracao");
    var criancas = document.getElementById("qtdCrianca");
    var adulto = document.getElementById("qtdAdulto");

    var resRefri = document.getElementById("resulRefri");
    var resCerveLata = document.getElementById("resulCerLata");
    var resCerveja = document.getElementById("resulCer");


    el.addEventListener('click', function (e) {
        var element = e.target.id;

        console.log(element);

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


        let qtdTotalCarne = carnePP(qtdDuracao) * qtdAdultos + (carnePP(qtdDuracao) / 2 * qtdCrianca);


        // Qunatidade de convidados
        resConvidados.innerHTML = `<p>${qtdAdultos}</p>`;
        resConvidados.innerHTML += `<p>${qtdCrianca}</p>`;

        // Quantidade de carnes
        resCarnes.innerHTML = `<p>${qtdTotalCarne / 1000} Kg</p>`
        resCarnes.innerHTML += `<p>${(qtdTotalCarne / 1000) / 2} Kg</p>`

        clicado(qtd);
    });

    var qtdTotalCervejaLata = cervejaLata(qtdDuracao) * qtdAdultos
    var qtdTotalCerveja = cerveja(qtdDuracao) * qtdAdultos
    var qtdTotalBebidas = bebidasPP(qtdDuracao) * qtdAdultos + (bebidasPP(qtdDuracao) / 2 * qtdCrianca);

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
                clicado(qtd);
                console.log(clicado(qtd));
                break;
            case "tp-cerveja-lata":
            case "bb-cerveja-lata":
            case "cerveja-lata":
            case "icon-cerveja-lata":
                if (cervejaLata.innerText != "-") {
                    // console.log(cervejaLata.innerText);
                } else {
                    cervejaLata.innerText = 0;
                }
                break
            case "tp-refrigerante":
            case "bb-refrigerante":
            case "refrigerante":
            case "icon-refrigerante":
                if (refri.innerText != "-") {
                    // console.log(refri.innerText);
                } else {
                    refri.innerText = 0;
                }
                break;
            default:
                break;
        }
    });


    function clicado(qtd) {
        if (cervejaLata.innerText == "-") {
            // console.log(cerveja.innerText);
            qtd = 0;
            cerveja.innerText = 0;
            return qtd;
        } else {
            qtd = 2;
            return qtd;
        }
    }

    function teste() {
        //Quantidade bebidas
        if (qtd >= 1) {
            console.log("bebidas");
            resCerveja.innerHTML = `<p>${Math.ceil(qtdTotalCerveja / 600)} Garrafas</p>`
            resCerveLata.innerHTML = `<p>${Math.ceil(qtdTotalCervejaLata / 355)} Latas</p>`
            resRefri.innerHTML = `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas</p>`
        } else {
            console.log("não bebidas");
        }
    }

    // Calcular quantidades
    function carnePP(qtdDuracao) {
        if (qtdDuracao >= 6) {
            return 650;
        } else {
            return 400
        }
    }
    function cerveja(qtdDuracao) {
        if (qtdDuracao >= 6) {
            return 5500;
        } else {
            return 3000
        }
    }
    function cervejaLata(qtdDuracao) {
        if (qtdDuracao >= 6) {
            return 5500;
        } else {
            return 3000
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