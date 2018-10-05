var numeroSorteado = 8;

var input = document.querySelector("#primeiro-input");
console.dir(input.value);

var button = document.querySelector("#btn");

button.addEventListener("click", function(){
  var value = input.value;
//console.log(value);
//string vazia é false. ! é a negação ->se não tiver nada no valor do input
  if(!value){
    alert("Insira um número");
    //para a execução da função
    return;
  }
  if(value == numeroSorteado){
    alert("Você acertou");
  }else{
    alert("Você errou");
  }
});
//a função como parâmetro será executada toda vez que o evento ocorrer no elemento input
input.addEventListener("keyup", function(){
 var value = input.value;
 //se o value é um não número, limpar o input
if(window.isNaN(value)){
  input.value = "";
}
})

//checa se o botão realmente existe para executar as ações
//if(btn !== null){

//}
