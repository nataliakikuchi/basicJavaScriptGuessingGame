const events = (function() {
  const button = document.querySelector("#btn-play");

  function listenPlayButton(funcao) {
    button.addEventListener("click", function(){
      funcao();
    });
  }

  return {
    listenPlayButton: listenPlayButton,
  }
})();


// function listenPlayButton(funcao1, funcao2) {
//   // button.addEventListener("click", function(){
//     funcao1();
//     funcao2();
//   // });
// }

// function a() {
//   asdsadas
// }

// function b() {
//   asdsadas
// }

// listenPlayButton(a, b)