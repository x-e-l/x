const {X$isnil, X$isarr, X$isfun} = require('./predicates');
const {X$second, X$last, X$map} = require('./arrays');
const {X$toses, X$props, X$callf, X$2lenf} = require('./getters');


const OUT = '∅';
const OBJ = '𝜔';
const ARR = '𝛼';
const FUN = '𝜆';
const NIL = '𝜈';
const CST = 'φ';

const props2str = (
    ($) => X$map(
        X$props($),
        k => '' + k + ':' + $[k]
    )
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
        : '' + X$tos2str($) + OBJ + '{' + props2str($) + '}' + OBJ
);

const X$arr2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + ARR + '(' + X$2lenf($)($) + ')[' + props2str($) + ']' + ARR
);

const X$fun2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + FUN + '(' + X$callf($) + '){' + props2str($) + '}' + FUN
);

const X$nil2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + NIL + '{' + props2str($) + '}' + NIL
);

const X$cst2str = (
    ($) => (null === $ || void 0 === $)
        ? OUT + '(' + $ + ')' + OUT
        : '' + X$tos2str($) + CST + '(' + X$callf($) + '){' + props2str($) + '}' + CST
);


module.exports = Object.freeze({
    X$obj2str,
    X$arr2str,
    X$fun2str,
    X$nil2str,
    X$cst2str,
});
