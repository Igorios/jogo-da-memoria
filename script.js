(function(){
    startGame();

    function startGame() {
        for(let i = 0; i < 16; i++) { //Todos os cards
            let card = document.querySelector("#card" + i);
            //Distribuição//
            card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
            card.style.top = i < 8 ? 5 + "px" : 250 + "px";

            card.addEventListener('click', flipCard, false);
        }
    }

    function flipCard() {
        var faces = this.getElementsByClassName('face');
        //Criando classes sem o html//
        faces[0].classList.toggle('flipped');
        faces[1].classList.toggle('flipped');
    }

}());