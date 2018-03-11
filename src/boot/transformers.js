const {_key_, _val_} = require('../symbols');
const {isf, tok, nil, frz$} = require('../u');

const X$ident = (
    ($) => ($)
);

const X$2const = (
    ($) => () => $
);


const X$obj2frz = (
    ($) => (
        nil($) ||       // nil
        '' + $ === $ ||                     // string
        $ - 0 === $ || Number.isNaN($) ||   // number
        true === $ || false === $           // boolean
            ? $
            : frz$({...$})
    )
);


const X$kv2ref = (
    (k, v) => ({
        [_key_]: k,
        [_val_]: v,
    })
);

const X$vk2ref = (
    (v, k) => ({
        [_key_]: k,
        [_val_]: v,
    })
);


const X$ref2k = (
    ($) => nil($) ? $ : $[_key_]
);

const X$ref2v = (
    ($) => nil($) ? $ : $[_val_]
);


const X$new2fun = (
    ($) => isf($)
        ? (...$$) => new $(...$$)
        : tok($)
);


const X$itr2set = X$new2fun(Set);
const X$str2err = X$new2fun(Error);
const X$any2prx = X$new2fun(Proxy);

module.exports = frz$({

    X$ident,
    X$2const,
    X$obj2frz,

    X$kv2ref,
    X$vk2ref,
    X$ref2k,
    X$ref2v,

    X$new2fun,

    X$itr2set,
    X$str2err,
    X$any2prx,

});
