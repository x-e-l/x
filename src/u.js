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


module.exports = Object.freeze({
    isf,
    tok,
    iife,
    nil,
});
