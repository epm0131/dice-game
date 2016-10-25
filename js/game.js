var dice = {};//dice object
var diceArray = []; //dice Array


var counter = 0;

function setDateTime()
{
  var now = new Date();
  dice.startDate = ( '' + now.getFullYear() + "-" + (now.getMonth()+ 1) + "-" + now.getDate());
  dice.startTime = ( now.getHours() +":"+ now.getMinutes() );
  return "Game Started " + dice.startDate + " at " + dice.startTime;

}
function setMessage(counter)
{

  return "(It took you " + counter + " tries and 93 seconds ) ";
}


(function diceGame() {

    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

document.querySelector('button').addEventListener('click', function buttonClicked() {
document.querySelector('.game-start').innerText = setDateTime();

        var dieNumOne = document.querySelector('.dice aside:first-child').innerText;

        var dieNumTwo = document.querySelector('.dice aside:last-child').innerText;

        var dieOne = Math.floor(Math.random()* 6 + 1);

        var dieTwo = Math.floor(Math.random()* 6 + 1);

        var score = dieOne + dieTwo;
        counter++;


        console.log(score);
        document.querySelector('.dice aside:first-child').innerText = dieOne;
        document.querySelector('.dice aside:last-child').innerText = dieTwo;

        if (score === 11 || score === 7) {
          document.querySelector('.result').innerText = "Winner!"
          document.querySelector('.message').innerText = setMessage(counter);
          var now = new Date();
          var endGame =  ( now.getHours() +":"+ now.getMinutes() );
          
          counter = 0;
        }
        else{
          document.querySelector('.result').innerText = "Try Again"
          document.querySelector('.message').innerText = "";
        }
        ;

        // else if (score === 11) {
        //   alert("You Win!!!")
        // };









    });


})();
