//Author: Ethan Brenner

class Exec{

    constructor(adm1Name, adm2Name, numShips){
        const m_shipCount = numShips;
        //player turn updated each turn, adm1 = odd, adm2 = even?
        m_playerTurn = 1;
        //admir1 = new Admiral(adm1Name,numShips)
        //admir2 = new Admiral(adm2Name,numShips)
        
    }
    /*
    input:none(for now)
    output: none(for now)
    desc: fired whenever one of the cells is clicked on the grid, ticks off a code to determine 
    what grid it originated?
    */
    buttonHandler(){
        return(0);
    }

    /**
     * @param:valid table cell coordinates 
     * @return:none
     * passes "guess" coordinates to admiral for grid/map updates
     */
    interact(coords){
        //need logic here to determine whether to update admir1 or 2, only 2 ship maps total so need
        //to determine which to send to
        admir2.updateShipMap(coords);
        admir1.updateShipMap(coords);
        
    }

    /**
     * @param: valid message (most likely a string)
     * @return: none
     * takes in a message and displays it to the user, probably in a pop up message 
    */
    attentionGetter(message){
        return(0);
    }
}

//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\

/** 
 * @param: none
 * @return: 0
 * called upon user "starting" the game
*/
function run(){
    //launches initializer, creation of exec object
    //further details added later
    return(0);
}

/** 
 * @param: none
 * @return: specific player names, number of ships
 * prompts players for "gamertag", number of ships, and any other content needed
    to start the game, this should be for the setup page
*/
function initializer(){
    adm1Name = "Kevin";
    adm2Name = "Jessica"
    numShips = 8;//default value, can't have more than 5 ships
    return(adm1Name, adm2Name, numShips);
}

//comment line