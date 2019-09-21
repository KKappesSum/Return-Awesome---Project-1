function _buttonHandlerSetup(tableId, coords, shipSize){

    //need to figure out better way to decide which player to place ships for
    //maybe something can be taken from gui
    if(exec1.getPlayerTurn() == 1){
        exec1.admir1.assignCoords(coords,shipSize,'h',tableId);
        console.log("ship of size "+shipSize+" successfully placed for admiral1");
    }
    else if (exec1.getPlayerTurn() == 2){
        exec1.admir2.assignCoords(coords,shipSize,'v',tableId);
        console.log("ship of size "+shipSize+" successfully placed for amdiral2");
    }
    else{
        console.log("something went wrong with the getplayerturn function");
    }

    console.log(tableId);
    console.log(coords);
}

// create an Exec object
let exec1 = new Exec("p1", "p2", 5);

// check object contents
console.log("player turn: " + exec1.getPlayerTurn());
console.log("shipcount: " + exec1.m_shipCount);
console.log("admir1: " + exec1.admir1.getName());
console.log("admir2: " + exec1.admir2.getName());


// test existing functions
console.log(exec1.admir1.getBoard());
_buttonHandlerSetup("ship1", "1:1", 1);
console.log(exec1.admir1.getBoard());