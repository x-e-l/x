const {
    _metas_, _atype_,
    _nil_, _arr_, _fun_, _cst_,
    _obj_,
} = require('../symbols');


const X$isx = (
    ($) => !!$ && !!$[_metas_]
);


const X$isnil = (
    ($) => X$isx($) && _nil_ === $[_metas_][_atype_]
);

const X$isarr = (
    ($) => X$isx($) && _arr_ === $[_metas_][_atype_]
);

const X$isfun = (
    ($) => X$isx($) && _fun_ === $[_metas_][_atype_]
);

const X$iscst = (
    ($) => X$isx($) && _cst_ === $[_metas_][_atype_]
);

const X$isobj = (
    ($) => X$isx($) && _obj_ === $[_metas_][_atype_]
);


module.exports = Object.freeze({

    X$isx,

    X$isnil,
    X$isarr,
    X$isfun,
    X$iscst,
    X$isobj,

});
