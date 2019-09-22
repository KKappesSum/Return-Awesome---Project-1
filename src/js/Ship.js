/** Class that represents a Ship. 
 * @param {number} size : The size (i.e. length) of the Ship.
 */
class Ship {
	/**
	 * Create a Ship object.
	 */
	constructor(size) {
		this.size = size;
		this.status = true;
		this.numHits = 0;
		this.coords = [];
	}

	// ---- setters & getters ----
	/**
	 * Get the ship's size.
	 * @return {number} the Ship's size.
	 */
	getSize() {
		return this.size;
	}

	/**
	 * Get the ship's status.
	 * @return {boolean} true if the ship is still afloat, false if the ship has been sunk.
	 */
	getStatus() {
		return this.status;
	}

	/**
	 * Get the number of hits the ship has taken.
	 * @return {number} the number of hits
	 */
	getNumHits() {
		return this.numHits;
	}

	/**
	 * Get the ship's coordinates.
	 * @return {string[]} the coordinates occupied by the Ship
	 */
	getCoords() {
		return this.coords;
	}

	/**
	 * Update the ship's status when it sinks.
	 * @return {boolean} none.
	 */
	setStatus() {
		this.status = false;
	}

	/**
	 * Increment the number of hits the ship has taken, and call setSunk() if the ship takes enough hits to sink.
	 */
	incNumHits() {
		if(this.status === true)
		{
			this.numHits++;
			if(this.numHits >= this.size)
			{
				this.setStatus();
			}
		}
		else 
		{
			console.log("ERROR in Ship of size " + this.size + ": incNumHits: cannot make the number of hits greater than the size of the Ship.");
		}
	}

	/**
	 * Set the ship's coordinates.
	 * @param {string[]} coordsArr : an array of strings
	 */
	setCoords(coordsArr) {
		if(coordsArr.length > this.size)
		{
			console.log("ERROR in Ship of size " + this.size + ": setCoords : too many coordinates were passed in.");
		}
		else
		{
			for(let i = 0; i < this.size; i++)
			{
				this.coords[i] = coordsArr[i];
			}
		}
	}
}