(function diceGame() {

  var ettoreGame = {
    ettoreStart: 0,
    ettoreRound: []

  }
  var dice = {};
  var diceArray = [];

  function setDateTime(){
    var now = new Date();
    dice.startDate = ( '' + now.getFullYear() + "-" + (now.getMonth()+ 1) + "-" + now.getDate() + " " + now.getHours() +":"+ now.getMinutes());
    return "Game Started " + dice.startDate;
  }
  document.querySelector('.game-start').innerText = setDateTime();


  // Use document.querySelector('...') to find HTML elements
  // The argument into the function is a CSS selector!
  // Any HTML element has an `innerText` property that you can
  // access (or change) for the contents of that element.

  document.querySelector('button').addEventListener('click', function buttonClicked() {

    function setMessage()
    {

      return "(It took you " + ettoreGame.ettoreRound.length + " tries and 93 seconds ) ";
    }

    var dieOne = Math.floor(Math.random()* 6 + 1);

    var dieTwo = Math.floor(Math.random()* 6 + 1);

    var score = dieOne + dieTwo;

    ettoreGame.ettoreRound.push(score);


    console.log(score);
    document.querySelector('.dice aside:first-child').innerText = dieOne;
    document.querySelector('.dice aside:last-child').innerText = dieTwo;

    if (score === 11 || score === 7) {
      document.querySelector('.result').innerText = "Winner!"
      document.querySelector('.message').innerText = setMessage();
      ettoreGame.ettoreRound=[];
      var now = new Date();
      var endGame =  ( now.getHours() +":"+ now.getMinutes() );

      counter = 0;
    }
    else{
      document.querySelector('.result').innerText = "Try Again"
      document.querySelector('.message').innerText = "";
    }


    });


})();
