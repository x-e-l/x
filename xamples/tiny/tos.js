const {X$toses} = require('../../src/boot/getters');

const {X$O, X$Obj, X$Nil, X$Arr, X$Fun, X$Cst} = require('../../src/boot/archetypes');

const f = ($, a, b) => a + b;

[
    ['X$Obj', X$Obj],
    ['X$O', X$O],
    ['X$Nil', X$Nil],
    ['X$Arr', X$Arr],
    ['X$Fun', X$Fun],
    ['X$Cst', X$Cst],

    ['X$Obj()', X$Obj()],
    ['X$Obj({})', X$Obj({})],
    ['X$O()', X$O()],

    ['X$Nil(null)', X$Nil(null)],

    ['X$Arr(null)', X$Arr(null)],
    ['X$Arr([])', X$Arr([])],

    ['X$Fun(f)', X$Fun(f)],

    ['X$Cst(f)', X$Cst(f)],

].map(
    ([lbl, $]) => console.log({
        [lbl + '.*toses']: X$toses($),
    })
);
