module.exports = ([
    // begin

    // properties
    '_metas_', '_props_',

    //
    '_protos_',
    '_call_',
    '_2str_',

    '_length_',
    '_mutas_',
    '_atype_',

    // constructor spec
    '_key_', '_val_',

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
