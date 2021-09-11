(function(){
    let images = [];

    for(let i = 0; i < 16; i++) {
        let img = {
            src: "image/" + i + ".png",
            id: i % 8
        };
        images.push(img);
    };

    startGame();

    function startGame() {
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
        let faces = this.getElementsByClassName('face');
        //Criando classes sem o html//
        faces[0].classList.toggle('flipped');
        faces[1].classList.toggle('flipped');
    };

}());