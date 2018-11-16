
(function() {
  var numeroSorteado = Math.round(Math.random() * 10);

  var input = document.querySelector("#first-input");


  var button = document.querySelector("#btn-play");
  var regraDeContagem = 3;
  var clickDoUsuario = 0;

  var message = document.querySelector("#message");

  var numeroDeVezesQuePerdeu = 0;
  atualizaPerdeu();

  var acertos = 0;
  atualizaAcertos();

  
  var numeroDeVezesQueJogou = 0;
  vezesJaJogou();

  function avisaQueNaoEhUmNumero() {
    message.innerHTML = "Insira um número válido para jogar!"
  }

  function acertou() {
    message.innerHTML = "Você acertou, o número oculto é " + numeroSorteado + "!"
  }

  function errou() {
    var chances = regraDeContagem - clickDoUsuario;
    if(chances == 2) {
      message.innerHTML = "Você errou, mas ainda tem mais " + chances + " chances!"
    }else if(chances == 1) {
        message.innerHTML = "Você errou, mas ainda tem mais " + chances + " chance!"
    }else{
        message.innerHTML = "Você errou! O número oculto era " + numeroSorteado + "!"
    }
    tentou();
  }

  function tentou() {
    var numeroQueTentou = document.querySelector("#tentou");
    if(input.value !== numeroSorteado){
    numeroQueTentou.innerHTML = "Você tentou o número " + input.value + ".";
  }
    }

  function vezesJaJogou() {
    var quantasVezesJogou = document.querySelector("#jogou");
      quantasVezesJogou.innerHTML = numeroDeVezesQueJogou;
   }


  function gerarNovoNumero() {
    numeroSorteado = Math.round(Math.random() * 10);
  }

  function atualizaPerdeu() {
    var vezesQuePerdeu = document.querySelector("#perdeu");
    vezesQuePerdeu.innerHTML = numeroDeVezesQuePerdeu;
    numeroDeVezesQueJogou = numeroDeVezesQueJogou + 1;
    vezesJaJogou();
  }

  function atualizaAcertos() {
    var vezesQueAcertou = document.querySelector("#acertou")
    vezesQueAcertou.innerHTML = acertos;
    numeroDeVezesQueJogou = numeroDeVezesQueJogou + 1;
    vezesJaJogou();
  }

  button.addEventListener("click", function(){
    var value = input.value;

    if(!value){
      avisaQueNaoEhUmNumero();
      return;
    }
    clickDoUsuario = clickDoUsuario + 1;
    if(value == numeroSorteado){
      acertou();
      clickDoUsuario = 0;
      input.value = "";
      input.focus();
      acertos = acertos + 1;
      atualizaAcertos();
      gerarNovoNumero();
    }else{
      errou();
      input.value = "";
      input.focus();
    }

    if(clickDoUsuario >= 3){
      button.disabled = true;
      input.disabled = true;
      numeroDeVezesQuePerdeu = numeroDeVezesQuePerdeu + 1;
      atualizaPerdeu();
    }
  });

  input.addEventListener("keyup", function(){
   var value = input.value;

  if(window.isNaN(value)){
    //input.value = "";
      message.innerHTML = "Insira um número válido para jogar!"
      button.disabled = true;
  }
  else{
    button.disabled = false;
    message.innerHTML = "";
  }
  })

  var tryAgain = document.querySelector("#btn-reset");
  tryAgain.addEventListener("click", function(){
    message.innerHTML = "";
    if(clickDoUsuario == 3){
      clickDoUsuario = 0;
      button.disabled = false;
      input.disabled = false;
      gerarNovoNumero();
    }
  })

})();

