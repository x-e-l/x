const {sorted} = require('./test-utils');

const symbols = require('../src/symbols');

describe('symbols', () => {

    const keys = sorted([

        // properties
        '_metas_',

        // meta keys
        '_props_',
        '_toses_',

        '_call_',
        '_2str_',
        '_2len_',
        '_2bul_',

        '_atype_',

        // ref keys
        '_key_', '_val_', '_idx_',

        // archetypes
        '_nil_', '_arr_', '_fun_', '_cst_', '_obj_',

    ]);

    it('are all exported', () => {

        keys.map(k => (
            expect(symbols[k]).toBeDefined()
        ));

    });

    it('are all of type Symbol', () => {

        keys.map(k => (
            expect('' + k + ' is ' + typeof symbols[k]).toEqual('' + k + ' is symbol')
        ));

    });

    it('are all conforming to the _name_ convention', () => {

        const valid = /^_[0-9a-z]+_$/;

        keys.map(k => expect(k).toMatch(valid));

    });

    it('are the only ones exported', () => {

        expect(Object.keys(symbols).length).toEqual(keys.length)

    });

});
