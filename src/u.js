// only simple utility functions here
// anything more complex and/or verbose
// should probaby be elsewhere


// aliases beging
const ftos = Function.prototype.toString;
const otos = Function.prototype.call.bind(Object.prototype.toString);

const owns = Object.getOwnPropertySymbols;
const ownk = Object.getOwnPropertyNames;

const nan = Number.isNaN;
const frz$ = Object.freeze;
// aliases end

const isf = ($ => typeof $ === 'function');


const tok = ($ => {
    // noinspection JSUnusedLocalSymbols
    // noinspection UnnecessaryLocalVariableJS
    const K = ($$) => $;
    return K;
});


const iife = ($ => isf($) ? $() : $);


const nil = (
    ($) => (null === $) || (void 0 === $)
);


const primitives = ['boolean', 'number', 'string'];
const prim = (
    ($) => nil($) || primitives.includes(typeof $)
);

const f2s = (
    ($) => $ && isf($) && $.name ? $.name : $
);


const t = (
    ($) => '⦰(' + $ + ')⦰'
);

const js2s = (
    ($) => nil($)
        ? t($)
        : t($ && $.toString ? $.toString() : '' + otos($))
);


const push$ = (
    ($, item) => {
        $.push(item);
        return $;
    }
);


module.exports = frz$({

    isf,
    tok,
    iife,

    nil,
    prim,

    f2s,
    js2s,

    ftos,
    otos,
    owns,
    ownk,

    nan,

    frz$,
    push$,

});
