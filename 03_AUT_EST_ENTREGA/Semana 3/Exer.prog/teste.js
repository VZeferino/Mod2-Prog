var gravidade=10
function hmax(){
    velo0 = document.getElementById("velo0").value;
    resultado=((velo0 * velo0)/(2 * gravidade))
    alert(resultado);
} 
function time(){
    velo0 = document.getElementById("velot").value;
    resultado=(velo0/gravidade)
    alert(resultado);
}