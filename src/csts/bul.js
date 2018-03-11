const {tok} = require('../u');
const {_2bul_, _2str_, X$Obj, X$Cst, X$mset, X$2bul} = require('../x');


const TRU = '⊨';
const FAL = '⊭';


const tru = (
    ($, ...$$) =>
        X$mset(
            X$mset(
                X$Obj($, ...$$),
                _2bul_,
                tok(true)
            ),
            _2str_,
            tok(TRU)
        )
);

const fal = (
    ($, ...$$) =>
        X$mset(
            X$mset(
                X$Obj($, ...$$),
                _2bul_,
                tok(false)
            ),
            _2str_,
            tok(FAL)
        )
);


const X$Bul = X$Cst(function Bul($, ...$$) {
    return X$2bul($) ? tru($, ...$$) : fal($, ...$$);
});


module.exports = Object.freeze({

    X$Bul,

});
