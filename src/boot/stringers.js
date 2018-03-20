const {nil, f2s, js2s, frz$} = require('../u');

const {X$isx, X$isnil, X$isarr, X$isfun, X$isobj} = require('./predicates');
const {X$second, X$last, X$map} = require('./arrays');
const {X$toses, X$props, X$callf, X$2lenf} = require('./getters');
const {X$2str} = require('./objects');


const OBJ = '𝜔';
const ARR = '𝛼';
const FUN = '𝜆';
const NIL = '∅';
const CST = 'φ';


const X$props2s = (
    ($, $keys) => '' + X$map(
        $keys,
        k => {

            const o = $[k];

            if (nil(o)) {
                return '' + k + ':' + js2s(o);
            }

            if (!X$isx(o)) {
                return '' + k + ':' + o + '';
            }

            return '' + k + ':' + X$2str(o) + '';

        }
    )
);


const X$toses2s = (
    ($) => {

        const ts = X$toses($);

        if (2 > ts.length && X$isobj($)) {
            return '';
        }

        const t = X$last(ts);
        const s = X$second(ts);

        return (
            s === t && (X$isarr($) || X$isfun($) || X$isnil($))
                ? ''
                : '' + (t && t.name ? t.name + ':' : '')
        )

    }
);


const X$obj2str = (
    ($) => {

        if (nil($)) {
            return js2s($);
        }

        const isx = X$isx($);
        const keys = Object.keys($);

        if (!isx) {
            return !keys.length
                ? `${OBJ}{}${OBJ}`
                : `${OBJ}(${'' + $}){${X$props2s($, keys)}}${OBJ}`;
        }

        const toses = X$toses2s($);
        const props = X$props2s($, X$props($));

        if ('' === toses && '' === props) {
            return `${OBJ}{}${OBJ}`;
        }

        return `${toses}${OBJ}{${props}}${OBJ}`;

    }
);


const X$nil2str = (
    ($) => {

        if (nil($)) {
            return js2s($);
        }

        const toses = X$toses2s($);
        const props = X$props2s($, X$props($));

        if ('' === toses && '' === props) {
            return NIL;
        }

        return `${toses}${NIL}{${props}}${NIL}`;
    }
);


const X$arr2str = (
    ($) => {

        if (nil($)) {
            return js2s($);
        }

        const toses = X$toses2s($);
        const props = X$props2s($, X$props($));
        const len = X$2lenf($)($);

        if ('' === toses && '' === props) {
            return `${ARR}[]${ARR}`;
        }

        return `${toses}${ARR}(${len})[${props}]${ARR}`;
    }
);


const X$fun2str = (
    ($) => {

        if (nil($)) {
            return js2s($);
        }

        const toses = X$toses2s($);
        const props = X$props2s($, X$props($));
        const funct = f2s(X$callf($));

        if ('' === toses && '' === props) {
            return `${FUN}(${funct})${FUN}`;
        }

        return `${toses}${FUN}(${funct}){${props}}${FUN}`;

    }
);

const X$cst2str = (
    ($) => {

        if (nil($)) {
            return js2s($);
        }

        const toses = X$toses2s($);
        const props = X$props2s($, X$props($));
        const funct = f2s(X$callf($));

        if ('' === toses && '' === props) {
            return `${CST}(${funct})${CST}`;
        }

        return `${toses}${CST}(${funct}){${props}}${CST}`;

    }
);


module.exports = frz$({

    // TODO: @azder: maybe expose helper functions to the outside

    X$obj2str,
    X$nil2str,
    X$arr2str,
    X$fun2str,
    X$cst2str,

});
