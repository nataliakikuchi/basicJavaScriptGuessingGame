var numeroSorteado = 8;

var input = document.querySelector("#primeiro-input");
console.dir(input.value);

var button = document.querySelector("#btn");
var regraDeContagem = 3;
var clickDoUsuario = 0;

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
    clickDoUsuario = 0;
    input.value = "";
    input.focus();
  }else{
    alert("Você errou");
    input.value = "";
    input.focus();
  }

  clickDoUsuario = clickDoUsuario + 1;
  console.log(clickDoUsuario);
  if(clickDoUsuario >= 3){
    button.disabled = true;
    input.disabled = true;
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

var tryAgain = document.querySelector("#reset");
tryAgain.addEventListener("click", function(){
  if(clickDoUsuario == 3){
  clickDoUsuario = 0;
  button.disabled = false;
  input.disabled = false;
}
})
