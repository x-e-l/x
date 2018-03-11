const {nil, frz$} = require('../u');

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
    ($, a) => nil($) ? [a] : [...$, a]
);

const X$unshift = (
    ($, a) => nil($) ? [a] : [a, ...$]
);

const X$includes = (
    ($, a) => $ && $.includes && !!$.includes(a)
);


const X$map = (
    ($, f) => {
        $ = ($ || []);
        return $.map && $.map(f)
    }
);

const X$reduce = (
    ($, i, f) => {
        $ = ($ || []);
        return $.reduce && $.reduce(f, i)
    }
);

module.exports = frz$({

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
