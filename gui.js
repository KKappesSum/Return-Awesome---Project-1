/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function setPlayerNames() {
  let p1 = document.getElementById("player1").value;
  let p2 = document.getElementById("player2").value;
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
    "These are your names " + p1 + " and " + p2 + ". Now select an orientation for the ship with the buttons below";
  // document.getElementById("orientation1").style.display = "block";
  // document.getElementById("orientation1").textContent= "Horizontal"
  // document.getElementById("orientation2").style.display = "block";
  // document.getElementById("orientation2").innerHTML = "Vertical"
}

function setShipCount(shipId) {
  //get input from user in pop up
  let numShips;
  if (shipId === "ship1")
  {
    numShips = prompt("Please enter number of ships between 1 and 5: ");

  //validate that number of ships is between 1 and 5/
  //prompt until you recieve a valid input

    while ( numShips > 5 ||numShips < 1 || numShips === null ||numShips % 1 != 0) 
    {
    //check numShips%1!=0 because we only want an integer. integer%1 is always 0.
      numShips = prompt("Please enter number of ships between 1 and 5: ");
    }
    document.getElementById("shipNum").innerHTML = numShips;
  }
  else
  {
    numShips = document.getElementById("shipNum").innerHTML;
    console.log(numShips + "for p2");
  }


  //disable the text boxes and button
  document.getElementById("button1").disabled = true;
  document.getElementById("player1").disabled = true;
  document.getElementById("player2").disabled = true;

  document.getElementById("ships").innerHTML =
    "You have chosen " + numShips + " ships";
  // document.getElementById("test").style.display = "block";
  // document.getElementById("test2").style.display = "block";
  //document.getElementById("orientation").innerHTML = numShips


 let direction = prompt("Now please choose an orientation for this ship. Type 1 for horizontal or 2 for vertical");
  while (
    direction < 1 ||
    direction > 2 ||
    direction % 1 != 0 ||
    direction === null
    ) 
    {
      direction = prompt("Type 1 for horizontal or 2 for vertical");
    }
    direction = parseInt(direction, 10);
    direction = Number(direction);
    if (direction === 1) 
    {
      placeShip(numShips, true, shipId);
    } 
    else 
    {
      placeShip(numShips, false, shipId);
    }
}

