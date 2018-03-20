const X = require('../../src/x');

const {X$O, X$Obj, X$Nil, X$Err, X$Arr, X$Fun} = X;
const {X$2str, X$kv2ref} = X;


const nothing = null;
const empty = X$Obj();
const nil = X$Nil();
const error = X$Err();
const array = X$Arr();
const fn = X$Fun();

const complex = X$O(
    X$kv2ref('a', nothing),
    X$kv2ref('b', empty),
    X$kv2ref('c', nil),
    X$kv2ref('d', array),
    X$kv2ref('e', fn),
);

const nilcpx = X$Nil(null, X$kv2ref('b', empty));

console.log('nothing ', X$2str(nothing));
console.log('empty   ', X$2str(empty));
console.log('nil     ', X$2str(nil));
console.log('array   ', X$2str(array));
console.log('function', X$2str(fn));
console.log('complex ', X$2str(complex));

console.log('nilcpx  ', X$2str(nilcpx));
console.log('error   ', X$2str(error));

