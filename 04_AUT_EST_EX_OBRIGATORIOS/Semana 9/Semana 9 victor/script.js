function calcule(){
    var number = document.getElementById("valor").value;
    centena = Number(number[0]);
    if (number >= 100 && number != ""){
        if (centena % 2 == 0){
            resultado = "A centena é par";
        } else {
            resultado = "A centena é ímpar";
        }
    } else{
        resultado = "Digite um número válido"
    }
    document.getElementById("resultado").innerHTML = resultado 
}

function soma(){
    var number = document.getElementById("valor1").value
    var resultado = 0
    for(var i = 0; i!= number.length; i++){
        numero = parseInt(number[i]);
        resultado += numero
    }
    document.getElementById("resultado1").innerHTML = resultado
}

function nomes(){
    var nome1 = document.getElementById("nome1").value
    var nome2 = document.getElementById("nome2").value
    var nome3 = document.getElementById("nome3").value
    var nomes = [nome1, nome2, nome3];
    nomes = nomes.sort();
    document.getElementById("resultado2").innerHTML = nomes
}

function aparecer(){
    num = document.getElementById("nesimo").value;
    penultimo = 0;
    ultimo = 1;
    var numero;
    array = [1];

    if(num <= 2){
        numero = num - 1
        array.push(numero)
    } else{
        debugger
        for (var i = 2; i <= num; i++){
            numero = ultimo + penultimo;
            penultimo = ultimo
            ultimo = numero
            array.push(numero)
        }
    }
    document.getElementById("resultado3").innerHTML = array
}