// CONNIE'S GRID TESTER

// constructor
let config = new Config();
let adm = new Admiral(5, "ADMIRAL SPOCK");
console.log("Board: " + adm.getBoard());

// place all 5 ships vertically, aligned to top row, from left to right
let row = 1;
let col = 1;
let numShips = adm.getNumShips();
while(numShips > 0) {
	adm.assignCoords((row + ":" + col), numShips, false, "ship1");
}
console.log(adm.getBoard());