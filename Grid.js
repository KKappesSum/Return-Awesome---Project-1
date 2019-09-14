class Grid{   
    constructor(size){
        let conf = new Config();
        this.#arr = new Array(size);
        for(let i = 0; i < size; i++){
            arr[i] = new Array(size);
            for(let j = 0; j < size; j++){
                arr[i][j] = conf.oceanTypes.properties["WATER"].value;
            }
        }
    }

    /**
     * 
     * @param {Array} locationArr: An array of all of the cells that contains a ship
     * @param {string} tableId: A string given the elementId for the table to be updated
     */
    populateGrid(locationArr, tableId){
        for(let i = 0; i < locationArr.length; i++){
            #arr[locationArr[i].substring(0, locationArr[i].indexOf(":") - 1)][locationArr[i].substring(locationArr[i].indexOf(":"))] 
                = conf.oceanTypes.properties["SHIP"].value;
        }   
        this.refreshTable(tableId);
    }

    /**
     * 
     * @param {string} tableId:  A string given the elementId for the table to be updated
     */
    refreshTable(tableId){

    }

    /**
     * 
     * @param {string} location: The location of the cell to update
     * @param {string} tableId: The identifier for the table to be changed
     * @returns {bool} True: a ship was hit; False: it was a miss
     */
    updateCell(location, tableId){
        this.#isHit = false;
        return this.#isHit;
    }

    
}