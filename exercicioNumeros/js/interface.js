const interface = (function() {
  const messageField = document.querySelector("#message");

  function insertMessage(message) {
    messageField.innerHTML = message;
  }

  return {
    insertMessage: insertMessage,
  }
})();


