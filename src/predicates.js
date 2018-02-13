const {
    _atype_,
    _nil_, _arr_, _fun_, _cst_,
    _obj_,
} = require('./symbols');


const X$nil = (
    ($) => (null === $) || (void 0 === $)
);


const X$isnil = (
    ($) => $[_atype_] === _nil_
);

const X$isarr = (
    ($) => $[_atype_] === _arr_
);

const X$isfun = (
    ($) => $[_atype_] === _fun_
);

const X$iscst = (
    ($) => $[_atype_] === _cst_
);


const X$isobj = (
    ($) => $[_atype_] === _obj_ || X$nil($[_atype_])
);


module.exports = ({

    X$nil,

    X$isnil,
    X$isarr,
    X$isfun,
    X$iscst,

    X$isobj,

});
