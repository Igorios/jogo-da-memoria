(function(){
    let images = [];
    let matches = 0;
    let flippedCards = [];
    let modalGameOver = document.querySelector("#modalGameOver");

    for(let i = 0; i < 16; i++) {
        let img = {
            src: "image/" + i + ".png",
            id: i % 8
        };
        images.push(img);
    };

    startGame();

    function startGame() {
        matches = 0;
        flippedCards = [];
        images = randomSort(images);

        let frontFaces = document.getElementsByClassName("front");
        let backFaces = document.getElementsByClassName("back");

        for(let i = 0; i < 16; i++) { //Todos os cards
            frontFaces[i].classList.remove("flipped", "match");
            backFaces[i].classList.remove("flipped", "match");

            let card = document.querySelector("#card" + i);
            //Distribuição//
            card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
            card.style.top = i < 8 ? 5 + "px" : 250 + "px";

            card.addEventListener('click', flipCard, false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute('id', images[i].id);
        }

        modalGameOver.style.zIndex = -2;
        modalGameOver.removeEventListener('click', startGame);
    };

    function randomSort(oldArray) {
        //console.log(Math.floor(Math.random()*17));
        let newArray = [];

        while(newArray.length !== oldArray.length) {
            let i = Math.floor(Math.random()*oldArray.length, false);

            if(newArray.indexOf(oldArray[i]) < 0) {
                newArray.push(oldArray[i]);
            }
        }
        return newArray;
    }

    function flipCard() {
        if(flippedCards.length < 2) {
            let faces = this.getElementsByClassName("face");
            //Impedindo de clicar duas vezes na mesma carta
            if(faces[0].classList.length > 2) {
                return;
            }

            //Criando classes sem o html//
            faces[0].classList.toggle('flipped'); //Se possuir ele cria, caso contrário ele remove
            faces[1].classList.toggle('flipped');

            flippedCards.push(this);

            if(flippedCards.length === 2) {
                if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id) {
                    flippedCards[0].childNodes[1].classList.toggle('match');
                    flippedCards[0].childNodes[3].classList.toggle('match');
                    flippedCards[1].childNodes[1].classList.toggle('match');
                    flippedCards[1].childNodes[3].classList.toggle('match');

                    matches++;

                    flippedCards = [];

                    if(matches === 8) {
                        gameOver();
                    }
                }
            }
        } else {
            flippedCards[0].childNodes[1].classList.toggle('flipped');
            flippedCards[0].childNodes[3].classList.toggle('flipped');
            flippedCards[1].childNodes[1].classList.toggle('flipped');
            flippedCards[1].childNodes[3].classList.toggle('flipped');

            flippedCards = [];
        }
    };

    function gameOver() {
        modalGameOver.style.zIndex = 10;
        modalGameOver.addEventListener('click', startGame, false);
    }

}());