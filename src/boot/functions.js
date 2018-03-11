const {isf, frz$} = require('../u');


const X$call = (
    (f, $, ...$$) => isf(f) && isf(f.call) ? f.call(null, $, ...$$) : (f && f.call)
);

const X$bind = (
    (f, $, ...$$) => isf(f) && isf(f.bind) ? f.bind(null, $, ...$$) : (f && f.bind)
);


// TODO: @azder: maybe add a `X$dnib = ($,f,...$$) => ` and `X$lacc = ($,f,...$$) =>`


module.exports = frz$({
    X$call,
    X$bind,
});
