const {nil, frz$} = require('../u');
const {NILKEY} = require('../e');

const {X$call} = require('./functions');
const {X$itr2set} = require('./transformers');
const {X$props, X$2strf, X$2bulf} = require('./getters');

const X$df = (
    ($, v) => nil(v) ? $ : v
);

const X$has = (

    ($, $key) => {

        if (nil($)) {
            return $;
        }

        if (nil($key)) {
            throw Error(`${NILKEY}: X$has(_,${$key})`);
        }

        return (
            /**@type{function(*=): Set<*>}*/
            X$itr2set(X$props($))
        ).has($key)
    }

);

const X$2str = (
    ($) => X$call(X$2strf($), $)
);

const X$2bul = (
    ($) => X$call(X$2bulf($), $)
);

module.exports = frz$({
    X$df,
    X$has,
    X$2str,
    X$2bul,
});
