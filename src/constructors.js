const {_atype_, _obj_, _nil_, _arr_, _fun_, _2str_, _call_} = require('./symbols');

const {X$nil} = require('./predicates');
const {X$reduce} = require('./arrays');
const {X$padd, X$nset, X$mset} = require('./setters');
const {X$obj2str, X$nil2str, X$arr2str, X$fun2str} = require('./stringers');


const X$O = (
    () => Object.create(null)
);


const X$Obj = (function Obj($, ...$$) {

    $ = X$nil($) ? X$O() : $;
    $ = X$padd($, Obj);
    $ = X$reduce($$, $, X$nset);

    X$mset($, _atype_, _obj_);
    X$mset($, _2str_, X$obj2str);

    return $;

});

const X$Nil = (function Nil($, ...$$) {

    $ = X$Obj($, ...$$);
    $ = X$padd($, Nil);

    X$mset($, _atype_, _nil_);
    X$mset($, _2str_, X$nil2str);

    return $;

});

const X$Arr = (function Arr($, ...$$) {

    $ = X$Obj($, ...$$);
    $ = X$padd($, Arr);

    X$mset($, _atype_, _arr_);
    X$mset($, _2str_, X$arr2str);

    return $;

});

const X$Fun = (function Fun($, ...$$) {

    $ = X$Obj($, ...$$);
    $ = X$padd($, Fun);

    X$mset($, _atype_, _fun_);
    X$mset($, _2str_, X$fun2str);

    X$mset($, _call_, $);

    return $;

});


module.exports = ({
    X$Obj,
    X$Nil,
    X$Arr,
    X$Fun,
});
