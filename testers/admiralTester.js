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
let adm5 = new Admiral(5, "admiral 5");
for(let j = 1; j <= adm5.getNumShips(); j++)
{
	console.log("In " + adm5.getName() + ", ship of size " + j + " is at index " + adm5.findShipBySize(j));
}


