document.querySelector(".random").addEventListener("click", function() {
    console.log('Click');
    var ranum1 = Math.random();
    ranum1 = ranum1 * 6;
    ranum1 = Math.floor(ranum1 + 1);
    var ranum_one = 'images/dice3.png'

    var ranum2 = Math.random();
    ranum2 = ranum2 * 6;
    ranum2 = Math.floor(ranum2 + 1);

    console.log(ranum1);
    console.log(ranum2);

    document.querySelector('.imgone').setAttribute('src', 'images/dice'+ ranum1 +'.png');
    document.querySelector('.imgtwo').setAttribute('src', 'images/dice'+ ranum2 +'.png');

    if (ranum1 === ranum2) {
        document.querySelector('h1').innerHTML = 'Draw!';
    } else if (ranum1 > ranum2){
        document.querySelector('h1').innerHTML = 'Player 1 Won!';
    } else {
        document.querySelector('h1').innerHTML = 'Player 2 Won!';
    }
});

