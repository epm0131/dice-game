(function diceGame() {

    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

        var dieNumOne = document.querySelector('.dice aside:first-child').innerText;

        var dieNumTwo = document.querySelector('.dice aside:last-child').innerText;

        var dieOne = Math.floor(Math.random()* 6 + 1);

        var dieTwo = Math.floor(Math.random()* 6 + 1);

        var score = dieOne + dieTwo;


        console.log(score);
        document.querySelector('.dice aside:first-child').innerText = dieOne;
        document.querySelector('.dice aside:last-child').innerText = dieTwo;

        if (score === 11) {
          alert("You Win!!!")
        }







    });


})();
