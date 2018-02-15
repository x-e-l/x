const {_props_, _protos_, _metas_} = require('./symbols');
const {X$mget} = require('./getters');

const push$ = (
    ($, a) => {
        $.push(a);
        return $;
    }
);

const X$pset = (
    ($, k, v) => {
        $[k] = v;
        const ps = $[_props_] || [];
        $[_props_] = ps.includes(k) ? ps : push$(ps, k); // mutates values
        return $;
    }
);

const X$mset = (
    ($, k, v) => {
        const metas = $[_metas_];
        metas[k] = v; // mutates value
        $[_metas_] = metas; // mutates value
        return $;
    }
);


const X$padd = (
    ($, proto) => {
        const ts = X$mget($, _protos_);
        X$mset($, _protos_, push$(ts, proto)); // mutates values
        return $;
    }
);


module.exports = ({
    X$pset,
    X$mset,
    X$padd,
});
