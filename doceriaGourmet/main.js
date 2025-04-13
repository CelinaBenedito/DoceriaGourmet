var valorbrigadeiro = 0;
var valormacarons = 0;
var valorcupcakes = 0;
var valorcheescakes = 0;

var total = 0;

var qtdbrigadeiro = 0;
var qtdmacarons = 0;
var qtdcupcakes = 0;
var qtdcheescakes = 0;

var ORIGINALqtdbrigadeiro = 0;
var ORIGINALqtdmacarons = 0;
var ORIGINALqtdcupcakes = 0;
var ORIGINALqtdcheescakes = 0;
function registrar() {
    var quantidade = Number(ipt_qtd.value);
    var tipo = Number(ipt_tipo.value);
    var valor = Number(ipt_valor.value);

    if (quantidade <= 0) {
        alert("Quantidade inválida");
    }
    else if (valor <= 0) {
        alert("Valor inválido");
    }
    else {
        if (tipo == 1) {
            valormacarons = valor;
            qtdmacarons = quantidade;
            ORIGINALqtdmacarons = quantidade;

            alert(`Valor registrado com suceso foram ${qtdmacarons} macarons`);
        }
        else if (tipo == 2) {

            valorbrigadeiro = valor;
            qtdbrigadeiro = quantidade;

            ORIGINALqtdbrigadeiro = quantidade;

            alert(`Valor registrado com suceso foram ${qtdbrigadeiro} brigadeiros`);
        }
        else if (tipo == 3) {
            valorcupcakes = valor;
            qtdcupcakes = quantidade;

            ORIGINALqtdcupcakes = quantidade;

            alert(`Valor registrado com suceso foram ${qtdcupcakes} cupcakes`);
        }
        else if (tipo == 4) {
            valorcheescakes = valor;
            qtdcheescakes = quantidade;

            ORIGINALqtdcheescakes = quantidade;

            alert(`Valor registrado com suceso foram ${qtdcheescakes} cheescakes`);
        }
    }


}
function verificar() {
    var contador = 1;
    titulo_tabela.innerHTML = ""
    div_tabela.innerHTML = "";
    div_resposta.innerHTML = "";

    total = (qtdbrigadeiro + qtdcheescakes + qtdcupcakes + qtdmacarons);
    var valortotal = ((valormacarons * qtdmacarons) + (valorbrigadeiro * qtdbrigadeiro) + (valorcupcakes * qtdcupcakes) + (valorcheescakes * qtdcheescakes));


    if (total > 0) {
        for (var c1 = 0; total > c1; c1++) {
            if (qtdmacarons > 0) {
                for (let c2 = 0; qtdmacarons > c2; c2++) {
                    //Container.innerHTML 
                    div_tabela.innerHTML += `
                        <div class="total">
                        <p class="resultado" id="div_numeroVenda">${contador}  </p>
                        <div class="resultado imagem"><img src="assets/macaron.png" alt="Macarrons"></div>
                        <div id="div_valor"><div class="resultado"> R$${valormacarons}</div>
                        </div>`;

                    contador++
                    qtdmacarons--

                }
            }
            else if (qtdbrigadeiro > 0) {
                for (var c3 = 0; qtdbrigadeiro > c3; c3++) {
                    div_tabela.innerHTML += `
                        <div class="total">
                        <p class="resultado" id="div_numeroVenda">${contador}  </p>
                        <div class="resultado imagem"><img src="assets/brigadeiro_gourmet.jpg" alt="Brigadeiro Gourmet"></div>
                        <div id="div_valor"><div class="resultado"> R$${valorbrigadeiro}</div>
                        </div>`;
                    qtdbrigadeiro--
                    contador++
                }
            }
            else if (qtdcupcakes > 0) {
                for (var c4 = 0; qtdcupcakes > c4; c4++) {
                    div_tabela.innerHTML += `
                        <div class="total">
                        <p class="resultado" id="div_numeroVenda">${contador}  </p>
                        <div class="resultado imagem"><img src="assets/cupcake.jpg" alt="cupcake"></div>
                        <div id="div_valor"><div class="resultado"> R$${valorcupcakes}</div>
                        </div>`;
                    qtdcupcakes--
                    contador++
                }
            }

            else if (qtdcheescakes > 0) {
                for (var c5 = 0; qtdcheescakes > c5; c5++) {
                    div_tabela.innerHTML += `
                        <div class="total">
                        <p class="resultado" id="div_numeroVenda">${contador}  </p>
                        <div class="resultado imagem"><img src="assets/cheescake.png" alt="Fatia de cheescake"></div> R$${valorcheescakes}</div>
                        </div>`;

                    //div_valor.innerHTML += `<div class="resultado">R$${valorcheescakes}</div>`;
                    //div_imagem.innerHTML += `<div class="resultado"><br></div>`;
                    qtdcheescakes--
                    contador++
                }
            }
        }
        titulo_tabela.innerHTML = `Numero da venda   -   Imagem do doce   -   R$ Valor unitario`

        div_resposta.innerHTML = `Com a quantidade de ${ORIGINALqtdmacarons} Macarons, ${ORIGINALqtdbrigadeiro} Brigadeiros, ${ORIGINALqtdcupcakes} Cupcakes e ${ORIGINALqtdcheescakes} Cheesecakes, a venda totalizará R$${valortotal}`
    }
    else {
        alert("Sem dados");
    }

}
function limpar() {
    titulo_tabela.innerHTML = ""
    div_tabela.innerHTML = "";
    div_resposta.innerHTML = "";
}
function limparA() {
    div_reviews.innerHTML = "";

}
function reviews() {

    div_reviews.innerHTML = "";
    let quantidade = Number(ipt_random.value);


    let imgEstrela;
    let nome;
    let sobrenome;
    let img;


    if (quantidade > 0) {

        for (let c = 0; quantidade > c; c++) {
            imgEstrela = ""
            let nota = Math.random();
            nota *= 4;
            nota = Math.round(nota) + 1;

            img = Math.random();
            img *= 10;
            img = Math.round(img);

            nome = Math.random();
            nome *= 10;
            nome = Math.round(nome);

            sobrenome = Math.random();
            sobrenome *= 10;
            sobrenome = Math.round(sobrenome);

            if (sobrenome >= 0) {
                if (sobrenome == 0) {
                    sobrenome = "Tavares";
                }
                else if (sobrenome == 1) {
                    sobrenome = "Carvalho";
                }
                else if (sobrenome == 2) {
                    sobrenome = "Monteiro";
                }
                else if (sobrenome == 3) {
                    sobrenome = "Silveira";
                }
                else if (sobrenome == 4) {
                    sobrenome = "Almeida";
                }
                else if (sobrenome == 5) {
                    sobrenome = "Torres";
                }
                else if (sobrenome == 6) {
                    sobrenome = "Martins";
                }
                else if (sobrenome == 7) {
                    sobrenome = "Duarte"
                }
                else if (sobrenome == 8) {
                    sobrenome = "Freitas";
                }
                else if (sobrenome == 9) {
                    sobrenome = "Rocha";
                }
                else if (sobrenome == 10) {
                    sobrenome = "Santana";
                }
            }

            if (nome >= 0) {
                if (nome == 0) {
                    nome = "Miguel";
                }
                else if (nome == 1) {
                    nome = "Luna";
                }
                else if (nome == 2) {
                    nome = "Eduardo";
                }
                else if (nome == 3) {
                    nome = "Isabela";
                }
                else if (nome == 4) {
                    nome = "Thiago";
                }
                else if (nome == 5) {
                    nome = "Bianca";
                }
                else if (nome == 6) {
                    nome = "Enzo";
                }
                else if (nome == 7) {
                    nome = "Helena";
                }
                else if (nome == 8) {
                    nome = "Gustavo";
                }
                else if (nome == 9) {
                    nome = "Melissa";
                }
                else if (nome == 10) {
                    nome = "Celina";
                }
            }
            for(let e = 0; nota>e; e++){
                imgEstrela+='<img src="assets/estrela.png">'
                
            }
            div_reviews.innerHTML += `
        <div class="card">
            <p>Avaliação do(a): </p>
            <div class="cabeçalho">
                <div class="imagem">
                    <img src="assets/fotos de perfil/foto${img}.png">
                </div>
                <div class="nome">
                    <p>${nome} ${sobrenome}</p>
                </div>
            </div>

            <div class="nota">
                <p>${imgEstrela}</p>
            </div>
        </div>
    `;
        }
    }
    else {
        alert("Valor inválido")
    }



}