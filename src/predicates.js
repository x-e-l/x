const {
    _metas_, _atype_,
    _nil_, _arr_, _fun_, _cst_,
    _obj_,
} = require('./symbols');


const X$nil = (
    ($) => (null === $) || (void 0 === $)
);


const X$isnil = (
    ($) => !!$ && !!$[_metas_] && $[_metas_][_atype_] === _nil_
);

const X$isarr = (
    ($) => !!$ && !!$[_metas_] && $[_metas_][_atype_] === _arr_
);

const X$isfun = (
    ($) => !!$ && !!$[_metas_] && $[_metas_][_atype_] === _fun_
);

const X$iscst = (
    ($) => !!$ && !!$[_metas_] && $[_metas_][_atype_] === _cst_
);


const X$isobj = (
    ($) => !!$ && !!$[_metas_] && ($[_metas_][_atype_] === _obj_ || X$nil($[_metas_][_atype_]))
);


module.exports = Object.freeze({

    X$nil,

    X$isnil,
    X$isarr,
    X$isfun,
    X$iscst,

    X$isobj,

});
