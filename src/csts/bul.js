const {tok, nan, frz$} = require('../u');
const {_2bul_, _2str_, X$O, X$Obj, X$Cst, X$mset, X$2bul} = require('../boot');


const TRU = '⊨';
const FAL = '⊭';


const mset$ = (
    ($, $b, $s) => X$mset(X$mset($, _2bul_, tok($b)), _2str_, tok($s))
);


// eslint-disable-next-line prefer-arrow-callback
const X$Bul = X$Cst(function Bul($, ...$$) {

    // check for $ being primitive, since it will not allow adding properties

    if (null === $ || void 0 === $ || false === $ || '' === $ || 0 === $ || nan($)) {
        return mset$(X$O(...$$), $, FAL);
    }

    if (true === $) {
        return mset$(X$O(...$$), $, TRU);
    }

    const type = typeof $;

    if ('string' === type || 'number' === type) {
        return mset$(X$O(...$$), $, TRU);
    }

    return X$2bul($)
        ? mset$(X$Obj($, ...$$), true, TRU)
        : mset$(X$Obj($, ...$$), false, FAL);

});


module.exports = frz$({

    X$Bul,

});
