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
  constructor(num, pName) {
    this.#numShips = num;
    this.#board = 0;
    this.#fleet = 0;
    this.#name = pName;
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

  updateShipMap() {
    /**
     * Update your own ship map with the other user's firing outcome
     */
  }

  updateFiringMap() {
    /**
     * Updates your "firing map" after you guess a location
     */
  }
}
