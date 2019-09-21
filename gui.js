let exec;
let tempExec;

/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function setPlayerNames() {
  let p1 = document.getElementById("player1").value;
  let p2 = document.getElementById("player2").value;
  if (!(document.getElementById("player1") && document.getElementById("player1").value)) 
  {
    p1 = document.getElementById("player1").placeholder;
  }
  if (!(document.getElementById("player2") && document.getElementById("player2").value)) 
  {
    p2 = document.getElementById("player2").placeholder;
  }

  document.getElementById("names").innerHTML =
    "These are your names " + p1 + " and " + p2 + ". Now select an orientation for the ship with the buttons below";
  // document.getElementById("orientation1").style.display = "block";
  // document.getElementById("orientation1").textContent= "Horizontal"
  // document.getElementById("orientation2").style.display = "block";
  // document.getElementById("orientation2").innerHTML = "Vertical"
}


/**
 * This function asks the user how many ships they want to use and begins to place ships
 * @param {string} shipId the id for the ship map from the setup.html
 */
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
  while (direction < 1 ||direction > 2 || direction % 1 != 0 ||direction === null) 
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

/**
 * This function deals with the interface for placing ships. When the mouse hovers, 
 * the ship outline with change color depending on if a ship can be placed there.
 * Lets p1 place all their ships before hiding the map and prompting p2 to place their ships.
 * @param {int} size the size of the ship being placed
 * @param {boolean} horizontal boolean of the orientation, true = the ship is horizontal
 * @param {string} shipId string of the html id for the ship map being used
 */
function placeShip(size, horizontal, shipId) 
{
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
            let tempCoords = (i+1) + ":" + (j+1);
            buttonHandlerSetup(shipId, tempCoords, size, horizontal);

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
              alert("start the game");
              storeExecObj();
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
function isLegal(cell) {
  return cell.style.backgroundColor === "yellow";
}

/**
 * This function will color cells of a table according to if the placement of the ship is legal
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

/**
 * launched when submitting information in setup.html
 */
function createExec(){
    //creating an exec object
    let tempAdmr1 = document.getElementById("player1").value;
    console.log(tempAdmr1);
    let tempAdmr2 = document.getElementById("player2").value;
    console.log(tempAdmr2);
    let newString = document.getElementById("ships").innerHTML;
    tempNumShips = newString.substring(16);
    tempNumShips= tempNumShips.substring(0,tempNumShips.indexOf(" "));
    console.log(tempNumShips);

    exec = new Exec(tempAdmr1, tempAdmr2, tempNumShips);
}

/**
* @param {string} tableId: id of the table that triggered the onclick event
* @param {string} coords: coordinates for a specific cell in the table
* handles button clicks on player map, call necessary functions
*/
function buttonHandler(tableId, coords){
    console.log(tableId);
    console.log(coords);
}

/**
* 
* @param {string} tableId : id of the table that triggered the onclick event
* @param {string} coords : coordinates for a specific cell in the table
* @param {number} shipSize: size of the ship being placed
* @param {boolean} orientation: orientation of the ship, true for horizontal, false for vertical
* handles button clicks on the setup page, handoff to exec obj
*/
function buttonHandlerSetup(tableId, coords, shipSize, orientation){
    //need to figure out better way to decide which player to place ships for
    //maybe something can be taken from gui
    exec.sendCoordsForPlacement(tableId,coords,shipSize,orientation);
    console.log("passed params to exec");
}

/**
* @param: none
* stores the completed Exec object in the session storage after all ships are placed
* navigates to the index page
*/
function storeExecObj(){
    sessionStorage.ExecObj = JSON.stringify(exec);
    console.log("stored obj");
    location.href = "./index.html";
}

/**
* @param: none
* @return: returns the exec obj from storage
* retrieves the Exec obj from session storage at start of game
*/
function pullExecObj(){
    let fromStorage = JSON.parse(sessionStorage.ExecObj);
    console.log("returning obj");
    return(fromStorage);
}

/**
* tests retrieval from sessionStorage in index.html
*/
function onLoadPull(){
    exec = pullExecObj();
    exec.refreshMap();
}

/**
* creates a exec obj used for testing exec functions
*/
function testObj(){
   tempExec = new Exec("Ethan", "Anna", '6');
   console.log("Test ope");
   storeExecObj();
}

