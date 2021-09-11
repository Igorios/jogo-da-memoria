(function(){
    let images = [];

    let flippedCards = [];

    for(let i = 0; i < 16; i++) {
        let img = {
            src: "image/" + i + ".png",
            id: i % 8
        };
        images.push(img);
    };

    startGame();

    function startGame() {
        flippedCards = [];
        images = randomSort(images);

        let frontFaces = document.getElementsByClassName('front');

        for(let i = 0; i < 16; i++) { //Todos os cards
            let card = document.querySelector("#card" + i);
            //Distribuição//
            card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
            card.style.top = i < 8 ? 5 + "px" : 250 + "px";

            card.addEventListener('click', flipCard, false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute('id', images[i].id);
        }
    };

    function randomSort(oldArray) {
        //console.log(Math.floor(Math.random()*17));
        let newArray = [];

        while(newArray.length !== oldArray.length) {
            let i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0) {
                newArray.push(oldArray[i]);
            }
        }
        return newArray;
    }

    function flipCard() {
        if(flippedCards.length < 2) {
            let faces = this.getElementsByClassName('face');
            //Impedindo de clicar duas vezes na mesma carta
            if(faces[0].classList.length > 2) {
                return;
            }

            //Criando classes sem o html//
            faces[0].classList.toggle('flipped'); //Se possuir ele cria, caso contrário ele remove
            faces[1].classList.toggle('flipped');

            flippedCards.push(this);
        } else {
            flippedCards[0].childNodes[1].classList.toggle('flipped');
            flippedCards[0].childNodes[3].classList.toggle('flipped');
            flippedCards[1].childNodes[1].classList.toggle('flipped');
            flippedCards[1].childNodes[3].classList.toggle('flipped');

            flippedCards = [];
        }
    };

}());