/**
 * Class containing configuration parameters for the game's setup. 
 * @prop {number} MAX_NUM_OF_SHIPS - the maximum number of ships allowed in the game.
 * @prop {number} BOARD_SIZE - the length of each side of the square game board.
 * @prop {Object} oceanTypes - object containing the possible states of a cell of the game board: WATER, SHIP, MISS, or HIT; and the color values assigned to each state.
 */
class Config{   
    constructor(){
    
    }    
    MAX_NUM_OF_SHIPS = 5;
    BOARD_SIZE = 8;
    oceanTypes ={
        WATER:  "lightblue",
        SHIP:   "grey",
        MISS:   "white",
        HIT:    "red",
    }
}