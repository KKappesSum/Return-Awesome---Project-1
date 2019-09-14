class Config{   
    constructor(){
        // var oceanTypes = 0;
        let BOARD_SIZE = 8;
        let oceanTypes ={
                properties:{
                1:{name: "WATER", value: 0, code: "W"},
                2:{name: "SHIP", value: 1, code: "S"},
                3:{name: "MISS", value: 2, code: "M"},
                4:{name: "HIT", value: 3, code: "H"}
            }
        }
    }
    
}