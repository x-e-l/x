const {_protos_, _atype_, _obj_, _2str_, _callf_, _length_} = require('./symbols');

const {X$df, X$frozen, X$str2err} = require('./transformers');
const {X$push, X$length, X$map} = require('./arrays');
const {X$props, X$metas, X$toses, X$ntry} = require('./objects');
const {X$obj2str} = require('./stringers');


const X$pcat = (
    ($, proto) => X$push(X$toses($), proto)
);

const X$pget = (
    ($, k) => $[k] || X$str2err('X$pget: missing prop: ' + k)
);

const X$pown = (
    ($) => X$map(
        X$props($),
        k => X$ntry(k, X$pget($, k))
    )
);

const X$mget = (
    (
        (ms) => (
            ($, k) => X$df(ms[k], X$metas($)[k]) || X$str2err('X$mget: missing meta: ' + k)
        )
    )({
        [_protos_]: [],
        [_atype_]:  _obj_,
        [_2str_]:   X$obj2str,
        [_callf_]:  X$frozen,
        [_length_]: X$length,
    })
);

const X$mown = (
    ($) => X$map(
        Object.keys(X$metas($)),
        k => X$ntry(k, X$mget($, k))
    )
);


module.exports = ({

    X$pget,
    X$pown,

    X$mget,
    X$mown,

    X$pcat,

});



