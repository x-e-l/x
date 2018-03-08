// only simple utility functions here
// anything more complex and/or verbose
// should probaby be elsewhere

const isf = ($ => typeof $ === 'function');


// noinspection JSUnusedLocalSymbols
const tok = ($ => ($$) => $);


const iife = ($ => isf($) ? $() : $);


const nil = (
    ($) => (null === $) || (void 0 === $)
);


const f2s = (
    ($) => $ && isf($) && $.name ? $.name : $
);


const ftos = Function.prototype.toString;
const owns = Object.getOwnPropertySymbols;
const tstr = Function.prototype.call.bind(Object.prototype.toString);


const push$ = (
    ($, item) => {
        $.push(item);
        return $;
    }
);


module.exports = Object.freeze({

    isf,
    tok,
    iife,
    nil,

    f2s,

    ftos,
    owns,
    tstr,

    push$,

});
