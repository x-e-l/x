const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _nil_, _cst_,
    _key_, _val_,
} = require('../../../src/symbols');

const {X$nil2str, X$cst2str} = require('../../../src/boot/stringers');

const {X$Nil, X$Obj, X$Fun, X$Cst} = require('../../../src/boot/archetypes');

describe('archetypes.Nil', () => {

    it('is a constructor', () => {

        expect(typeof X$Nil).toEqual('function');

        const metas = X$Nil[_metas_];

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('' + X$Nil);

    });

    it('returns an object with no prototype', () => {

        expect(X$Nil().prototype).toBe(void 0);

    });

    it('paramless returns an object with no keys, except default _metas_', () => {

        const metas = {
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil],
        };

        const nil = X$Nil();

        expect(Object.keys(nil)).toEqual([]);

        expect(nil[_metas_]).toEqual(metas);

    });

    it('with params returns an object with specified keys, existing keys and expected _metas_', () => {

        const props = ['c', 'a', 'b'];

        const metas = {
            [_props_]: props,
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil],
        };

        const obj = {
            c: {c: 3},
        };

        const nil = X$Nil(
            obj,
            {[_key_]: 'a', [_val_]: 1},
            {[_key_]: 'b', [_val_]: 2},
        );

        const keys = Object.keys(nil);

        expect(keys.length).toBe(props.length);
        expect(nil[_metas_][_props_]).toEqual(props);
        expect(nil[_metas_]).toEqual(metas);

    });

    it('returns an object with no keys, except default _metas_, for null', () => {

        const metas = {
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil],
        };

        expect(X$Nil(null)).toEqual({[_metas_]: metas});

    });

    it('returns an object with no keys, except default _metas_, for undefined', () => {

        const metas = {
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil],
        };

        expect(X$Nil()).toEqual({[_metas_]: metas});

    });

});


