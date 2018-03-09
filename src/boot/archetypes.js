const {
    _atype_, _obj_, _nil_, _arr_, _fun_, _cst_,
    _2str_, _call_, _toses_, _metas_
} = require('../symbols');

const {iife, isf, tok, nil, ftos} = require('../u');

const {X$isx} = require('./predicates');
const {X$reduce} = require('./arrays');
const {X$any2prx} = require('./transformers');
const {X$tadd, X$rset, X$mset, X$preg} = require('./setters');
const {X$obj2str, X$nil2str, X$arr2str, X$fun2str, X$cst2str} = require('./stringers');


function Obj($, ...$$) {

    $ = nil($) ? Object.create(null) : $;

    $ = X$reduce(Object.keys($), $, X$preg);

    $ = X$reduce($$, $, X$rset);

    X$mset($, _atype_, _obj_);
    X$mset($, _2str_, X$obj2str);

    return $;

}

function Nil($, ...$$) {

    $ = X$isx($) ? $ : X$Obj($, ...$$);

    X$mset($, _atype_, _nil_);
    X$mset($, _2str_, X$nil2str);

    return $;

}

function Arr($, ...$$) {

    $ = X$Obj(nil($) ? [] : $, ...$$);

    X$mset($, _atype_, _arr_);
    X$mset($, _2str_, X$arr2str);

    return $;

}

function Fun($, ...$$) {

    $ = X$Obj(nil($) ? ($ => $) : $, ...$$);

    X$mset($, _atype_, _fun_);
    X$mset($, _2str_, X$fun2str);

    X$mset($, _call_, $);

    return $;

}

const proxy$ = (
    ($) => {
        const $new = X$any2prx(
            $,
            {
                // adds the proxy to the toses array of the created object when called
                apply: ($old, _, $$) => X$tadd($old.apply(null, $$), $new),
                // workaround for proxied functions not using Function.prototype.toString
                get:   ($, k) => 'toString' === k ? ftos.bind($) : $[k],
            }
        );
        return $new;
    }
);

function Cst($, ...$$) {

    // constructor must be function, even if constant one
    $ = isf($) ? $ : tok($);

    // proxy internal constructor function in order to enhance its behaviour
    $ = proxy$($);

    // sets all the supplied properties for the constructor
    $ = X$reduce($$, $, X$rset);

    // manually set toses array for this constructor
    X$mset($, _toses_, [Obj, Fun, Cst]);

    // standard metas for a constructor
    X$mset($, _atype_, _cst_);
    X$mset($, _2str_, X$cst2str);
    X$mset($, _call_, $);

    return $;

}

const X$Obj = Cst(Obj);
const X$Nil = Cst(Nil);
const X$Arr = Cst(Arr);
const X$Fun = Cst(Fun);


const X$Cst = iife(() => {

    // No extra Cst of Cst for _metas_ sake
    const $ = Cst;

    // just manually add _metas_
    $[_metas_] = {
        [_atype_]: _cst_,
        [_2str_]:  X$cst2str,
        [_toses_]: [Obj, Fun, Cst],
        [_call_]:  $,
    };

    return $;

});


// helper for parameterless call of X$Obj
const X$O = iife(() => {

    const $ = (
        (...$$) => X$Obj(null, ...$$)
    );

    $[_metas_] = X$Obj[_metas_];

    return $;

});


module.exports = Object.freeze({

    X$O,

    X$Obj,
    X$Nil,
    X$Arr,
    X$Fun,
    X$Cst,

});
