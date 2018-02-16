const {X$nil} = require('./predicates');
const {X$itr2set} = require('./transformers');
const {X$props} = require('./getters');

const X$df = (
    ($, v) => X$nil(v) ? $ : v
);

const X$has = (
    ($, k) => (
        /**@type{function(*=): Set<*>}*/
        X$itr2set(X$props($))
    ).has(k)
);

module.exports = ({
    X$df,
    X$has,
});
