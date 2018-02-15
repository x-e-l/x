const {_props_, _protos_, _metas_, _callf_, _key_, _val_} = require('./symbols');
const {X$nil} = require('./predicates');
const {X$len} = require('./arrays');
const {X$itr2set} = require('./transformers');

const X$O = (
    () => Object.create(null)
);


const X$metas = (
    ($) => $[_metas_] || {}
);

const X$toses = (
    ($) => X$metas($)[_protos_] || []
);

const X$props = (
    ($) => X$metas($)[_props_] || []
);


const X$callf = (
    ($) => X$metas($)[_callf_] || (() => $)
);


const X$length = (
    ($) => X$len(X$props($))
);


const X$df = (
    ($, v) => X$nil(v) ? $ : v
);

const X$has = (
    ($, k) => (
        /**@type{function(*=): Set<*>}*/
        X$itr2set(X$props($))
    ).has(k)
);

const X$ntry = (
    (k, v) => ({
        [_key_]: k,
        [_val_]: v,
    })
);


module.exports = ({
    X$O,

    X$toses,
    X$props,
    X$metas,
    X$callf,

    X$length,

    X$df,
    X$has,
    X$ntry,
});
