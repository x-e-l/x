const {isf, frz$} = require('../u');


const X$fcall = (
    ($f, $o, ...$$) => (
        isf($f) && isf($f.call)
            // eslint-disable-next-line no-useless-call
            ? $f.call(null, $o, ...$$) // `this` should be `null`, not `undeifined`
            : ($f && $f.call)
    )
);

const X$fbind = (
    ($f, $o, ...$$) => (
        isf($f) && isf($f.bind)
            ? $f.bind(null, $o, ...$$)
            : ($f && $f.bind)
    )
);


// TODO: @azder: maybe add a `X$dnib = ($o,$f,...$$) => ` and `X$lacc = ($o,f,...$$) =>`


module.exports = frz$({
    X$fcall,
    X$fbind,
});
