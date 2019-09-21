// CONNIE'S GRID TESTER

// constructor
let config = new Config();
let adm = new Admiral(5, "ADMIRAL SPOCK");

// getters
console.log(adm.getBoard().getArr());
console.log(adm.getBoard().getCell("1:1"));
console.log(adm.getBoard().getRow(0));
console.log(adm.getBoard().getCol(0));

/*
// place all 5 ships vertically, aligned to top row, from left to right
let row = 1;
let col = 1;
let numShips = adm.getNumShips();
while(numShips > 0) {
	adm.assignCoords((row + ":" + col), numShips, false, "ship1");
}
console.log(adm.getBoard());
console.log(adm.getBoard().getCell("1:1"));
*/