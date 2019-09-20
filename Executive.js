//Author: Ethan Brenner
var exec;
var tempExec;

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
        this.m_shipCount = numShips;
        //player turn updated each turn, adm1 = odd, adm2 = even?
        this.m_playerTurn = 1;
        this.admir1 = new Admiral(numShips, adm1Name);
        this.admir2 = new Admiral(numShips, adm2Name);  
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
        return(this.m_playerTurn);
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
    if(exec.getPlayerTurn() == 1){
        //exec.admir1.placeShip(coords,shipSize,'h',tableId);
        console.log("ship of size "+shipSize+" successfully placed for admiral1");
    }
    else if (exec.getPlayerTurn() == 2){
        //exec.admir2.placeShip(coords,shipSize,'v',tableId);
        console.log("ship of size "+shipSize+" successfully placed for amdiral2");
    }
    else{
        console.log("something went wrong with the getplayerturn function");
    }

    console.log(tableId);
    console.log(coords);
}

/**
 * @param: none
 * stores the completed Exec object in the session storage after all ships are placed
 * navigates to the index page
 */
function storeExecObj(){
    sessionStorage.ExecObj = JSON.stringify(tempExec);
    console.log(tempExec);
    console.log(sessionStorage.ExecObj);
    console.log("stored obj");

    location.href = "./index.html";
}

/**
 * @param: none
 * @return: returns the exec obj from storage
 * retrieves the Exec obj from session storage at start of game
 */
function pullExecObj(){
    console.log(sessionStorage.ExecObj);
    let fromStorage = JSON.parse(sessionStorage.ExecObj);
    console.log("returning obj");
    return(fromStorage);
}

/**
 * tests retrieval from sessionStorage in index.html
 */
function onLoadTester(){
    let newExec = pullExecObj();

    console.log(newExec);
    console.log(newExec.m_shipCount);
}

/**
 * creates a exec obj used for testing exec functions
 */
function testObj(){
    tempExec = new Exec("Ethan", "Anna", '6');
}

