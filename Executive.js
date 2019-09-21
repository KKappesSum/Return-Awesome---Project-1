//Author: Ethan Brenner
class Exec{
    /**
     * 
     * @param {string} adm1Name: Admiral 1's nickname
     * @param {string} adm2Name: Admiral 2's nickname
     * @param {number} numShips: number of playable ships per admiral
     * @return: none
     * creates the exec instance with two admiral objects, along with their number of ships
     */
        #m_shipCount;
        #admir1;
        #admir2;
        #m_playerTurn;

    constructor(adm1Name, adm2Name, numShips){
        
        this.#m_shipCount = numShips;
        //player turn updated each turn, adm1 = odd, adm2 = even?
        this.#m_playerTurn = 1;
        this.#admir1 = new Admiral(numShips, adm1Name);
        this.#admir2 = new Admiral(numShips, adm2Name);  
    }
     /**
     * @param {string} coords: coordinates for the specific cell in the table
     * @param {string} tableId: id of the table that triggered the onclick event
     * @return:none
     * passes "guess" coordinates to admiral for grid/map updates during game
     */
    updateTable(tableId,coords){
        if(this.getPlayerTurn() == 1){
            console.log("player 1's shot");
            this.#admir2.updateShipMap(coords, tableId);
            this.advancePlayerTurn();
        }
        else if(this.getPlayerTurn() == 2){
            console.log("player 2's shot");
            this.#admir1.updateShipMap(coords, tableId);
            this.advancePlayerTurn();
        }
        else{
            prompt("something went wrong with the playerTurn variable")
        }
    }
    
    /**
     * 
     * @param {number} tableId: valid id for the table
     * @param {string} coords: coordinates for the cell that was clicked
     * @param {number} shipSize: size of the ship being constructed 
     * @param {boolean} orientation: vertical or horizontal orientation
     */
    sendCoordsForPlacement(tableId, coords, shipSize, orientation){
        if(this.getPlayerTurn() == 1){
            this.#admir1.assignCoords(coords,shipSize, orientation,tableId);
            console.log("ship of size "+shipSize+" successfully placed for admiral1");
        }
        else if (this.getPlayerTurn() == 2){
            this.#admir2.assignCoords(coords,shipSize,orientation,tableId);
            console.log("ship of size "+shipSize+" successfully placed for admiral2");
        }
        else{
            console.log("something went wrong with the getplayerturn function");
        }
    }
    
    /**
     * @param: valid message (most likely a string)
     * @return: none
     * takes in a message and displays it to the user as a pop up
    */
    attentionGetter(message){
        return(0);
    }
    /**
     * @returns {number}: a number indicating whose turn it is
     * returns the value of the m_playerTurn variable
     */
    getPlayerTurn(){
        return(this.#m_playerTurn);
    }

     /**
     * changes whether player turn is 1 or 2
     */
    advancePlayerTurn(){
        if(this.#m_playerTurn == 1){
            this.#m_playerTurn = 2;
        }
        else{
            this.#m_playerTurn = 1;
        }
    }
    
    /**
     * refreshes both maps with a given player's data
     */
    refreshMap(){
        if(this.getPlayerTurn()==1)
        {
            this.#admir1.refreshOnStart();
        }
        else{
            this.#admir2.refreshOnStart();
        }
    }
}

//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\


