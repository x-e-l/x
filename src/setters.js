const {_props_, _toses_, _metas_, _key_, _val_} = require('./symbols');
const {X$metas, X$toses, X$props} = require('./getters');

const push$ = (
    ($, a) => {
        $.push(a);
        return $;
    }
);


const X$pset = (
    ($, k, v) => {
        $[k] = v;
        /**@type Array*/
        const ps = X$props($);
        $[_props_] = ps.includes(k) ? ps : push$(ps, k); // mutates values
        return $;
    }
);

const X$mset = (
    ($, k, v) => {
        const metas = X$metas($);
        metas[k] = v; // mutates value
        $[_metas_] = metas; // mutates value
        return $;
    }
);

const X$nset = (
    ($, ntry) => X$pset($, ntry[_key_], ntry[_val_]) // mutates values
);


const X$padd = (
    ($, proto) => {
        const ts = X$toses($);
        X$mset($, _toses_, push$(ts, proto)); // mutates values
        return $;
    }
);


module.exports = ({
    X$pset,
    X$mset,
    X$nset,
    X$padd,
});
