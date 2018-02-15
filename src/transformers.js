const X$ident = (
    ($) => ($)
);

const X$2const = (
    ($) => () => $
);

const X$obj2frz = (
    ($) => Object.freeze({...$})
);

const X$itr2set = (
    ($) => new Set($)
);

const X$str2err = (
    ($) => new Error($)
);

module.exports = ({
    X$ident,
    X$2const,
    X$obj2frz,
    X$itr2set,
    X$str2err,
});
