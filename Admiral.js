/**
 * Admiral class is in charge of a player in the Battleship game
 * @param {integer} num - The number of ships being placed in the game
 * @param {string} pName - the name of the player.
 */
class Admiral {
  constructor(num, pName) {
    this.config = new Config();
    this.numShips = num;
    this.board = new Grid(this.config.BOARD_SIZE);
    this.fleet = [];
    this.afloat = num;
    this.name = pName;
    for (let x = 1; x <= num; x++) {
      let newShip = new Ship(x); //creates ship size x
      this.fleet.push(newShip); //adds the new ship to fleet array
    }
  }

  /**
   * Get the number of ships.
   * @param none.
   * @return {integer} return the number of ships that the Admiral has.
   */
  getNumShips() {
    return this.numShips;
  }

  /**
   * Get the game board.
   * @param none.
   * @return {Grid} return the Grid object in Admiral.
   */
  getBoard() {
    return this.board;
  }

  /**
   * Get the Admiral's fleet.
   * @param none.
   * @return {Ship[]} return the array of Ships in Admiral.
   */
  getFleet() {
    return this.fleet;
  }

  /**
   * Get the Admiral's name.
   * @param none.
   * @return {string} return the player's name.
   */
  getName() {
    return this.name;
  }

  /*
   * @return {boolean} hitBoard : true if a ship was hit, false if it was a miss
   */
  updateHit(coord, tableID) {
    let hitBoard = this.board.updateCell(coord, tableID);
    if(hitBoard) {
      this.hitShip(coord);
    }
    return hitBoard;
  }

  /*
   * Increments hit counter in the appropriate Ship, and the afloat counter in this Admiral, if necessary.  This function is only called if a hit has already been validated.
   * @param {string} coord - The coordinate of the Ship being hit.
   * @return none.
   */
  hitShip(coord) {
    let tempIndex = this.findShipByCoord(coord);
    this.fleet[tempIndex].incNumHits();
    if(this.fleet[tempIndex].status == false) {
      this.afloat--;
    }
  }

  /**
   * While setting up the game, assign coordinates for a ship to the given ship and the board
   * @param {string} startCoord - the upper leftmost coordinate of the ship
   * @param {integer} size - the size of the ship
   * @param {boolean} orientation - orientation of the ship, true for horizontal, false for vertical
   * @param {string} tableID - the ID of the table to place the ship in
   * @return none.
   */
  assignCoords(startCoord, size, orientation, tableID) {
    let coordsArr = new Array(size);
    let coordsDone = false;
    // parse startCoord
    let row = Number(startCoord.substring(0,1));
    let col = Number(startCoord.substring(2));
    let tempStr = "";

    // vertical
    if(orientation == false) {
      let i = 0;
      let j = row;
      while((j <= row + Number(size) - 1) && (i < size))
      {
        coordsArr[i] = tempStr.concat(j, ':', col);
        i++;
        j++;
      }
      coordsDone = true;
      console.log(coordsArr);
    }
    // horizontal
    else if(orientation == true) {
      let k = 0;
      let l = col;
      while((l <= col + Number(size) - 1) && (k < size))
      {
        coordsArr[k] = tempStr.concat(row, ':', l);
        k++;
        l++;
      }
      coordsDone = true;
    }
    else {
      console.log("ERROR: assignCoords received invalid orientation\n");
    }

    if(coordsDone === true) {
      // find the ship
      let shipIndex = this.findShipBySize(size);
      console.log(shipIndex);
      // give coords to Ship
      console.log(this.fleet[shipIndex]);
      this.fleet[shipIndex].setCoords(coordsArr);
      // give coords AND TABLEID to grid
      this.board.populateGrid(coordsArr, tableID);
    }
  }

  /**
   * Find the ship of the given size.
   * @param {integer} size, the size of the ship you're searching for.
   * @return {integer} the index of the correct ship.
   */
  findShipBySize(size) {
    let shipIndex;
    for(let index = 0; index < this.numShips; index++)
    {
      if(this.fleet[index].getSize() == size)
      {
        shipIndex = index;
      }
    }
    return shipIndex;
  }

  /*
   * Helper function to find a Ship that occupies a given coordinate.
   * @param {string} coord - The coordinate to search for.
   * @return {number} foundIndex - The coordinate of the Ship in the fleet.
   */
  findShipByCoord(coord) {
    let foundIndex = -1;
    for(let shipIndex = 0; shipIndex < this.numShips; shipIndex++)
    {
      for(let coordIndex = 0; coordIndex < this.fleet[shipIndex].getSize(); coordIndex++)
      {
        if(this.fleet[shipIndex].getCoords()[coordIndex] == coord) {
          foundIndex = shipIndex;
        }
      }
    }
    if(foundIndex < 0) {
      console.log("ERROR: findShipByCoord could not find that coord in this Admiral!");
    }
    else {
      return foundIndex;
    }
  }

  /**
   * refreshes both maps at the start of the game
   */
  refreshOnStart(){
    this.board.refreshTable("ship1", true);
    this.board.refreshTable("fire1", false);  
  }

}
