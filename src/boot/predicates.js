const {
    _metas_, _atype_,
    _nil_, _arr_, _fun_, _cst_,
    _obj_,
} = require('../symbols');

const {nil} = require('../u');


const X$isnil = (
    ($) => !!$ && !!$[_metas_] && _nil_ === $[_metas_][_atype_]
);

const X$isarr = (
    ($) => !!$ && !!$[_metas_] && _arr_ === $[_metas_][_atype_]
);

const X$isfun = (
    ($) => !!$ && !!$[_metas_] && _fun_ === $[_metas_][_atype_]
);

const X$iscst = (
    ($) => !!$ && !!$[_metas_] && _cst_ === $[_metas_][_atype_]
);


const X$isobj = (
    ($) => !!$ && !!$[_metas_] && (_obj_ === $[_metas_][_atype_] || nil($[_metas_][_atype_]))
);


module.exports = Object.freeze({

    X$isnil,
    X$isarr,
    X$isfun,
    X$iscst,

    X$isobj,

});
