const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _cst_,
    _key_, _val_,
} = require('../../src/symbols');

const {X$cst2str} = require('../../src/stringers');

const {X$Cst, Obj, Fun, Cst} = require('../../src/constructors');

describe('constructors.Cst', () => {

    it('is a constructor', () => {

        expect(typeof X$Cst).toEqual('function');

        const metas = X$Cst[_metas_];

        expect(metas[_toses_]).toEqual([Obj, Fun, Cst]);
        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('' + X$Cst);

    });

    it('returns an object with no prototype', () => {

        expect(X$Cst().prototype).toBe(void 0);

    });

    it('paramless returns a constructor with no keys, except default _metas_', () => {

        const cst = X$Cst();

        const metas = {
            [_atype_]: _cst_,
            [_2str_]:  X$cst2str,
            [_toses_]: [Obj, Fun, Cst],
            [_call_]:  cst,
        };

        expect(Object.keys(cst)).toEqual([]);

        expect(cst[_metas_]).toEqual(metas);

    });

    it('with params returns a constructor with specified keys, existing keys and expected _metas_', () => {

        const lastkey = 9;
        const firstkey = 'a';

        const props = [firstkey, lastkey];

        const fun = $ => $;

        const cst = X$Cst(
            fun,
            {[_key_]: firstkey, [_val_]: 1},
            {[_key_]: lastkey, [_val_]: 2},
        );

        const metas = {
            [_props_]: props,
            [_atype_]: _cst_,
            [_2str_]:  X$cst2str,
            [_toses_]: [Obj, Fun, Cst],
            [_call_]:  cst,
        };

        const keys = Object.keys(cst);

        expect(keys.length).toBe(props.length);
        expect(cst.length).toBe(fun.length);

        expect(cst[_metas_]).toEqual(metas);
        expect(cst[_metas_][_props_]).toEqual(props);

    });

    it('returns an empty array with no keys, except default _metas_, for null', () => {

        const cst = X$Cst(null);

        const metas = {
            [_atype_]: _cst_,
            [_2str_]:  X$cst2str,
            [_toses_]: [Obj, Fun, Cst],
            [_call_]:  cst,
        };

        expect(cst.length).toEqual(1);
        expect('' + cst).toBe('($, ...$$) => X$tadd(f($, ...$$), f)');

        expect(Object.keys(cst)).toEqual([]);
        expect(cst[_metas_]).toEqual(metas);
        expect(typeof cst).toBe('function');


    });

    it('returns a constructor with no keys, except default _metas_, for undefined', () => {


        const cst = X$Cst();

        const metas = {
            [_atype_]: _cst_,
            [_2str_]:  X$cst2str,
            [_toses_]: [Obj, Fun, Cst],
            [_call_]:  cst,
        };

        expect(cst.length).toEqual(1);
        expect('' + cst).toBe('($, ...$$) => X$tadd(f($, ...$$), f)');

        expect(Object.keys(cst)).toEqual([]);
        expect(cst[_metas_]).toEqual(metas);
        expect(typeof cst).toBe('function');

    });

});


