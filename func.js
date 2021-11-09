var counter = 0;
var CountButtonClicks = 0;
var buttonColours = ["green", "yellow", "red", "blue"]; 

// array to calculate the game levels
var gameChoose = [];
var userChoose = [];

  //Tap on any key in order to start the game
  $(document).keypress(function() {
    document.getElementById("title").innerHTML = "Level "+ (counter+1);
    nextSequence();
  }); 

// Choosing random number in order to pick random color
function nextSequence(){
    document.getElementById("title").innerHTML = "Level "+ (counter+1);
    var randomNumber = Math.floor(Math.random() *4); // random number between 0-3 include
    var randomChosenColour = buttonColours[randomNumber];

    // making the chosen color to react and fade in
    for (var i=0; i<5; i++)
    {
        if ($("div")[i].classList.contains(randomChosenColour))
        {
            $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

            gameChoose.push(randomChosenColour);
        }
    }
    userChoose = [];

}

// Enetering the user selction to an array 
$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");
    userChoose.push(userChosenColour); // the user choices get into array

    $("#" + $(this).attr("id")).fadeIn(100).fadeOut(100).fadeIn(100);

        CountButtonClicks++;

        if (CountButtonClicks === gameChoose.length){
            checkAnswer();
        }
        else if (gameChoose[CountButtonClicks-1] !== userChoose[CountButtonClicks-1])
        {
            wrong();
        }

  });

// Comparing between the user choices array to the game choises array
function checkAnswer() {
    CountButtonClicks=0;

    if(arraysAreIdentical(gameChoose, userChoose))
    {
        counter++;
        setTimeout(function () {
             nextSequence(); }, 1000);
    }

     else {
         wrong();
    }
}

function wrong(){
    $("body").addClass("game-over");

    document.getElementById("title").innerHTML = "Game over! 😭 Press any key to start over";

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 2000);

      startOver();
    }

function arraysAreIdentical(arr1, arr2){
    if (arr1.length !== arr2.length) 
    {
        return false;
    }
    var  len = arr1.length;
    for (var i = 0; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 
}

function startOver(){
counter = 0;
gameChoose = [];
userChoose = [];
CountButtonClicks = 0;

}