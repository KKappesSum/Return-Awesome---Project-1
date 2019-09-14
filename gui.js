/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function setPlayerNames() 
{
    var p1 = document.getElementById("player1").value;
    var p2 = document.getElementById("player2").value;
    if(!(document.getElementById("player1") && document.getElementById("player1").value))
	{
    	p1 = document.getElementById("player1").placeholder;
	} 
	if(!(document.getElementById("player2") && document.getElementById("player2").value))
	{
		p2 = document.getElementById("player2").placeholder;
	} 

    document.getElementById("names").innerHTML =
    	"These are your names " + p1 + " and " + p2;
}

function setShipCount() 
{
	//get input from user in pop up
	var numShips = prompt("Please enter number of ships between 1 and 5: ");

	//validate that number of ships is between 1 and 5/
	//prompt until you recieve a valid input

  	while(numShips > 5 || numShips < 1 || numShips === null || (numShips%1!=0))
  		//check numShips%1!=0 because we only want an integer. integer%1 is always 0.
  	{
		var numShips = prompt("Please enter number of ships between 1 and 5: ");
  	}

  	//disable the text boxes and button
  	document.getElementById("button").disabled = true;
  	document.getElementById("player1").disabled = true;
  	document.getElementById("player2").disabled = true;

  	document.getElementById("ships").innerHTML =
    	"You have chosen " + numShips + " ships ";
}