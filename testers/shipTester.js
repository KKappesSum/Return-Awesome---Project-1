for(let i = 1; i <= 5; i++)
{
	let adm = new Admiral(i, "A" + i);
	console.log(adm);
}

// --- SHIP MEMBER METHODS ---
let ship1 = new Ship(1);
console.log(ship1);

//original stats
console.log(ship1.getSize());
console.log(ship1.getStatus());
console.log(ship1.getNumHits());
console.log(ship1.getCoords());	// expect []

// test amending stats
let coords = new Array("1:1");
ship1.setCoords(coords);
console.log(ship1.getCoords());	// expect ["1:1"]
ship1.setStatus();
ship1.incNumHits();
console.log(ship1.getStatus());	// expect 'false'
ship1.incNumHits();		// no change
console.log(ship1.getStatus());
console.log(ship1.getNumHits());	// expect '1'



// --- ADMIRAL SETTERS & GETTERS ---


// --- ADMIRAL HELPER METHODS ---