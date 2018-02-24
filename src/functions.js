const isf = (
    ($) => void 0 === $ || null === $ ? $ : typeof $ === 'function'
);

const X$call = (
    (f, $, ...$$) => isf(f) && isf(f.call) ? f.call(null, $, ...$$) : (f && f.call)
);

const X$bind = (
    (f, $, ...$$) => isf(f) && f.bind && f.bind(null, $, ...$$)
);

module.exports = Object.freeze({
    X$call,
    X$bind,
});
