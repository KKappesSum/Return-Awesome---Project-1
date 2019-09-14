/** Class representing a Ship. */
class Ship {
	#size;
	#status;
	#numHits;
	#coords;

	/**
	 * Create a Ship object.
	 * @param {integer} size - The size (i.e. length) of the Ship.
	 */
	constructor(size) {
		this.#size = size;
		this.#status = true;
		this.#numHits = 0;
		this.#coords = newArray(size);
	}

	/* TODO: setters & getters */
	/**
	 * Get the ship's size.
	 * @return {integer} the Ship's size.
	 */
	getSize() {
		return Ship.#size;
	}

	/**
	 * Get the ship's status.
	 * @return {boolean} true if the ship is still afloat, false if the ship has been sunk.
	 */
	getStatus() {
		return Ship.#status;
	}

	/**
	 * Update the ship's status when it sinks.
	 * @param none.
	 * @return none.
	 */
	setStatus() {
		Ship.#status = false;
	}

	/**
	 * Increment the number of hits the ship has taken, and call setSunk() if the ship takes enough hits to sink.
	 * @param none.
	 * @return none.
	 */
	incNumHits() {
		if(Ship.#status === true)
		{
			Ship.#numHits--;
			if(Ship.#numHits >= Ship.#numSize)
			{
				Ship.setStatus();
			}
		}
		// TODO: throw error if you try to sink a ship that's already sunk?  or prevent this in UI
	}



	/**
	 * Set the ship's coordinates.
	 * @param {string[]} coordsArr, an array of strings
	 * @return none.
	 */
	setCoords(coordsArr) {
		for(let i = 0; i < Ship.#size; i++)
		{
			Ship.#coords[i] = coordsArr[i];
		}
	}

	/**
	 * Get the ship's coordinates.
	 * @param none.
	 * @return {string[]} #coords, an array of strings
	 */
	getCoords() {
		return Ship.#coords;
	}
}