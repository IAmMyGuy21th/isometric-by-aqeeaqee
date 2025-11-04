// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`200010000101010101010101010101010101010101010101010101010101010101010101010909090909090909090909090909010109090909090909090909090909090101090502020202040402020202060901010905020202020404020202020609010109030909090903030909090903090101090309090909030309090909030901010903090b0b0b03030b0b0b09030901010903090b0b0b03030b0b0b09030901010903090b0909030309090b09030901010903090b0909030309090b09030901010903090b090a03030a090b09030901010903090b090a03030a090b0903090101090802020202070802020202070901010908020202020708020202020709010109050202020206050202020206090101090502020202060502020202060901010903090b090a03030a090b09030901010903090b090a03030a090b09030901010903090b0909030309090b09030901010903090b0909030309090b09030901010903090b0b0b03030b0b0b09030901010903090b0b0b03030b0b0b090309010109030909090903030909090903090101090309090909030309090909030901010908020202020708020202020709010109080202020207080202020207090101090909090909090909090909090901010909090909090909090909090909010101010101010101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222222
2..............22..............2
2..............22..............2
2..............22..............2
2...222..222...22...222..222...2
2...2......2...22...2......2...2
2...2.2..2.2...22...2.2..2.2...2
2..............22..............2
2..............22..............2
2...2.2..2.2...22...2.2..2.2...2
2...2......2...22...2......2...2
2...222..222...22...222..222...2
2..............22..............2
2..............22..............2
2..............22..............2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.castle.tileDarkGrass3,sprites.castle.shrub,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
