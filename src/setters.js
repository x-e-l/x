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

        if (null === $ || void 0 === $) {
            return $;
        }

        // TODO: @azder: check k as well

        $[k] = v;

        /**@type Array*/
        const props = X$props($);
        const metas = X$metas($);

        metas[_props_] = props.includes(k) ? props : push$(props, k); // mutates values
        $[_metas_] = metas; // mutates value

        return $;
    }

);

const X$mset = (

    ($, k, v) => {

        if (null === $ || void 0 === $) {
            return $;
        }

        // TODO: @azder: check k as well

        const metas = X$metas($);

        metas[k] = v; // mutates value
        $[_metas_] = metas; // mutates value

        return $;
    }

);

const X$nset = (

    ($, ntry) => null === $ || void 0 === $
        ? $
        : X$pset($, ntry[_key_], ntry[_val_]) // mutates values

);


const X$padd = (

    ($, proto) => X$mset(
        $,
        _toses_,
        push$(X$toses($), proto) // mutates values
    )


);


module.exports = Object.freeze({
    X$pset,
    X$mset,
    X$nset,
    X$padd,
});
