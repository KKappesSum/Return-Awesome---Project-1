//Author: Ethan Brenner

class Exec{

    constructor(adm1Name, adm2Name, numShips){
        const m_shipCount = numShips;
        //player turn updated each turn, adm1 = odd, adm2 = even?
        m_playerTurn = 1;
        //admin1 = new Admiral(adm1Name,numShips)
        //admin2 = new Admiral(adm2Name,numShips)
        
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

    /*
    input:number of ships per player
    output:nothing, maybe a confirmation?
    desc:starts call to place player ships
    */
    shipPlacer(shipCount){

        //works with admiral class to place ships on map, will place all of adm1 then adm2
        return(0);
    }

    /*
    input: valid message (most likely a string)
    output: none
    desc: takes in a message and displays it to the user, probably in a pop up message 
    */
    attentionGetter(message){
        return(0);
    }
}

//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------\\

/*
input: none
output: none
desc: called upon user "starting" the game
*/
function run(){
    //launches initializer, creation of exec object
    //further details added later
    return(0);
}
/*
input: none
output: specific player names, number of ships
desc: prompts players for "gamertag", number of ships, and any other content needed
    to start the game
*/
function initializer(){
    adm1Name = "Kevin";
    adm2Name = "Jessica"
    numShips = 8;
    return(adm1Name, adm2Name, numShips);
}

