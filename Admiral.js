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
      Ship newShip = new Ship(x); //creates ship size x
      #this.fleet.push(newShip); //adds the new ship to fleet array
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
      #fleet.forEach(function (element) {
        coordArray = element.getCoords();
        coordArray.forEach(function(coorShip){
          if (coorShip === coor)
          {
            element.incNumHits(); //func to Connie
            if (!element.getStatus()) //if ship no longer afloat
            {
              #afloat -= 1;
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
}
