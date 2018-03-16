const {NILKEY} = require('../e');
const {nil, frz$} = require('../u');

const {X$itr2set, X$props} = require('../boot');


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


module.exports = frz$({
    X$has,
});
