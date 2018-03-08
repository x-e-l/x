const {nil} = require('../u');
const {_props_, _toses_, _metas_, _key_, _val_} = require('../symbols');
const {X$metas, X$toses, X$props} = require('./getters');

const push$ = (
    ($, a) => {
        $.push(a);
        return $;
    }
);


const X$preg = (

    ($, k) => {

        if (nil($)) {
            return $;
        }

        // TODO: @azder: check k as well, maybe return Err()

        /**@type Array*/
        const props = X$props($);
        const metas = X$metas($);

        metas[_props_] = props.includes(k) ? props : push$(props, k); // mutates values
        $[_metas_] = metas; // mutates value

        return $;

    }

);

const X$pset = (

    ($, k, v) => {

        if (nil($)) {
            return $;
        }

        // TODO: @azder: check k as well, maybe return Err()

        $[k] = v; // mutates value

        return X$preg($, k); // mutates value

    }

);

const X$mset = (

    ($, k, v) => {

        if (nil($)) {
            return $;
        }

        // TODO: @azder: check k as well, maybe return Err()

        const metas = X$metas($);

        metas[k] = v; // mutates value
        $[_metas_] = metas; // mutates value

        return $;
    }

);

const X$nset = (

    ($, ref) => (
        nil($)
        ||
        nil(ref) // TODO: @azder: return Err()
    )
        ? $
        : X$pset($, ref[_key_], ref[_val_]) // mutates values

);


const X$tadd = (

    ($, proto) => X$mset(
        $,
        _toses_,
        push$(X$toses($), proto) // mutates values
    )


);


module.exports = Object.freeze({
    X$preg,
    X$pset,
    X$mset,
    X$nset,
    X$tadd,
});
