
(function() {
  var numeroSorteado = 8;

  var input = document.querySelector("#first-input");
  console.dir(input.value);

  var button = document.querySelector("#btn-play");
  var regraDeContagem = 3;
  var clickDoUsuario = 0;

  function avisaQueNaoEhUmNumero() {
    alert("Insira um número");
  }

  function acertou() {
    alert("Você acertou");
  }

  function errou() {
    alert("Você errou");
  }

  button.addEventListener("click", function(){
    var value = input.value;

    if(!value){
      avisaQueNaoEhUmNumero();
      return;
    }
    if(value == numeroSorteado){
      acertou();
      clickDoUsuario = 0;
      input.value = "";
      input.focus();
    }else{
      errou();
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

  input.addEventListener("keyup", function(){
   var value = input.value;

  if(window.isNaN(value)){
    input.value = "";
  }
  })

  var tryAgain = document.querySelector("#btn-reset");
  tryAgain.addEventListener("click", function(){
    if(clickDoUsuario == 3){
      clickDoUsuario = 0;
      button.disabled = false;
      input.disabled = false;
    }
  })

})();
