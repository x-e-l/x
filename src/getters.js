const {_toses_, _props_, _metas_, _2str_, _call_, _2len_} = require('./symbols');

const {X$str2err, X$kv2ntry} = require('./transformers');
const {X$push, X$len, X$map} = require('./arrays');


const X$pcat = (
    ($, proto) => X$push(X$toses($), proto)
);

const X$pget = (
    ($, k) => $[k] || X$str2err('X$pget: missing prop: ' + X$2str(k))
);

const X$pown = (
    ($) => X$map(
        X$props($),
        k => X$kv2ntry(k, X$pget($, k))
    )
);


const X$metas = (
    ($) => $[_metas_] || {}
);


const X$mget = (
    ($, k) => X$metas($)[k]
);

const X$mown = (
    ($) => X$map(
        Object.keys(X$metas($)),
        k => X$kv2ntry(k, X$mget($, k))
    )
);


const X$toses = (
    ($) => X$mget($, _toses_) || []
);

const X$props = (
    ($) => X$mget($, _props_) || []
);


const X$call = (
    ($ => $)
);

const X$callf = (
    ($) => X$mget($, _call_) || X$call
);


const tostr = Function.prototype.call.bind(Object.prototype.toString);
const X$2str = (
    ($) => $ && $.toString ? $.toString() : '' + tostr($)
);

const X$2strf = (
    ($) => X$mget($, _2str_) || X$2str
);


const X$2len = (
    ($) => X$len(X$props($))
);

const X$2lenf = (
    ($) => X$mget($, _2len_) || X$2len
);


module.exports = ({

    X$pget,
    X$pown,

    X$mget,
    X$mown,

    X$pcat,

    X$metas,
    X$toses,
    X$props,

    X$callf,
    X$2strf,
    X$2lenf,

});



