// variables

var wordList = ["atlanta braves", "miami marlins", "new york mets", "philadelphia phillies", "washington nationals", "chicago cubs", "cincinnati reds", "milwaukee brewers", "pittsburgh pirates", "st louis cardinals", "arizona diamondbacks", "colorado rockies", "los angeles dodgers", "san diego padres", "san francisco giants", "baltimore orioles", "boston red sox", "new york yankees", "tampa bay rays", "toronto blue jays", "chicago white sox", "cleveland indians", "detroit tigers", "kansas city royals", "minnesota twins", "houston astros", "los angeles angels", "oakland athletics", "seattle mariners", "texas rangers"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesRemaining = 12;

var guessTotal = [];

var userGuess = null;

var wordToBeGuessed = wordList[Math.floor(Math.random() * wordList.length)];

var arrayFromWord = [];

var html = "<p><h1>";

// functions

function wordBreakdown() {
	for (var i = 0, j = 0; i < wordToBeGuessed.length; i++)	{
		arrayFromWord[j] = wordToBeGuessed.charAt(i); j++

		if (wordToBeGuessed.charAt(i) != " ") {
			arrayFromWord[j] = false;
		} else {
			arrayFromWord[j] = true;
		} j++
	}
}

function consoleLogs() {
	console.log("wins: " + wins + "\n" + "losses: " + losses + "\n");
	console.log("guessesRemaining: " + guessesRemaining + "\n");
	console.log("guessTotal: " + guessTotal + "\n");
	console.log("wordToBeGuessed: " + wordToBeGuessed + "\n");
	console.log("arrayFromWord: " + arrayFromWord + "\n");
	console.log("--------------------------------");
}

function resetGame() {
	guessesRemaining = 12;
	guessTotal = [];
	wordToBeGuessed = wordList[Math.floor(Math.random() * wordList.length)];
	arrayFromWord = [];
	wordBreakdown();
	var htmlInstructions = "<p><h3>Press any key to begin guessing</p></h3>";
	document.querySelector("#instructions").innerHTML = htmlInstructions;
	var htmlGameInitial = "<p><h1>";
	for (var i = 0; i < wordToBeGuessed.length; i++) {
		if (wordToBeGuessed.charAt(i) == " ") {
			htmlGameInitial += "&nbsp;&nbsp;";
		} else {
			htmlGameInitial += "_&nbsp;";
		}
	}

	htmlGameInitial += "</h1></p>"
	document.querySelector("#game").innerHTML = htmlGameInitial;
	var htmlStats = "<p><h3>" + "Wins: " + wins + " Losses: " + losses + " Guesses Left : " + guessesRemaining + "</h3></p>";
	document.querySelector("#stats").innerHTML = htmlStats;
}

function displayProgress()	{
	for (i = 0, j = 0; i < (arrayFromWord.length / 2); i++)	{
		if (arrayFromWord[j+1] == true) {
			html += arrayFromWord[j];
		} else {
			html += "_";
		}
		html += "&nbsp;";
		j = j+2;
	}
	html += "</h1></p>"
	document.querySelector("#game").innerHTML = html;

	htmlStats = "<p><h3>Wins: " + wins + " Losses: " + losses + " Guesses Left : " + guessesRemaining + "</h3></p>";
	document.querySelector("#stats").innerHTML = htmlStats;

	htmlGuesses = "<p><h3>"
	for (var i = 0; i < guessTotal.length; i++) {
		htmlGuesses += guessTotal[i] + "&nbsp;";
	}
	htmlGuesses += "</h3></p>";
	document.querySelector("#guesses").innerHTML = htmlGuesses;

}

function validateUserGuess() {
	if (arrayFromWord.indexOf(userGuess) < 0 && guessTotal.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesRemaining--;
		var audio = new Audio("assets/sounds/13594_1459781221.mp3");
		audio.play();
	}

	if (guessTotal.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessTotal[guessTotal.length]=userGuess;
	}	
	for (var i = 0; i < arrayFromWord.length; i++) {
		if (arrayFromWord[i] === userGuess) {
			// if the letter wasn't previously guessed then play woohoo
			if (arrayFromWord[i+1] == false) {
				var audio = new Audio("assets/sounds/woodbat.mp3");
				audio.play();
			}
			arrayFromWord[i+1] = true;
		}
	}	
}

function hasUserWon() {
	if (arrayFromWord.indexOf(false) < 0 ) {
		console.log("USER WINS");
		wins++;
		var audio = new Audio("assets/sounds/hitcrowdcheer.mp3");
		audio.play();
		var batterImage="<img src=\"assets/images/920x920.jpg\" class=\"img-responsive\" alt=\"Reddick Wins\">";
		document.querySelector("#batterImage").innerHTML = batterImage;
		resetGame();
	}	
}

function hasUserLost() {
	if (guessesRemaining == 0) {
		console.log("USER LOSES");
		losses++;
		var audio = new Audio("assets/sounds/Umpire Saying Youre Out-SoundBible.com-182214840.mp3");
		audio.play();
		var batterImage="<img src=\"assets/images/dt.common.streams.StreamServer.jpg\" class=\"img-responsive\" alt=\"Reddick Wins\">";
		document.querySelector("#batterImage").innerHTML = batterImage;
		resetGame();
	}

}

function resetHtmlVariable() {
	html="<p><h1>";
}

// main game

wordBreakdown();

resetGame();

consoleLogs();

document.onkeyup = function(event) {

	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	validateUserGuess();

	displayProgress();

	consoleLogs();

	resetHtmlVariable();

	hasUserWon();

	hasUserLost();

	consoleLogs();
}

























