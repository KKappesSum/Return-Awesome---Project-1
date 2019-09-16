for(let i = 1; i <= 5; i++)
{
	let adm = new Admiral(i, "A" + i);
	console.log(adm);
}

// --- SHIP MEMBER METHODS ---
// ship of size 1
let ship1 = new Ship(1);
console.log(ship1);

//original stats
console.log("Size: " + ship1.getSize());	// 1
console.log("Status: " + ship1.getStatus());	// true
console.log("Num hits: " + ship1.getNumHits());	// 0
console.log("Coords: " + ship1.getCoords());	// []

// test amending stats
let coords = new Array("1:1");
ship1.setCoords(coords);
console.log("Coords: " + ship1.getCoords());	// ["1:1"]
ship1.incNumHits();
console.log("Num hits: " + ship1.getNumHits());	// 1
console.log("Status: " + ship1.getStatus());	// 'false'

// ship of size 5
let ship5 = new Ship(5);
console.log(ship5);
let coords5 = new Array(5);
for(let i = 1; i <= 5; i++)
{
	coords5.push(i);
}
ship5.setCoords(coords5);
console.log("Coords: " + ship1.getCoords());
while(ship5.getStatus() === true)
{
	ship5.incNumHits();
	console.log("Num hits: " + ship5.getNumHits());
	console.log("Status: " + ship5.getStatus());
}
console.log("Status: " + ship5.getStatus());