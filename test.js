var times = ["10 mins", "10 mins", "10 mins", "10 mins", "30 mins", "30 mins", "30 mins", "1 hour", "2 hours", "3 hours", "4 hours"]

var numOfRows = 2;
var numOfColumns = 5;

var matchTimes = [];

generateTable();

function randNumb(min, max){
	return Math.floor((Math.random() * max) + min);
}

function generateTimeArray(){
	matchTimes = [];
	var iterate = (numOfRows * numOfColumns) / 2;
	if((numOfRows * numOfColumns) % 2 != 0){
		alert("Rows X Columns need to be divisble by two.")
		return;
	}
	
	var count = 0;
	while(count < iterate)
	{
		var chosenTime = times[randNumb(0, times.length)];
		matchTimes.push(chosenTime);
		matchTimes.push(chosenTime);
		count++;
	}
	matchTimes = shuffle(matchTimes);
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function generateTable(){
	
	
	generateTimeArray();
	
	var generatedHtml = "";
	
	generatedHtml = "<tr>";
	
	var rowCount = 0;
	var colCount = 0;
	var timeCount = 0;
	
	while(rowCount < numOfRows)
	{
		generatedHtml += "<tr>";
		while(colCount < numOfColumns)
		{
			generatedHtml += "<td>" + matchTimes[timeCount] + "</td>";
			colCount++;
			timeCount++;
		}
		generatedHtml += "</tr>";
		colCount = 0;
		rowCount++;
	}
	
	document.getElementById("matchTable").innerHTML = generatedHtml;
}