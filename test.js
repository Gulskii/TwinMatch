var times = ["10 Min.", "15 Min.", "20 Min.", "30 Min.", "45 Min.", "1 Hour", "2 Hours", "3 Hours", "4 Hours", "8 Hours"]

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
		generateNewTime();
		
		
		count++;
	}
	matchTimes = shuffle(matchTimes);
}

function generateNewTime(){
	var newTime = false;
	while(!newTime)
	{
	var chosenTime = times[randNumb(0, times.length)];
	
		if(!matchTimes.includes(chosenTime)){
			matchTimes.push(chosenTime);
			matchTimes.push(chosenTime);
			newTime = true;
		}		
	}
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