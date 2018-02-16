const {X$call} = require('../../src/functions');
const {X$kv2ntry} = require('../../src/transformers');
const {X$2strf, X$toses, X$props} = require('../../src/getters');

const {X$Obj, X$Nil, X$Arr} = require('../../src/constructors');

[
    ['o', X$Obj(
        null,
        X$kv2ntry('a', 1),
        X$kv2ntry('b', 2)
    )],
    ['n', X$Nil(null, ...['a', 'b'].map(X$kv2ntry))],
    ['a1', X$Arr(null, ...['a', 'c', 'b', 'd'].map(X$kv2ntry))],
    ['a2', X$Arr([], ...['b', 'a', 'c', 'd'].map(X$kv2ntry))],
].map(
    ([n, o]) => console.log({
        [n]:              o,
        [n + '.*toses']:  X$toses(o),
        [n + '.*props']:  X$props(o),
        [n + '.*2str']:   X$2strf(o),
        [n + '.*2str()']: X$call(X$2strf(o), o),
    })
);
