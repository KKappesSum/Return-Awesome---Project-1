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

        function createShip(location){
            
        }
    }

    populateGrid(locationArr){
        for(let i = 0; i < locationArr.length; i++){
            #arr[i] = conf.oceanTypes.properties["SHIP"].code;
        }        
    }

    updateCell(location){
        this.#isHit = false;
        return this.#isHit;
    }

    
}