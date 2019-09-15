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
    constructor(adm1Name, adm2Name, numShips){
        const m_shipCount = numShips;
        //player turn updated each turn, adm1 = odd, adm2 = even?
        m_playerTurn = 1;
        admir1 = new Admiral(numShips, adm1Name);
        admir2 = new Admiral(numShips, adm2Name);
        
    }
    /**
     * @param:valid coords of cell and tableId
     * @return: none(for now)
     * fired whenever one of the cells is clicked on the grid during setup
    */
    buttonHandler(tableId,coords){

        return(0);
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
     * @param: none
     * @return: m_playerTurn
     * returns the value of the m_playerTurn variable
     */
    getPlayerTurn(){
        return(m_playerTurn);
    }
   

}

//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\

/** 
 * @param: none
 * @return: 0
 * called upon user "starting" the game, takes exec obj created during setup and migrates to the game board
*/
function run(){
    //launches initializer, creation of exec object
    //further details added later
    return(0);
}

/** 
 * @param: none
 * @return: none
 * launched during the setup stage, takes in user defined data to create admirals and exec
*/
function initializer(){
    adm1Name = "Kevin";
    adm2Name = "Jessica"
    numShips = 8;//default value, can't have more than 5 ships
    
}

//comment line