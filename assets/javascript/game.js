// variables

var wordList = ["Atlanta Braves", "Miami Marlins", "New York Mets", "Philadelphia Phillies", "Washington Nationals", "Chicago Cubs", "Cincinnati Reds", "Milwaukee Brewers", "Pittsburgh Pirates", "St. Louis Cardinals", "Arizona Diamondbacks", "Colorado Rockies", "Los Angeles Dodgers", "San Diego Padres", "San Francisco Giants", "Baltimore Orioles", "Boston Red Sox", "New York Yankees", "Tampa Bay Rays", "Toronto Blue Jays", "Chicago White Sox", "Cleveland Indians", "Detroit Tigers", "Kansas City Royals", "Minnesota Twins", "Houston Astros", "Los Angeles Angels", "Oakland Athletics", "Seattle Mariners", "Texas Rangers"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesRemaining = 12;

var guessTotal = [];

var userGuess = null;

var wordToBeGuessed = wordsList[Math.floor(Math.random() * wordsList.length)];

var arrayFromWord = [];

var = "<p><h1>";

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

function resetGame() {
	guessesRemaining = 12;
	guessTotal = [];
	wordToBeGuessed = wordsList[Math.floor(Math.random() * wordsList.length)];
	arrayFromWord = [];
	wordBreakdown();
	var htmlInstructions="<p><h3>Press any key to begin guessing</p></h3>";
	document.querySelector("#instructions").innerHTML = htmlInstructions;
	var htmlGameInitial = "<p><h1>";
	for (var i = 0; i < wordToBeGuessed.length; i++) {
		if (wordToBeGuessed.charAt(i) = " ") {
			htmlGameInitial += "&nbsp;&nbsp;";
		} else {
			htmlGameInitial += "_&nbsp;";
		}
	}

	htmlGameInitial += "</h1></p>"
	document.querySelector("#game").innerHTML = htmlGameInitial;
	var htmlStats = "<p><h3>" + "Wins: " + wins + " Losses: " + losses + " Guesses Left : " + guessesLeft + "</h3></p>";
	document.querySelector("#stats").innerHTML = htmlStats;
}


function progress()	{
	for (i = 0, j = 0; i < (arrayFromWord.length / 2); i++)	{
		if (arrayFromWord[j+1] == true) {
			html += arrayFromWord[j];
		} else {
			html += "_";
		}
		html += "&nbsp;";
		j = j+2;
	}

}






























