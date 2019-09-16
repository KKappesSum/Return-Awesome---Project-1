/** Class representing a Ship. 
 * @param {integer} size - The size (i.e. length) of the Ship.
 */
class Ship {
	#size;
	#status;
	#numHits;
	#coords;

	/**
	 * Create a Ship object.
	 */
	constructor(size) {
		this.#size = size;
		this.#status = true;
		this.#numHits = 0;
		this.#coords = [];
	}

	// ---- setters & getters ----
	/**
	 * Get the ship's size.
	 * @return {integer} the Ship's size.
	 */
	getSize() {
		return this.#size;
	}

	/**
	 * Get the ship's status.
	 * @return {boolean} true if the ship is still afloat, false if the ship has been sunk.
	 */
	getStatus() {
		return this.#status;
	}

	/**
	 * Get the number of hits the ship has taken.
	 * @return {integer} the number of hits
	 */
	getNumHits() {
		return this.#numHits;
	}

	/**
	 * Get the ship's coordinates.
	 * @param none.
	 * @return {string[]} #coords, an array of strings
	 */
	getCoords() {
		return this.#coords;
	}

	/**
	 * Update the ship's status when it sinks.
	 * @param none.
	 * @return none.
	 */
	setStatus() {
		this.#status = false;
	}

	/**
	 * Increment the number of hits the ship has taken, and call setSunk() if the ship takes enough hits to sink.
	 * @param none.
	 * @return none.
	 */
	incNumHits() {
		if(this.#status === true)
		{
			this.#numHits--;
			if(this.#numHits >= this.#size)
			{
				this.setStatus();
			}
		}
	}

	/**
	 * Set the ship's coordinates.
	 * @param {string[]} coordsArr, an array of strings
	 * @return none.
	 */
	setCoords(coordsArr) {
		for(let i = 0; i < this.#size; i++)
		{
			this.#coords[i] = coordsArr[i];
		}
	}
}