const {frz$} = require('../u');

const {X$call} = require('./functions');
const {X$2strf, X$2bulf} = require('./getters');


const X$2str = (
    ($) => X$call(X$2strf($), $)
);


const X$2bul = (
    ($) => X$call(X$2bulf($), $)
);


module.exports = frz$({
    X$2str,
    X$2bul,
});
