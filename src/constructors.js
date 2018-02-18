const {_atype_, _obj_, _nil_, _arr_, _fun_, _cst_, _2str_, _call_, _toses_, _metas_} = require('./symbols');

const {X$nil} = require('./predicates');
const {X$bind} = require('./functions');
const {X$reduce} = require('./arrays');
const {X$padd, X$nset, X$mset} = require('./setters');
const {X$obj2str, X$nil2str, X$arr2str, X$fun2str} = require('./stringers');

function Obj($, ...$$) {

    $ = X$nil($) ? Object.create(null) : $;
    $ = X$reduce($$, $, X$nset);

    X$mset($, _atype_, _obj_);
    X$mset($, _2str_, X$obj2str);

    return $;

}

function Nil($, ...$$) {

    $ = X$Obj($, ...$$);

    X$mset($, _atype_, _nil_);
    X$mset($, _2str_, X$nil2str);

    return $;

}

function Arr($, ...$$) {

    $ = X$Obj($, ...$$);

    X$mset($, _atype_, _arr_);
    X$mset($, _2str_, X$arr2str);

    return $;

}

function Fun($, ...$$) {

    $ = X$Obj($, ...$$);

    X$mset($, _atype_, _fun_);
    X$mset($, _2str_, X$fun2str);

    X$mset($, _call_, $);

    return $;

}

function Cst($, ...$$) {

    const constructor = $; // alias original constructor function

    // TODO: @azder: deal with this case, constructor must be function
    // $ = X$nil($) ? ($ => $) : $;

    $ = X$reduce(
        $$,
        // adds self to protos array of created on call
        ($, ...$$) => X$padd(constructor($, ...$$), constructor),
        X$nset
    );

    // construct protos array for this constructor
    X$mset($, _toses_, [Obj, Fun, Cst]);

    X$mset($, _atype_, _cst_);
    X$mset($, _2str_, X$bind(X$fun2str, constructor));

    X$mset($, _call_, $);

    return $;

}

const X$Obj = Cst(Obj);
const X$Nil = Cst(Nil);
const X$Arr = Cst(Arr);
const X$Fun = Cst(Fun);

const X$Cst = (Cst); // No extra Cst of Cst for protos sake

// helper for parameterless call of X$Obj
const X$O = (
    () => {
        const $ = (
            (...$$) => X$Obj(null, ...$$)
        );
        $[_metas_] = X$Obj[_metas_];
        return $;
    }
)();

module.exports = ({
    X$O,
    X$Obj,
    X$Nil,
    X$Arr,
    X$Fun,
    X$Cst,
});
