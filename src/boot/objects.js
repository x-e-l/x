const {frz$} = require('../u');

const {X$fcall} = require('./functions');
const {X$2strf, X$2bulf, X$callf} = require('./getters');


const X$2str = (
    $ => X$fcall(X$2strf($), $)
);


const X$2bul = (
    $ => X$fcall(X$2bulf($), $)
);


const X$call = (
    $ => X$fcall(X$callf($), $)
);


module.exports = frz$({
    X$2str,
    X$2bul,
    X$call,
});
