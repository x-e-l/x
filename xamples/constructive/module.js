const {X$Obj, X$Arr, X$Cst, X$Nil, X$toses} = require('../../src/x');

console.log('X$Obj', X$toses(X$Obj));
console.log('X$Obj()', X$toses(X$Obj()));

console.log('X$Arr', X$toses(X$Arr));
console.log('X$Arr()', X$toses(X$Arr()));
console.log('X$Arr([])', X$toses(X$Arr([])));

const A = X$Cst(function A() {
    return X$Nil();
});

console.log('A', X$toses(A));
console.log('A()', X$toses(A()));


