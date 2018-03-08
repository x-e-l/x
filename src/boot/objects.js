const {nil} = require('../u');
const {X$call} = require('./functions');
const {X$itr2set} = require('./transformers');
const {X$props, X$2strf} = require('./getters');

const X$df = (
    ($, v) => nil(v) ? $ : v
);

const X$has = (
    ($, k) => (
        nil($)
            ? $
            : (
                /**@type{function(*=): Set<*>}*/
                X$itr2set(X$props($))
            ).has(k)
    )
);

const X$2str = (
    ($) => X$call(X$2strf($), $)
);

module.exports = Object.freeze({
    X$df,
    X$has,
    X$2str,
});
