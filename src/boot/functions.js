const {isf, frz$} = require('../u');


const X$call = (
    ($f, $o, ...$$) => (
        isf($f) && isf($f.call)
            ? $f.call(null, $o, ...$$)
            : ($f && $f.call)
    )
);

const X$bind = (
    ($f, $o, ...$$) => (
        isf($f) && isf($f.bind)
            ? $f.bind(null, $o, ...$$)
            : ($f && $f.bind)
    )
);


// TODO: @azder: maybe add a `X$dnib = ($o,$f,...$$) => ` and `X$lacc = ($o,f,...$$) =>`


module.exports = frz$({
    X$call,
    X$bind,
});
