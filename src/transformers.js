const X$ident = (
    ($) => ($)
);

const X$obj2frz = (
    ($) => Object.freeze({...$})
);

const X$itr2set = (
    ($) => new Set($)
);

module.exports = ({
    X$ident,
    X$obj2frz,
    X$itr2set,
});
