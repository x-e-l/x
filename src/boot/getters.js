const {isf, nil, js2s, owns, tok, frz$} = require('../u');

const {_toses_, _props_, _metas_, _2str_, _call_, _2len_, _2bul_} = require('../symbols');

const {X$isx, X$isnil} = require('./predicates');
const {X$kv2ref} = require('./transformers');
const {X$push, X$len, X$map, X$last} = require('./arrays');


const X$metas = (
    $ => nil($) ? {} : $[_metas_] || {}
);


const X$mget = (
    ($, k) => $ && k && X$metas($)[k] // TODO: @azder: return an error if missing
);

const X$mown = (
    $ => X$map(
        owns(X$metas($)),
        k => X$kv2ref(k, X$mget($, k))
    )
);


const X$toses = (
    $ => X$mget($, _toses_) || []
);

const X$props = (
    $ => X$mget($, _props_) || []
);


const X$tcat = (
    ($, proto) => {

        const toses = X$toses($);

        if (isf(proto) && X$last(toses) !== proto) {
            return X$push(toses, proto);
        }

        return toses;

    }
);

const X$pget = (
    ($, k) => $ && $[k] // || Err('X$pget: missing prop: ' + X$2str(k))
);

const X$pown = (
    $ => X$map(
        X$props($),
        k => X$kv2ref(k, X$pget($, k))
    )
);


const X$callf = (
    $ => {

        if (nil($)) {
            // TODO: @azder: return Err(`${NOTOBJ}: X$callf(${$})`);
        }

        const callf = X$mget($, _call_);

        if (isf(callf)) {
            return callf;
        }

        if (isf($)) {
            return $;
        }

        // the name for the "anonymous" function will be K
        return tok($);

    }
);


const X$2str = js2s; // an alias for display purposes

const X$2strf = (
    $ => X$mget($, _2str_) || X$2str
);


const X$2len = (
    $ => X$len(X$props($))
);

const X$2lenf = (
    $ => X$mget($, _2len_) || X$2len
);


const X$2bul = (
    $ => X$isx($)
        ? $ => !X$isnil($)
        : $ => !!$
);

const X$2bulf = (
    $ => X$mget($, _2bul_) || X$2bul($)
);


module.exports = frz$({

    X$pget,
    X$pown,

    X$mget,
    X$mown,

    X$tcat,

    X$metas,
    X$toses,
    X$props,

    X$callf,
    X$2strf,
    X$2lenf,
    X$2bulf,

});



