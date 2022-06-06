function soma(){
    var valor = document.getElementById("valor").value;
    valor = parseInt(valor);
    valor += 1;
    document.getElementById("valor").value = valor
}
function subtracao(){
    var valor = document.getElementById("valor").value;
    valor = parseInt(valor);
    valor -= 1
    document.getElementById("valor").value = valor
}

function troca(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    document.getElementById("valor2").value = valor1
    document.getElementById("valor1").value = valor2
}

function formatoNumero() {
    var celular = document.getElementById("celular").value
    var cleaned = ('' + celular).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      resultado = ('(' + match[1] + ') ' + match[2] + '-' + match[3])
      document.getElementById("result").innerHTML = resultado
    }
    else if (!match) {
        return console.log('foi nao')
    }
    return null
  }

function calcular(){
    var pessoas = document.getElementById("pessoas").value
    var periodo = document.getElementById("período").value
    if ((periodo == "diurno") && (pessoas<=50)){
        var valor1= parseInt(pessoas*200);
        document.getElementById("valor001").innerHTML = "<p>O valor que deverá ser pago é: " + String(valor1) + "</p>";
    }
    if ((periodo == "diurno") && (pessoas>50)){
        var valor1= parseInt(pessoas*200*0.6);
        document.getElementById("valor001").innerHTML = "<p>O valor que deverá ser pago é: " + String(valor1) + "</p>";
    }
    if ((periodo == "noturno") && (pessoas<=50)){
        var valor1= parseInt(pessoas*100);
        document.getElementById("valor001").innerHTML = "<p>O valor que deverá ser pago é: " + String(valor1) + "</p>";
    }
    if ((periodo == "noturno") && (pessoas>50)){
        var valor1= parseInt(pessoas*100*0.8);
        document.getElementById("valor001").innerHTML = "<p>O valor que deverá ser pago é: " + String(valor1) + "</p>";
    }
    }
    function tabelaAlunos(){
    var linhas =document.getElementById("quantidadeAlunos").value
    var counter =0
    while (counter<linhas){
        counter+=1
        document.getElementById("tabelaFormada").innerHTML += 
        `<span>
        <input id="prov${counter}" placeholder="Nota da prova: ">
        </span>`;
        document.getElementById("tabelaFormada").innerHTML +=
        `<span>
        <input id="trab${counter}" placeholder="Nota do trabalho: ">
        </span><br>`;
    }
    document.getElementById('tabelaFormada').innerHTML += `
    <button onclick="notaAlunos()" id="botaoFinal">Calcular tudo</button>`
    }
    function calc(){
        debugger
        const numeroAlunos = document.getElementById("inputAlunos").value;
        for (i = 0; i< numeroAlunos; i++){
            var numProv = document.getElementById(`${i}`).value;
            var numTrab = document.getElementById(`tr${i}`).value;
            numProv = parseInt(numProv);
            numTrab = parseInt(numTrab);
            var geral = 0;
            var medProv = 0;
            var medTrab = 0;
            geral = geral + (numProv + numTrab)/numeroAlunos;
            var media = (numProv*2 + numTrab*3)/5;
            medProv = medProv + (numProv)/numeroAlunos;
            medTrab = medTrab + (numTrab)/numeroAlunos;
            document.getElementById("aparecer").innerHTML += 
            `<div id="show">
                <p1>A média do aluno ${i+1} é: ${media}</p1>
            </div>`; 
        }
    }