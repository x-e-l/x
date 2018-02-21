module.exports = ([
    // begin

    // properties
    '_metas_',

    // meta keys
    '_props_',
    '_toses_',

    '_call_',
    '_2str_',
    '_2len_',

    '_atype_',

    // ntry keys
    '_key_', '_val_', '_idx_',

    // archetypes
    '_nil_', '_arr_', '_fun_', '_cst_', '_obj_',

    // end
].reduce(
    ($, k) => {
        $[k] = Symbol(k);
        return $;
    },
    {}
));
