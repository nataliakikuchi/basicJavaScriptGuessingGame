const game = (function() {
    // events é um object
    // nesse object temos a propriedade 'listenPlayButton' que contem uma funcao
    // chamamos essa funcao
    events.listenPlayButton(function(){
        const input = document.querySelector("#first-input");
        const inputValue = input.value;
        const result = rules.isValidNumber(inputValue);
        console.log(result);
        if(result == false) {
            messageField.innerHTML = 
        }

    });
})();
