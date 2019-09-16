/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function setPlayerNames() {
  var p1 = document.getElementById("player1").value;
  var p2 = document.getElementById("player2").value;
  if (
    !(
      document.getElementById("player1") &&
      document.getElementById("player1").value
    )
  ) {
    p1 = document.getElementById("player1").placeholder;
  }
  if (
    !(
      document.getElementById("player2") &&
      document.getElementById("player2").value
    )
  ) {
    p2 = document.getElementById("player2").placeholder;
  }

  document.getElementById("names").innerHTML =
    "These are your names " + p1 + " and " + p2;
}

function setShipCount() {
  //get input from user in pop up
  var numShips = prompt("Please enter number of ships between 1 and 5: ");

  //validate that number of ships is between 1 and 5/
  //prompt until you recieve a valid input

  while (
    numShips > 5 ||
    numShips < 1 ||
    numShips === null ||
    numShips % 1 != 0
  ) {
    //check numShips%1!=0 because we only want an integer. integer%1 is always 0.
    var numShips = prompt("Please enter number of ships between 1 and 5: ");
  }

  //disable the text boxes and button
  document.getElementById("button1").disabled = true;
  document.getElementById("player1").disabled = true;
  document.getElementById("player2").disabled = true;

  document.getElementById("ships").innerHTML =
    "You have chosen " + numShips + " ships ";
  for (let i = 1; i <= numShips; i++) {
    placeShip(i, false);
  }
}

function placeShip(size, horizontal) {
  document.getElementById("placement").innerHTML = "Place ship of size " + size;
  //document.getElementById("ship1").addEventListener("mouseover", onHover);
  //document.getElementById("ship1").addEventListener("mouseout", offHover);

  let table = document.getElementById("ship1");
  if (table != null) {
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.cursor = "ptr";
		table.rows[i].cells[j].onmousemove = changeColor(size, horizontal, "yellow", "ship1");
        table.rows[i].cells[j].onmouseout = function() {
          if (horizontal) {
            if (j + size <= 8) {
              for (let count = 0; count < size; count++) {
                table.rows[i].cells[j + count].style.backgroundColor = "lightblue";
              }
            } else {
              let count = 0;
              while (count + j < 8) {
                table.rows[i].cells[j + count].style.backgroundColor = "lightblue";
                count++;
              }
            }
          } else {
            if (i + size <= 8) {
              for (let count = 0; count < size; count++) {
                table.rows[i + count].cells[j].style.backgroundColor ="lightblue";
              }
            } else {
              let count = 0;
              while (count + i < 8) {
                table.rows[i + count].cells[j].style.backgroundColor = "lightblue";
                count++;
              }
            }
          }
        };
        table.rows[i].cells[j].onclick = function() {
          //sending the coords and tableId for ship construction
          if(isLegal(table.rows[i].cells[j])){
            let tempCoords = i + ":" + j;
            buttonHandlerSetup("ship1",tempCoords);
          }
        
		  console.log("clicked");
		  console.log(isLegal(table.rows[i].cells[j]));
          if (horizontal) {
			if (j + size <= 8) 
			{
			  for (let count = 0; count < size; count++) 
			  {
                table.rows[i].cells[j + count].style.backgroundColor = "grey";
              }
            }
		  } 
		  else 
		  {
			if (i + size <= 8) 
			{
			  for (let count = 0; count < size; count++) 
			  {
                table.rows[i + count].cells[j].style.backgroundColor = "grey";
              }
            }
          }
        };
      }
    }
  }
}

/**
 * 
 * @param {table cell} cell 
 * @return boolean if placement is legal
 */
function isLegal(cell)
{
	return (cell.style.backgroundColor === "yellow");
}

/**
 * 
 * @param {int} size size of the ship
 * @param {boolean} horizontal orientation of the ship 
 * @param {string} color color for the cell
 * @param {string} tableID HTML ID for the table
 */
function changeColor(size, horizontal, color, tableID) {
  let table = document.getElementById(tableID);
  if (table != null) {
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.cursor = "ptr";
        table.rows[i].cells[j].onmousemove =
          //size is a int of the ship length, horizontal is a bool (y/n)
          //sorry this is a terrible in-line definition :( I can't get the "this" to work right otherwise
          function() {
            //this.style.backgroundColor = "yellow";
            if (horizontal) {
              if (j + size <= 8) {
                for (let count = 0; count < size; count++) {
                  table.rows[i].cells[j + count].style.backgroundColor = color;
                }
              } else {
                let count = 0;
                while (count + j < 8) {
                  table.rows[i].cells[j + count].style.backgroundColor = "red";
                  count++;
                }
              }
            } else {
              if (i + size <= 8) {
                for (let count = 0; count < size; count++) {
                  table.rows[i + count].cells[j].style.backgroundColor = color;
                }
              } else {
                let count = 0;
                while (count + i < 8) {
                  table.rows[i + count].cells[j].style.backgroundColor = "red";
                  count++;
                }
              }
            }
          };
      }
    }
  }
}
