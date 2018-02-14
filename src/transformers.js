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

module.exports = ({
    X$ident,
    X$2const,
    X$obj2frz,
    X$itr2set,
});
