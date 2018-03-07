const {_props_} = require('../../src/symbols');
const {X$arr2str, X$fun2str, X$nil2str, X$obj2str} = require('../../src/boot/stringers');

const array = [1, 2, 3, 4]; // array values
array[_props_] = ['0', '1', '2', '3']; // array indices

const identity = a => a;
identity[_props_] = ['name'];


console.log(
    X$arr2str(array),
    X$fun2str(identity),
    X$nil2str({a: 1, b: 2, [_props_]: ['a']}),
    X$obj2str({a: 1, b: 2, c: 3, d: 4, [_props_]: ['d', 'b', 'c']}),
);
