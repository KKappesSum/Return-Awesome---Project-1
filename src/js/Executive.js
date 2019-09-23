//Author: Ethan Brenner

/**
 * Top-level class containing an {@link Admiral} for each player and methods to run the game.
 * @param {string} adm1Name - Admiral 1's nickname.
 * @param {string} adm2Name - Admiral 2's nickname.
 * @param {number} numShips - number of playable ships per Admiral.
 * @prop {number} m_shipCount - the number of playable ships per Admiral.
 * @prop {number} m_playerTurn - 1 for the first player, or 2 for the second player.
 * @prop {Admiral} admir1 - the Admiral object for the first player.
 * @prop {Admiral} admir2 - the Admiral object for the second player.
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
     * Passes "guess" coordinates to {@link Admiral} to update the game board and Ships during gameplay.
     * @param {string} coord - coordinates for the specific cell in the table.
     * @param {string} tableID - the identifier specifying the table to update.
     * @return {boolean} true if the guess is a hit, false if it's a miss.
     */
    updateTable(coord, tableID){
        let isAhit;
        if(this.getPlayerTurn() === 1){
            isAhit = this.admir2.updateHit(coord, tableID);
            this.endGameChecker(1);            
        }
        else if(this.getPlayerTurn() == 2){
            isAhit = this.admir1.updateHit(coord, tableID);
            this.endGameChecker(2);
        }
        else{
            prompt("something went wrong with the playerTurn variable")
        }
        return(isAhit);
    }

    /**
     * Checks whether either player has sunk all of their opponent's ships.  If so, displays an alert declaring the winner of the game, and ends the game.
     * @param {number} num - represents the current player turn: 1 for the first player, 2 for the second player.
     */
    endGameChecker(num){
        let player1 = this.admir1.name;
        let player2 = this.admir2.name;
        let outputString;
        if(this.admir1.afloat ==0 || this.admir2.afloat == 0){
            if(num ==1){
                outputString = player1 + ", you sunk all of " + player2 + "'s battleships!";
            }
            else{
                outputString = player2 + ", you sunk all of " + player1 + "'s battleships!";
            }
                //alerts gamers to the end of the game and resets sessionStorage, also routes the game to the setup screen
                alert(outputString);
                sessionStorage.ExecObj = {};

                //displays end of game message and hides p1 ship map
                document.getElementById("table2").style.display = "none";
                document.getElementById("message").innerHTML = "has won the game!!!";
                document.getElementById("turnButton").style.display = "none";
            }
        }
    
    
    /**
     * Sends the given data to the current player's {@link Admiral} to handle ship placement. Calls {@link Admiral#assignCoords}.
     * @param {string} tableId: valid id for the table.
     * @param {string} coords: coordinates for the cell that was clicked.
     * @param {number} shipSize: size of the ship being constructed .
     * @param {boolean} orientation: orientation of the ship being constructed: true for horizontal, false for vertical.
     */
    sendCoordsForPlacement(tableId, coords, shipSize, orientation){
        if(this.getPlayerTurn() == 1){
            this.admir1.assignCoords(coords,shipSize, orientation,tableId);
        }
        else if (this.getPlayerTurn() == 2){
            this.admir2.assignCoords(coords,shipSize,orientation,tableId);
        }
        else{
            console.log("something went wrong with the sendCoordsForPlacement function");
        }
    }
    
    /**
     * Determines which player is playing.
     * @return {number}: 1 for the first player, 2 for the second player.
     */
    getPlayerTurn(){
        return(this.m_playerTurn);
    }

     /**
     * Toggles the turn from one player to the other.
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
     * Refreshes both displayed tables to show the current player's game board.  Calls {@link Admiral#refreshOnStart}.
     */
    refreshMap(){
        if(this.getPlayerTurn()===1)
        {
            this.updateName();
            this.admir1.refreshOnStart();
        }
        else{
            this.updateName();
            this.admir2.refreshOnStart();
        }
    }

    /**
     * Refreshes the current player's firing map.  Calls {@link Admiral#refreshFireOnly}.
     */
    refreshFireMap()
    {
        if(this.getPlayerTurn()===1)
        {
            this.updateName();
            this.admir2.refreshFireOnly();
        }
        else{
            this.updateName();
            this.admir1.refreshFireOnly();
        }   
    }

    /**
     * Changes the player name displayed at the top of the game page.
     */
    updateName(){
        if(this.m_playerTurn ===1){
            document.getElementById("playerName").innerHTML = this.admir1.name;
        }
        else{
            document.getElementById("playerName").innerHTML = this.admir2.name;
        }
    }

    checkSunk()
    {
        document.getElementById("p2updates").innerHTML = "";
        document.getElementById("p1updates").innerHTML  = "";
        document.getElementById("p2progress").innerHTML = "";
        document.getElementById("p1progress").innerHTML  = "";
        for (let i = 0; i< this.admir1.numShips; i++)
        {
            if (this.admir1.fleet[i].status === false)
            {
                document.getElementById("p2progress").innerHTML += "You sunk their ship of size "+(i+1)+"<br />";
                document.getElementById("p1updates").innerHTML += "*Your ship of size "+(i+1)+" was sunk"  +"<br />";
            }
        }
        for (let i = 0; i< this.admir2.numShips; i++)
        {
            if (this.admir2.fleet[i].status === false)
            {
                document.getElementById("p1progress").innerHTML += "You sunk their ship of size "+(i+1)+"<br />";
                document.getElementById("p2updates").innerHTML += "*Your ship of size "+(i+1)+" was sunk" +  "<br />";
            }
        }
        // let sunk;
        // if(this.m_playerTurn ===2){
        //     sunk = this.admir1.num - this.admir1.afloat;
        // }
        // else{
        //     sunk = this.admir2.num  - this.admir2.name;
        // }
        // if (sunk != 0)
        // {
            
        // }
    }

}

    /**
     * determines the state of the switch player button in index, hides/unhides table divs, updates
     * button text and refreshes player maps
     * @param: none
     * 
     */
   function turnButton(){
        let temp = document.getElementById("turnButton");
        if(temp.value === "End Turn"){
            //hide table divs
            document.getElementById("gameInstructions").style.display = "none";
            document.getElementById("table1").style.display = "none";
            document.getElementById("table2").style.display = "none";
            document.getElementById("p1updates").style.display = "none";
            document.getElementById("p2updates").style.display = "none";
            document.getElementById("p1progress").style.display = "none";
            document.getElementById("p2progress").style.display = "none";
            //update home button text to next value
            temp.value = "Player Start";
            exec.advancePlayerTurn();
            exec.refreshMap();
            exec.refreshFireMap();
        }
        else{

            //show tables
            updateMessages();
            document.getElementById("gameInstructions").style.display = "block";
            document.getElementById("table1").style.display = "block";
            document.getElementById("table2").style.display = "block";
            //unlock the table

            document.getElementById("table1").classList.remove("disabledButton");
            //update button text
            temp.value = "End Turn";
            //disable button
            temp.disabled = true;
        }  
    }
