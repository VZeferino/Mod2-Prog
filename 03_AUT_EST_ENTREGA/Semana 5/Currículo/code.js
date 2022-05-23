var um =true;
var dois =false;
var tres =false;
var quatro =false;
var cinco =false;

function aler1(){
    alert("Por que clicou de novo?")
}

function aler2(){
    alert("Você mais uma vez?! Não clique mais.")
}

function aler3(){
    alert("Cansei. Se clicar, sofrerá as consequências.")
}

function aler4(){
    alert("Ok, tchau!!!")
}



function java(){
    if (um == true) {
        alert("Eu disse para não clicar");
        um=false
        dois = true
    } else if (dois == true) {
        aler1()
        dois = false
        tres = true
    } else if (tres == true) {
        aler2()
        tres=false
        quatro=true
    } else if (quatro==true){
        aler3()
        quatro=false
        cinco=true
    } else if (cinco=true){
        aler4()
        close()
    }
}