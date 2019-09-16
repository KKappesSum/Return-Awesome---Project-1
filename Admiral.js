/**
 * Admiral class is in charge of a player in the Battleship game
 */
class Admiral {
  /**
   * Create a player
   * @param {number} numShips - The number of ships being placed in the game
   * @param {grid} board - The player's board, has your own ships location
   */
  #numShips;
  #board;
  #fleet;
  #name;
  #afloat;
  constructor(num, pName) {
    this.#numShips = num;
    this.#board = 0;
    this.#fleet = {};
    this.#afloat = num;
    this.#name = pName;
    for (let x = 1; x <= num; x++) {
      let newShip = new Ship(x); //creates ship size x
      this.#fleet.push(newShip); //adds the new ship to fleet array
    }
  }

  getNumShips() {
    return this.#numShips;
  }

  getBoard() {
    return this.#board;
  }

  getFleet() {
    return this.#fleet;
  }

  getName() {
    return this.#name;
  }

  setBoard(x) {
    this.#board = x;
  }

  setFleet(x) {
    this.#fleet = x;
  }

  setShipMap(x) {
    this.#shipMap = x;
  }

  setName(x) {
    this.#name = x;
  }

  updateShipMap(coor) {
    /**
     * Update your own ship map with the other user's firing outcome
     * void function, changes the hit or miss type of the water tile
     * @param {string} coor - NumberLetter coordinate of the player's guess
     * @return none
     */
    if (updateCell(coor) === true)
    {
      //checks the fleet array for the ship that was hit
      this.#fleet.forEach(function (element) {
        coordArray = element.getCoords();
        coordArray.forEach(function(coorShip){
          if (coorShip === coor)
          {
            element.incNumHits(); //func to Connie
            if (!element.getStatus()) //if ship no longer afloat
            {
              this.#afloat -= 1;
            }
          }
        });
      });
    }
  }

  updateFiringMap() {
    /**
     * Updates your "firing map" after you guess a location
     */
  }


  /**
   * Assign coordinates for a ship to the given ship and the board
   * @param {string} startCoord - the upper leftmost coordinate of the ship
   * @param {integer} size - the size of the ship
   * @param {string} orientation - orientation of the ship, 'h' for horizontal, 'v' for vertical
   * @param {string} tableID - the ID of the table to place the ship in
   * @return none.
   */
  placeShip(startCoord, size, orientation, tableID) {
    let coordsArr = new Array(size);
    let coordsDone = false;
    // parse startCoord
    let row = startCoord.substring(0,1);
    let col = startCoord.substring(2);
    let tempStr = "";
    if(orientation === 'v') {
      for(let i = row; i <= row + size - 1; i++)
      {
        coordsArr[i] = tempStr.concat(i, ':', col);
      }
      coordsDone = true;
    }
    else if(orientation === 'h') {
      for(let j = col; j <= col + size - 1; j++)
      {
        coordsArr[j] = tempStr.concat(row, ':', j);
      }
      coordsDone = true;
    }
    else {
      console.log("ERROR: placeShip received invalid orientation\n");
    }

    if(coordsDone === true) {
      // find the ship
      let shipIndex = findShipBySize(size);
      // give coords to Ship
      this.#fleet[shipIndex].setCoords(coordsArr);
      // give coords AND TABLEID to grid
      this.#board.populateGrid(coordsArr, tableID);
    }
  }

  /**
   * Find the ship of the given size.
   * @param {integer} size, the size of the ship you're searching for.
   * @return {integer} the index of the correct ship.
   */
  findShipBySize(size) {
    let shipIndex;
    for(let index = 0; index < this.#numShips; index++)
    {
      if(this.#fleet[index].getSize() === size)
      {
        shipIndex = index;
      }
    }
    return shipIndex;
  }

}
