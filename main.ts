namespace SpriteKind {
    export const BLUE = SpriteKind.create()
    export const ORANGE = SpriteKind.create()
}
let mySprite: Sprite = null
let ORANGE_BALL: Sprite = null
let BLUE_BALL: Sprite = null
scene.setBackgroundColor(12)
for (let index = 0; index < 10; index++) {
    BLUE_BALL = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.BLUE)
    BLUE_BALL.setPosition(randint(0, 150), randint(0, 110))
    ORANGE_BALL = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . 5 5 7 5 7 5 5 . . . . . 
        . . . 5 . . 7 . 7 . . 5 . . . . 
        . . 5 . . 7 7 7 7 7 7 . 5 . . . 
        . . 5 . 7 . 7 . 7 . 7 . 5 . . . 
        . . 5 . 7 . 7 . 7 . . . 5 . . . 
        . . 5 . 7 7 7 7 7 7 7 . 5 . . . 
        . . 5 . . . 7 . 7 . 7 . 5 . . . 
        . . 5 . 7 . 7 . 7 . 7 . 5 . . . 
        . . 5 . 7 7 7 7 7 7 . . 5 . . . 
        . . . 5 . . 7 . 7 . . 5 . . . . 
        . . . . 5 5 7 5 7 5 5 . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.ORANGE)
    ORANGE_BALL.setPosition(randint(0, 150), randint(0, 110))
}
game.splash("WELCOME TO 'DIVIDING MACHINE'", "By - NIIN SAURABH")
game.setDialogCursor(img`
    ....................
    .........4444.......
    ..........4454......
    ...........4554.....
    ...........44554....
    ............44554...
    .............44454..
    4444444444444455454.
    45454545454545445454
    44444444444444444454
    54545454545454545454
    44444444444444554554
    .............454554.
    ............445454..
    ...........445454...
    ..........445454....
    ........4445454.....
    .........44554......
    ..........444.......
    ....................
    `)
game.setDialogFrame(img`
    .................................
    ...cc......................cc....
    ..c55c..bbbb...bbbbb......c55c...
    .cb55bcbdddbbbbbdddbbbbbbcb55bc..
    b555555bbdddb111bdddb11db555555b.
    bb5555bbdbdb11111bdb1111bb5555bb.
    cb5555bcddd11111ddd11111cb5555bc.
    .c5bb5c1111d111d111d111ddc5bb5c..
    .cbbbbc111111111111111111cbbbbc..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdb1d111111111111111111111111b..
    .bb111d11111111111111111111111b..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdbb1111111111111111111111111b..
    .bbbd1111111111111111111111111b..
    ..bcc111111111111111111111dccdb..
    ..c55c111d111d111d111d1111c55cb..
    .cb55bcdd11111ddd11111dddcb55bc..
    b555555b11111bdb11111bdbb555555b.
    bb5555bbb111bdddb111bdddbb5555bb.
    cb5555bcdbbbbbdddbbbbbddcb5555bc.
    .c5bb5c.bb...bbbbb...bbbbc5bb5c..
    .cbbbbc..................cbbbbc..
    `)
game.showLongText("FIRST ENTER 1st NUMBER AND THEN ENTER THE ANOTHER NUMBER ", DialogLayout.Center)
game.showLongText("AND GET THE OUTPUT AS 1st NUMBER IS DIVISIBLE BY 2nd NUMBER ELSE 1st NUMBER IS NOT DIVISIBLE BY 2nd NUMBER", DialogLayout.Center)
let _1st_number = game.askForNumber("ENTER THE 1st NUMBER")
let _2nd_NUMBER = game.askForNumber("ENTER THE 2nd NUMBER")
if (_1st_number % _2nd_NUMBER == 0) {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.say("" + _1st_number + " is divisible by " + _2nd_NUMBER)
}
if (!(_1st_number % _2nd_NUMBER == 0)) {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.say("" + _1st_number + " is not divisible by " + _2nd_NUMBER)
}
