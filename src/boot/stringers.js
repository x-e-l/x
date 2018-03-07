const {isf} = require('../u');

const {X$isnil, X$isarr, X$isfun} = require('./predicates');
const {X$second, X$last, X$map} = require('./arrays');
const {X$toses, X$props, X$callf, X$2lenf} = require('./getters');


const OUT = '∅';
const OBJ = '𝜔';
const ARR = '𝛼';
const FUN = '𝜆';
const NIL = '𝜈';
const CST = 'φ';


const ps2s = (
    ($) => X$map(
        X$props($),
        k => '' + k + ':' + $[k]
    )
);

const f2s = (
    ($) => $ && isf($) && $.name ? $.name : $
);


const X$tos2str = (
    ($) => {

        const ts = X$toses($);
        const t = X$last(ts);

        return (
            X$second(ts) === t && (X$isarr($) || X$isfun($) || X$isnil($))
                ? ''
                : '' + (t && t.name ? t.name + ':' : '')
        )

    }
);


const X$obj2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + OBJ + '{' + ps2s($) + '}' + OBJ
);

const X$arr2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + ARR + '(' + X$2lenf($)($) + ')[' + ps2s($) + ']' + ARR
);

const X$fun2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + FUN + '(' + f2s(X$callf($)) + '){' + ps2s($) + '}' + FUN
);

const X$nil2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + NIL + '{' + ps2s($) + '}' + NIL
);

const X$cst2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + CST + '(' + f2s(X$callf($)) + '){' + ps2s($) + '}' + CST
);


module.exports = Object.freeze({
    X$obj2str,
    X$arr2str,
    X$fun2str,
    X$nil2str,
    X$cst2str,
});
