const {X$call} = require('../../src/boot/functions');
const {X$kv2ref} = require('../../src/boot/transformers');
const {X$2strf, X$toses, X$props, X$callf} = require('../../src/boot/getters');

const {X$Obj, X$Nil, X$Arr, X$Fun} = require('../../src/boot/constructors');

[
    ['o', X$Obj(
        null,
        X$kv2ref('a', 1),
        X$kv2ref('b', 2)
    )],
    ['n', X$Nil(null, ...['a', 'b'].map(X$kv2ref))],
    ['a1', X$Arr(null, ...['a', 'c', 'b', 'd'].map(X$kv2ref))],
    ['a2', X$Arr([], ...['b', 'a', 'c', 'd'].map(X$kv2ref))],
    ['f', X$Fun(($) => $.a + $.b, ...['a', 'b'].map(X$kv2ref))]
].map(
    ([lbl, $]) => console.log({
        [lbl]:                   $,
        [lbl + '.*toses']:       X$toses($),
        [lbl + '.*props']:       X$props($),
        [lbl + '.*2str']:        X$2strf($),
        [lbl + '.*2str()']:      X$call(X$2strf($), $),
        [lbl + '.*call()']:      X$callf($),
        [lbl + '(' + lbl + ')']: X$call(X$callf($), $),
        [lbl + '({a:1,b:2})']:   X$call(X$callf($), {a: 1, b: 2}),
    })
);
