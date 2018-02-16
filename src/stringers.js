const {X$isnil, X$isarr, X$isfun, X$isobj} = require('./predicates');
const {X$second, X$last, X$map} = require('./arrays');
const {X$toses, X$props, X$callf, X$2lenf} = require('./getters');


const X$props2str = (
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
            (X$second(ts) === t && (X$isarr($) || X$isfun($) || X$isnil($)))
                ? ''
                : (X$isobj($) ? '' : '' + (t && t.name ? t.name : '∅') + ':')
        )

    }
);


const X$obj2str = (
    ($) => '' + X$tos2str($) + '𝜔{' + X$props2str($) + '}𝜔'
);

const X$arr2str = (
    ($) => '' + X$tos2str($) + '𝛼(' + X$2lenf($)($) + ')[' + X$props2str($) + ']𝛼'
);

const X$fun2str = (
    ($) => '' + X$tos2str($) + '𝜆(' + X$callf($) + '){' + X$props2str($) + '}𝜆'
);

const X$nil2str = (
    ($) => '' + X$tos2str($) + '𝜈{' + X$props2str($) + '}𝜈'
);


module.exports = {
    X$obj2str,
    X$arr2str,
    X$fun2str,
    X$nil2str,
};