function placeShip(size, horizontal, shipId) {
  if (size <= 0)
  {
    return 0;
  }  
  document.getElementById("ships").style.display = "block";
  document.getElementById("placement").style.display = "block";
  document.getElementById(shipId).style.display = "table";
  document.getElementById("placement").innerHTML = "Place ship of size " + size;
  let table = document.getElementById(shipId);
  if (table != null) 
  {
    for (let i = 0; i < table.rows.length; i++) 
    {
      for (let j = 0; j < table.rows[i].cells.length; j++) 
      {
        table.rows[i].cells[j].style.cursor = "ptr";
        table.rows[i].cells[j].onmousemove = changeColor(size, horizontal, "yellow", shipId);
        table.rows[i].cells[j].onmouseout = function() 
        {
          if (horizontal) 
          {
            if (j + size <= 8) 
            {
              for (let count = 0; count < size; count++) 
              {
                if (table.rows[i].cells[j + count].innerHTML != "")
                  table.rows[i].cells[j + count].style.backgroundColor = "lightblue";
                else
                  table.rows[i].cells[j + count].style.backgroundColor = "grey";
              }
            } 
            else 
            {
              let count = 0;
              while (count + j < 8) 
              {
                if (table.rows[i].cells[j + count].innerHTML != "")
                  table.rows[i].cells[j + count].style.backgroundColor = "lightblue";
                else
                  table.rows[i].cells[j + count].style.backgroundColor = "grey";
                count++;
              }
            }
          } 
          else 
          {
            if (i + size <= 8) 
            {
              for (let count = 0; count < size; count++) 
              {
                if (table.rows[i + count].cells[j].innerHTML != "")
                  table.rows[i + count].cells[j].style.backgroundColor ="lightblue";
                else
                  table.rows[i + count].cells[j].style.backgroundColor = "grey";
              }
            } 
            else 
            {
              let count = 0;
              while (count + i < 8) 
              {
                if (table.rows[i + count].cells[j].innerHTML != "")
                  table.rows[i + count].cells[j].style.backgroundColor =  "lightblue";
                else
                  table.rows[i + count].cells[j].style.backgroundColor = "grey";
                count++;
              }
            }
          }
        };
        table.rows[i].cells[j].onclick = function() 
        {
          let sizeNum = Number(size);
          console.log(sizeNum);
          //sending the coords and tableId for ship construction
          if (isLegal(table.rows[i].cells[j])) {
            let tempCoords = i + ":" + j;
            buttonHandlerSetup(shipId, tempCoords, size);

            console.log("clicked");
            console.log(isLegal(table.rows[i].cells[j]));
            if (horizontal) 
            {
              if (j + sizeNum <= 8) {
                for (let count = 0; count < sizeNum; count++) {
                  table.rows[i].cells[j + count].style.backgroundColor = "grey";
                  table.rows[i].cells[j + count].innerHTML = "";
                }
              }
            } 
            else 
            {
              if (i + sizeNum <= 8) {
                for (let count = 0; count < sizeNum; count++) {
                  table.rows[i + count].cells[j].style.backgroundColor = "grey";
                  table.rows[i + count].cells[j].innerHTML = "";
                }
              }
            }
          }
          if (sizeNum !== 1)
          {
            let horizontal = prompt("Now please choose an orientation for this ship. Type 1 for horizontal or 2 for vertical");
            while (horizontal < 1 || horizontal > 2 || horizontal % 1 != 0 || horizontal === null ) 
            {
              horizontal = prompt("Type 1 for horizontal or 2 for vertical");
            }
            horizontal = Number(horizontal);
            if (horizontal === 1)
            {
              placeShip(sizeNum-1, true, shipId);
            }
            else
            {
              placeShip(sizeNum -1, false, shipId);
            }
          }
          else
          {
            document.getElementById(shipId).style.display = "none";
            if (shipId === "ship1")
            {
              document.getElementById("test").style.display = "block";
              document.getElementById("ships").style.display = "none";
              document.getElementById("names").style.display = "none";
              document.getElementById("placement").style.display = "none";
              document.getElementById("button1").style.display = "none";
              alert("You have placed all of your ships. Please switch players now!");
            }
            else
            {
              document.getElementById("test").style.display = "none";
              document.getElementById("ships").style.display = "none";
              document.getElementById("names").style.display = "none";
              document.getElementById("placement").style.display = "none";

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
function isLegal(cell) {
  return cell.style.backgroundColor === "yellow";
}

/**
 *
 * @param {int} size size of the ship
 * @param {boolean} horizontal orientation of the ship
 * @param {string} color color for the cell
 * @param {string} tableID HTML ID for the table
 */
function changeColor(sizee, horizontal, color, tableID) {
  let table = document.getElementById(tableID);
  let size = parseInt(sizee, 10);
  size = Number(size);
  if (table != null) {
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[0].cells.length; j++) {
        table.rows[i].cells[j].style.cursor = "ptr";
        table.rows[i].cells[j].onmousemove =
          //size is a int of the ship length, horizontal is a bool (y/n)
          function() {
            let existingShip = false;
            if (horizontal) {
              if (j + size <= 8) {
                for (let count = 0; count < size; count++) 
                {
                  if (table.rows[i].cells[j + count].innerHTML === "")
                    existingShip = true;
                }
                for (let count = 0; count < size; count++) 
                {
                  if (existingShip)
                  {
                    table.rows[i].cells[j+count].style.backgroundColor = "red";
                  }
                  else
                  {
                    table.rows[i].cells[j+count].style.backgroundColor = "yellow";
                  }
                }
              } else {
                let count = 0;
                while (count + j < 8) {
                  if (table.rows[i].cells[j + count].innerHTML !== "")
                    table.rows[i].cells[j + count].style.backgroundColor = "red";
                  count++;
                }
              }
            } 
            else 
            {
              if (i + size <= 8) 
              {
                for (let count = 0; count < size; count++) 
                {
                  if (table.rows[i+count].cells[j].innerHTML === "")
                    existingShip = true;
                }
                for (let count = 0; count < size; count++) 
                {
                  if (existingShip)
                  {
                    table.rows[i+count].cells[j].style.backgroundColor = "red";
                  }
                  else
                  {
                    table.rows[i+count].cells[j].style.backgroundColor = "yellow";
                  }
                }
              } else {
                let count = 0;
                while (count + i < 8) {
                  if (table.rows[i + count].cells[j].innerHTML !== "");
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
