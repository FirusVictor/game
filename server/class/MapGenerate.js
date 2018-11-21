class MapGenerate{
    static Generate(count=1) {
        let map = [];
        for (let chank = 0; chank<count;chank++){
            map[chank]=[];
            for (let row = 0;row<256;row++){
                map[chank][row]=[];
                for (let column=0;column<16;column++){
                    let block_id = 0;
                    if(row<1)
                        block_id=1;
                    map[chank][row][column]=block_id;
                }
            }
        }
        return map;
    }
}
module.exports = MapGenerate;