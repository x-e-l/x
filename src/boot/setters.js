const {nil, push$, frz$} = require('../u');
const {NILMOD, NILKEY} = require('../e');

const {_props_, _toses_, _metas_, _key_, _val_} = require('../symbols');
const {X$isnil} = require('./predicates');
const {X$last} = require('./arrays');
const {X$metas, X$toses, X$props} = require('./getters');
const {X$2str} = require('./objects');


const X$preg = (

    ($, $key) => {

        if (nil($)) {
            return $;
        }

        if (X$isnil($)) {
            throw Error(`${NILMOD}: X$preg(${X$2str($)},_)`);
        }

        if (nil($key)) {
            throw Error(`${NILKEY}: X$preg(_,${$key})`);
        }

        /**@type Array*/
        const props = X$props($);
        const metas = X$metas($);

        metas[_props_] = props.includes($key) ? props : push$(props, $key); // mutates values
        $[_metas_] = metas; // mutates value

        return $;

    }

);

const X$pset = (

    ($, $key, $val) => {

        if (nil($)) {
            return $;
        }

        if (X$isnil($)) {
            return $;
        }

        if (nil($key)) {
            throw Error(`${NILKEY}: X$pset(_,${$key})`);
        }

        $[$key] = $val; // mutates value

        return X$preg($, $key); // mutates value

    }

);

const X$mset = (

    ($, $key, $val) => {

        if (nil($)) {
            return $;
        }

        // if (X$isnil($)) {
        //     // throw Error(`${NILMOD}: X$mset(${X$2str($)},_)`);
        //     throw Error(`${NILMOD}: X$mset(${$},_)`);
        // }

        if (nil($key)) {
            throw Error(`${NILKEY}: X$mset(_,${$key})`);
        }

        const metas = X$metas($);

        metas[$key] = $val; // mutates value
        $[_metas_] = metas; // mutates value

        return $;
    }

);

const X$rset = (

    ($, $ref) => {

        if (nil($ref)) {
            throw Error(`${NILMOD}: X$rset(${X$2str($)},_)`);
        }

        return nil($) ? $ : X$pset($, $ref[_key_], $ref[_val_]) // mutates values

    }

);


const X$tadd = (

    ($, proto) => {
        const toses = X$toses($);
        if (X$last(toses) === proto) {
            return $;
        }
        return X$mset($, _toses_, push$(toses, proto)); // mutates values
    }


);


module.exports = frz$({
    X$preg,
    X$pset,
    X$mset,
    X$rset,
    X$tadd,
});
