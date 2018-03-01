const {X$nil} = require('./predicates');
const {X$call} = require('./functions');
const {X$itr2set} = require('./transformers');
const {X$props, X$2strf} = require('./getters');

const X$df = (
    ($, v) => X$nil(v) ? $ : v
);

const X$has = (
    ($, k) => (
        null === $ || void 0 === $
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
