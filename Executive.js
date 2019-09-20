//Author: Ethan Brenner
var exec;

class Exec{
    /**
     * 
     * @param {string} adm1Name: Admiral 1's nickname
     * @param {string} adm2Name: Admiral 2's nickname
     * @param {number} numShips: number of playable ships per admiral
     * @return: none
     * creates the exec instance with two admiral objects, along with their number of ships
     */
    constructor(adm1Name, adm2Name, numShips){
        const m_shipCount = numShips;
        //player turn updated each turn, adm1 = odd, adm2 = even?
        let m_playerTurn = 1;
        let admir1 = new Admiral(numShips, adm1Name);
        let admir2 = new Admiral(numShips, adm2Name);  
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
            admir2.updateShipMap(coords);
            this.advancePlayerTurn();
        }
        else if(this.getPlayerTurn() == 2){
            console.log("player 2's shot");
            admir1.updateShipMap(coords);
            this.advancePlayerTurn();
        }
        else{
            prompt("something went wrong with the playerTurn variable")
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
        return(m_playerTurn);
    }

     /**
     * changes whether player turn is 1 or 2
     */
    advancePlayerTurn(){
        if(m_playerTurn == 1){
            m_playerTurn = 2;
        }
        else{
            m_playerTurn = 1;
        }
    }
}

//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\

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

//these functions below might go in a "setup.js"??


/**
 * 
 * @param {string} tableId : id of the table that triggered the onclick event
 * @param {string} coords : coordinates for a specific cell in the table
 * @param {number} shipSize: size of the ship being placed
 * handles button clicks on the setup page, calls necessary functions
 */
function buttonHandlerSetup(tableId, coords, shipSize){

    //need to figure out better way to decide which player to place ships for
    //maybe something can be taken from gui
    if(exec.getPlayerTurn() === 1){
        exec.admir1.placeShip(coords,shipSize,1,tableId);
        console.log("ship of size "+size+" successfully placed for admiral1");
    }
    else if (exec.getPlayerTurn() === 2){
        exec.admir2.placeShip(coords,shipSize,2,tableId);
        console.log("ship of size "+size+" successfully placed for amdiral2");
    }
    else{
        console.log("something went wrong with the getplayerturn function");
    }

    console.log(tableId);
    console.log(coords);
}
