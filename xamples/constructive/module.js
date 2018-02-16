const {X$Obj, X$Arr, X$Cst} = require('../../src/constructors');
const {X$toses} = require('../../src/getters');

console.log('X$Obj', X$toses(X$Obj));
console.log('X$Obj()', X$toses(X$Obj()));

console.log('X$Arr', X$toses(X$Arr));
console.log('X$Arr()', X$toses(X$Arr()));
console.log('X$Arr([])', X$toses(X$Arr([])));

const a = function A(x) {
    return x;
};

console.log('X$A()', X$toses(X$Cst(a)));
