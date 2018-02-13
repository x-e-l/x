const X$len = (
    ($) => ($.length - 0) || 0
);

const X$first = (
    ($) => $[0]
);

const X$second = (
    ($) => $[1]
);

const X$last = (
    ($) => $[X$len($) - 1]
);


const X$push = (
    ($, a) => [...$, a]
);

const X$unshift = (
    ($, a) => [a, ...$]
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

module.exports = ({

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
