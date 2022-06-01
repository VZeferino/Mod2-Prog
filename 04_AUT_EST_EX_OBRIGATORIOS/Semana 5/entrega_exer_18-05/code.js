function calcularS(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    document.getElementById("showSoma").innerHTML= "<p>O resultado da soma é: "+ (num1+num2) + "</p>"
}
function calcularME(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    document.getElementById("showMenos").innerHTML= "<p>O resultado da subtração é: "+ (num1-num2) + "</p>"
}
function calcularMU(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    document.getElementById("showMultiplicação").innerHTML= "<p>O resultado da multiplicação é: "+ (num1*num2) + "</p>"
}
function calcularDI(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    document.getElementById("showDivisão").innerHTML= "<p>O resultado da divisão é: "+ (num1/num2) + "</p>"
}
function calcularIN(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    document.getElementById("showInteiro").innerHTML= "<p>O resultado do inteiro da divisão é: " + Math.floor(num1/num2) + "</p>"
}
function calcularRE(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    document.getElementById("showResto").innerHTML= "<p>O resultado do resto da divisão é: "+ (num1%num2) + "</p>"
}
function notas() {
    var price = document.getElementById("preço").value;
    var cont100 = 0;
    var cont50 = 0;
    var cont20 = 0;
    var cont10 = 0;
    var cont5 = 0;
    var cont2 = 0;
    var cont1 = 0;

    if (price >= 100) {
        cont100 = Math.floor(price / 100);
        price = price - (cont100 * 100);
    };
    if (price >= 50) {
        cont50 = Math.floor(price / 50);
        price = price - (cont50 * 50);
    };
    if (price >= 20) {
        cont20 = Math.floor(price / 20);
        price = price - (cont50 * 50);
    };
    if (price >= 10) {
        cont10 = Math.floor(price / 10);
        price = price - (cont10 * 10);
    };
    if (price >= 5) {
        cont5 = Math.floor(price / 5);
        price = price - (cont5 * 5);
    };
    if (price >= 2) {
        cont2 = Math.floor(price / 2);
        price = price - (cont2 * 2);
    };
    if (price > 0) {
        cont1 = 1;
    };
    document.getElementById("show").innerHTML =
        "notas 100: " + cont100 + 
        " notas 50: " + cont50 + 
        " notas 20: " + cont20 +
        " notas 10: " + cont10 + 
        " notas 5: " + cont5 + 
        " notas 2: " + cont2 +
        " notas 1: " + cont1;
}
function achar() {
    var listString=document.getElementById("lista").value;
    var listNumber=listString.split(',').map(Number);
    var foco=document.getElementById("num").value;
    Number.foco
    for (var i = 0; i < listNumber.length; i++) {
        for (var j = 0; j < (listNumber.length - i - 1); j++) {
            if (listNumber[j] > listNumber[j + 1]) {
                var temp = listNumber[j];
                listNumber[j] = listNumber[j + 1];
                listNumber[j + 1] = temp;
            };
        };
    };
    var size = listNumber.length;
    esquerda = 1;
    direita = size - 1;
    for (i = 0; i <= size; i++) {
        var meio = Math.floor((esquerda + direita) / 2);
        if (meio == foco) {
            document.getElementById("show").innerHTML = i + 1 + "° posição";
        } else if (meio < foco) {
            esquerda = meio + 1;
        } else if (meio > foco) {
            direita = meio - 1;
        } else {
        };
    };
    document.getElementById("show").innerHTML = "A lista ordenada na forma crescente é: " + listNumber + " E o número escolhido está na posição: " + meio;
}