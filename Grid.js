class Grid{   
    constructor(size){
        let conf = new Config();
        this.#arr = new Array(size);
        for(let i = 0; i < size; i++){
            arr[i] = new Array(size);
            for(let j = 0; j < size; j++){
                arr[i][j] = conf.oceanTypes.properties["WATER"].code;
            }
        }
    }

    /**
     * 
     * @param {Array} locationArr: An array of all of the cells the ship contains
     */
    populateGrid(locationArr){
        for(let i = 0; i < locationArr.length; i++){
            #arr[i] = conf.oceanTypes.properties["SHIP"].code;
        }        
    }

    /**
     * 
     * @param {string} tableId: Identifies which table element to update 
     */
    refreshTable(tableId){

    }

    /**
     * 
     * @param {string} location: The location of the cell to update
     * @returns {bool} If true, a ship was hit. If false, it was a miss
     */
    updateCell(location){
        this.#isHit = false;
        return this.#isHit;
    }

    
}