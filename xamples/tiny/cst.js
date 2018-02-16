const {X$call} = require('../../src/functions');
const {X$kv2ntry} = require('../../src/transformers');
const {X$2strf, X$toses, X$props} = require('../../src/getters');

const {X$Obj, X$Nil} = require('../../src/constructors');

const o = X$Obj(
    null,
    X$kv2ntry('a', 1),
    X$kv2ntry('b', 2)
);

console.log({
    o,
    'o.*toses':  X$toses(o),
    'o.*props':  X$props(o),
    'o.*2str':   X$2strf(o),
    'o.*2str()': X$call(X$2strf(o), o),
});


const n = X$Nil(null, ...['a', 'b'].map(X$kv2ntry));

console.log({
    n,
    'n.*toses':  X$toses(n),
    'n.*props':  X$props(n),
    'n.*2str':   X$2strf(n),
    'n.*2str()': X$call(X$2strf(n), n),
});
