/**
 * Grid object for storing and updating information for each battlegrid
 * @param {number} size: The size of the array to be created.
 */
class Grid{   
    #arr;
    #conf;
    #isHit;
    #temp;

    constructor(size){
        this.#conf = new Config();
        this.#arr = new Array(size);
        for(let i = 0; i < size; i++){
            this.#arr[i] = new Array(size);
            for(let j = 0; j < size; j++){
                this.#arr[i][j] = this.#conf.oceanTypes.WATER;
            }
        }
    }

    /**
     * Places ships on the grid based on an array of cooridants and updates the onscreen grid
     * @param {Array} locationArr: An array of all of the cells that contains a ship
     * @param {string} tableId: A string given the elementId for the table to be updated
     */
    populateGrid(locationArr, tableId){
        for(let i = 0; i < locationArr.length; i++){
            this.#arr[locationArr[i].substring(0, locationArr[i].indexOf(":") - 1)]
                [locationArr[i].substring(locationArr[i].indexOf(":"))] 
                = this.#conf.oceanTypes.SHIP;
        }   
        this.refreshTable(tableId, True);
    }

    /**
     * A function for updating an onscreen table to display the current values in the grid
     * @param {string} tableId:  A string given the elementId for the table to be updated
     * @param {bool} isShipMap: True: Updates the shipmap; False: Updates the firingmap
     */
    refreshTable(tableId, isShipMap){
        for(let i = 0; i < document.getElementById(tableId).rows.length; i++){
            for(let j = 0; j < document.getElementById(tableId).rows[0].cells.length; j++){
                this.#temp = document.getElementById(tableId).rows[i].cells[j].innerHTML.style.backgroundColor;
                if(isShipMap == true){
                    if(this.#arr[i][j] == this.#conf.oceanTypes.SHIP){
                        this.#temp = this.#conf.oceanTypes.SHIP;
                    }else if(this.#arr[i][j] == this.#conf.oceanTypes.HIT){
                        this.#temp = this.#conf.oceanTypes.HIT;
                    }else{
                        this.#temp = this.#conf.oceanTypes.WATER;
                    }
                }else{
                    if(this.#arr[i][j] == this.#conf.oceanTypes.MISS){
                        this.#temp = this.#conf.oceanTypes.MISS;
                    }else if(this.#arr[i][j] == this.#conf.oceanTypes.HIT){
                        this.#temp = this.#conf.oceanTypes.HIT;
                    }else{
                        this.#temp = this.#conf.oceanTypes.WATER;
                    }
                }
            }
        }
    }

    /**
     * Changes a single cell based on whether or not the shot was a hit or a miss.
     * @param {string} location: The location of the cell to update
     * @param {string} tableId: The identifier for the table to be changed
     * @returns {bool} True: a ship was hit; False: it was a miss
     */
    updateCell(location, tableId){
        this.#isHit = false;
        let i = location.substring(0, location.indexOf(":") - 1);
        let j = location.substring(location.indexOf(":"));
        if(this.#arr[i][j] == this.conf.oceanTypes.SHIP){
            this.#arr[i][j] = this.#conf.oceanTypes.HIT;
            this.#isHit = true;
        }else{
            this.#arr[i][j] = this.#conf.oceanTypes.MISS;
        }
        this.refreshTable(tableId, false)
        return this.#isHit;
    }
}
