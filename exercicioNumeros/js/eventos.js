const events = (function() {
  const button = document.querySelector("#btn-play");

  function listenPlayButton() {
    button.addEventListener("click", function(){
      console.log('clickedd')
    });
  }

  return {
    listenPlayButton: listenPlayButton,
  }
})();

events.listenPlayButton();
