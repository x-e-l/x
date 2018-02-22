const X$len = (
    ($) => ($ && $.length - 0) || 0
);

const X$first = (
    ($) => $ && $[0]
);

const X$second = (
    ($) => $ && $[1]
);

const X$last = (
    ($) => {
        const l = X$len($);
        return l ? $[l - 1] : $ && void 0;
    }
);


const X$push = (
    ($, a) => void 0 === $ || null === $ ? [a] : [...$, a]
);

const X$unshift = (
    ($, a) => void 0 === $ || null === $ ? [a] : [a, ...$]
);

const X$includes = (
    ($, a) => $.includes(a)
);


const X$map = (
    ($, f) => $.map(f)
);

const X$reduce = (
    ($, i, f) => $.reduce(f, i)
);

module.exports = Object.freeze({

    X$len,
    X$first,
    X$second,
    X$last,

    X$push,
    X$unshift,
    X$includes,

    X$map,
    X$reduce,

});
