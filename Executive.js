//Author: Ethan Brenner
/**
 * Creates the exec instance with two admiral objects, along with their number of ships
 * @param {string} adm1Name: Admiral 1's nickname
 * @param {string} adm2Name: Admiral 2's nickname
 * @param {number} numShips: number of playable ships per admiral
 * @return: none
 */
class Exec{   
    constructor(adm1Name, adm2Name, numShips){
        
        this.m_shipCount = numShips;
        //player turn updated each turn, adm1 = odd, adm2 = even?
        this.m_playerTurn = 1;
        this.admir1 = new Admiral(numShips, adm1Name);
        this.admir2 = new Admiral(numShips, adm2Name);  
    }
     /**
     * Passes "guess" coordinates to admiral for grid/map updates during game
     * @param {string} coords: coordinates for the specific cell in the table
     * @param {string} tableId: id of the table that triggered the onclick event
     * @return {boolean} true if a hit, false if a miss
     */
    updateTable(tableId,coords){
        if(this.getPlayerTurn() == 1){
            console.log("player 1's shot");
            let isAhit = this.admir2.updateAfloat(coords, tableId);
            //endofgame func goes here
            this.advancePlayerTurn();
        }
        else if(this.getPlayerTurn() == 2){
            console.log("player 2's shot");
           let isAhit = this.admir1.updateAfloat(coords, tableId);
           //endofgame func goes here
            this.advancePlayerTurn();
        }
        else{
            prompt("something went wrong with the playerTurn variable")
        }
        return(isAhit);
    }

    /**
     * checks whether all ships have been sunk, if so tosses up an alert and ends the game
     * @param: none
     
    endGameChecker(){
        if(exec.admir1.afloat == 0){

        }
    }
    */
    /**
     * Places ships based on given coordinates of the upper most left cell, 
     * it sends the orientation, shipsize and table to be used to assemble and 
     * place the ships across the proper cells
     * @param {number} tableId: valid id for the table
     * @param {string} coords: coordinates for the cell that was clicked
     * @param {number} shipSize: size of the ship being constructed 
     * @param {boolean} orientation: vertical or horizontal orientation
     */
    sendCoordsForPlacement(tableId, coords, shipSize, orientation){
        if(this.getPlayerTurn() == 1){
            this.admir1.assignCoords(coords,shipSize, orientation,tableId);
            console.log("ship of size "+shipSize+" successfully placed for admiral1");
        }
        else if (this.getPlayerTurn() == 2){
            this.admir2.assignCoords(coords,shipSize,orientation,tableId);
            console.log("ship of size "+shipSize+" successfully placed for admiral2");
        }
        else{
            console.log("something went wrong with the getplayerturn function");
        }
    }
    
    /**
     * Creates a popup to displaying the text of message
     * @param: valid message (most likely a string)
     * @return: none
    */
    attentionGetter(message){
        return(0);
    }
    /**
     * Determines which player is playing
     * @returns {number}: a number indicating whose turn it is
     */
    getPlayerTurn(){
        return(this.m_playerTurn);
    }

     /**
     * Toggles the turn from one player to the other
     * @param: none
     * 
     */
    advancePlayerTurn(){
        if(this.m_playerTurn == 1){
            this.m_playerTurn = 2;
        }
        else{
            this.m_playerTurn = 1;
        }
    }
    
    /**
     * Refreshes both tables based on the internal grids in each Admiral
     */
    refreshMap(){
        console.log("Called refreshMap()");
        if(this.getPlayerTurn()==1)
        {
            this.admir1.refreshOnStart();
        }
        else{
            this.admir2.refreshOnStart();
        }
    }
}

//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\


