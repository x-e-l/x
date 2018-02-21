const X$ = require('../src/symbols');

describe('symbols in X$', () => {

    const keys = [

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

    ].sort();

    it('are all exported', () => {

        keys.map(k => (
            expect(X$[k]).toBeDefined()
        ));

    });

    it('are all of type Symbol', () => {

        keys.map(k => (
            expect([k, typeof X$[k]]).toEqual([k, 'symbol'])
        ));

    });

});
