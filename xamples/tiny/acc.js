const {_props_, _call_, _metas_} = require('../../src/symbols');
const {X$pown, X$mown, X$callf} = require('../../src/getters');

const array = [1, 2, 3, 4]; // array values
array[_metas_] = {
    [_props_]: [0, 1, 2, 3], // array indices
};

const stringy = ($ => $.a + $.b);
stringy[_metas_] = {
    [_props_]: ['name'],
    [_call_]:  stringy,
};
stringy.a = 1;
stringy.b = 2;


[array, stringy].forEach(
    o => {
        console.log(o);
        console.log(X$mown(o));
        console.log(X$pown(o));
        console.log(X$callf(o)(o));
    }
);
