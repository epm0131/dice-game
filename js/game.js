(function diceGame() {

  var startTime = new Date();

  var ettoreGame = {
    ettoreStart: startTime,
    ettoreRound: []
  }

  function setDateTime(){
    ettoreGame.startDate = ( '' + startTime.getFullYear() + "-" + (startTime.getMonth()+ 1) + "-" + startTime.getDate() + " " + startTime.getHours() +":"+ startTime.getMinutes());
    return "Game Started " + ettoreGame.startDate;
  }

  document.querySelector('.game-start').innerText = setDateTime();
  console.log(ettoreGame);

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


    document.querySelector('.dice aside:first-child').innerText = dieOne;
    document.querySelector('.dice aside:last-child').innerText = dieTwo;

    if (score === 11 || score === 7) {
      document.querySelector('.result').innerText = "Winner!"
      document.querySelector('.message').innerText = setMessage();
      ettoreGame.ettoreRound=[];
      var now = new Date();
      var endGame =  ( now.getHours() +":"+ now.getMinutes() );

    }
    else{
      document.querySelector('.result').innerText = "Try Again"
      document.querySelector('.message').innerText = "";
    }


    });


})();
