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

// test placeShip
adm5.placeShip("1:1", 1, 'v', "ship1");
adm5.placeShip("2:2", 2, 'v', "ship1");
adm5.placeShip("3:3", 3, 'v', "ship1");
adm5.placeShip("4:4", 4, 'v', "ship1");
adm5.placeShip("5:5", 5, 'v', "ship1");
console.log("updated shipmap: " + adm5.getBoard());