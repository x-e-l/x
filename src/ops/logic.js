const {frz$} = require('../u');
const {X$2bul} = require('../boot');
const {X$Bul} = require('../csts/bul');


/** NOT */
const X$bn = (
    $ => X$Bul(!X$2bul($))
);


/** AND */
const X$ba = (
    ($a, $b) => X$Bul(X$2bul($a) && X$2bul($b))
);

/** OR */
const X$bo = (
    ($a, $b) => X$Bul(X$2bul($a) || X$2bul($b))
);


/** EQ */
const X$bq = (
    ($a, $b) => X$Bul(X$2bul($a) === X$2bul($b))
);

/** XOR */
const X$bx = (
    ($a, $b) => X$Bul(X$2bul($a) !== X$2bul($b))
);


module.exports = frz$({

    X$bn,

    X$ba,
    X$bo,

    X$bq,
    X$bx,

});
