const {_key_, _val_} = require('./symbols');

const X$ident = (
    ($) => ($)
);

const X$2const = (
    ($) => () => $
);

const X$obj2frz = (
    ($) => (
        null === $ || void 0 === $ ||       // nil
        '' + $ === $ ||                     // string
        $ - 0 === $ || Number.isNaN($) ||   // number
        true === $ || false === $           // boolean
            ? $
            : Object.freeze({...$})
    )
);

const X$kv2ntry = (
    (k, v) => ({
        [_key_]: k,
        [_val_]: v,
    })
);

const X$vk2ntry = (
    (v, k) => ({
        [_key_]: k,
        [_val_]: v,
    })
);

const X$ntry2k = (
    ($) => void 0 === $ || null === $ ? $ : $[_key_]
);

const X$ntry2v = (
    ($) => void 0 === $ || null === $ ? $ : $[_val_]
);

// TODO: @azder: add X$new2cst function

const X$itr2set = (
    ($) => new Set($)
);

const X$str2err = (
    ($) => new Error($)
);

module.exports = Object.freeze({
    X$ident,
    X$2const,
    X$obj2frz,
    X$kv2ntry,
    X$vk2ntry,
    X$ntry2k,
    X$ntry2v,
    X$itr2set,
    X$str2err,
});
