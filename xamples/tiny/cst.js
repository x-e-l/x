const {X$call} = require('../../src/functions');
const {X$mget, X$callf, X$2strf, X$toses, X$props} = require('../../src/getters');

const {X$Obj} = require('../../src/constructors');

const o = X$Obj();
console.log(o);


console.log({
    ['o.*toses']:  X$toses(o),
    ['o.*props']:  X$props(o),
    ['o.*2str']:   X$2strf(o),
    ['o.*2str()']: X$call(X$2strf(o), o),
    // ['o.*call']:   X$callf(o),
    // ['o()']:       call(X$callf(o), o),
});
