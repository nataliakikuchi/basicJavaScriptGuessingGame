const events = (function() {
  const button = document.querySelector("#btn-play");

  function listenPlayButton(onClickPlay) {
    button.addEventListener("click", function(){
      onClickPlay();
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

// listenPlayButton(a, function(){
//   dasdsadas
// })