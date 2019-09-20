// create admirals
let adm1 = new Admiral(1, "admiral 1");
let adm2 = new Admiral(1, "admiral 2");

// test getters with original stats
console.log("# ships: " + adm1.getNumShips());
console.log("board: " + adm1.getBoard());
console.log("fleet: " + adm1.getFleet());
console.log("name: " + adm1.getName());

console.log("# ships: " + adm2.getNumShips());
console.log("board: " + adm2.getBoard());
console.log("fleet: " + adm2.getFleet());
console.log("name: " + adm2.getName());

// test helper functions
for(let j = 1; j <= adm.getNumShips(); j++)
{
	console.log("ship of size " + j + " is at index " + findShipBySize(j) + " of Admiral A");
}


