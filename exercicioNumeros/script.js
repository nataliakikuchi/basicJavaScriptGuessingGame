var numeroSorteado = 8;

var input = document.querySelector("#primeiro-input");
console.dir(input.value);

var button = document.querySelector("#btn");

button.addEventListener("click", function(){
  var value = input.value;
  if(input.value == numeroSorteado){
    alert("Você acertou");
  }else{
    alert("Você errou");
  }
});

//checa se o botão realmente existe para executar as ações
//if(btn !== null){

//}
