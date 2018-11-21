class Player{
    constructor(x,y,name){
        this.name=name;
        this.position = {x:x,y:y};
        this.items = {};
    }
}
module.exports = Player;