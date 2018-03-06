const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _arr_, _cst_,
    _key_, _val_,
} = require('../../src/symbols');

const {X$arr2str, X$cst2str} = require('../../src/stringers');

const {X$Arr, Obj, Fun, Cst, Arr} = require('../../src/constructors');

describe('constructors.Arr', () => {

    it('is a constructor', () => {

        expect(typeof X$Arr).toEqual('function');

        const metas = X$Arr[_metas_];

        expect(metas[_toses_]).toEqual([Obj, Fun, Cst]);
        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('($, ...$$) => X$padd(f($, ...$$), f)');

    });

    it('returns an object with no prototype', () => {

        expect(X$Arr().prototype).toBe(void 0);

    });

    it('paramless returns an object with no keys, except default _metas_', () => {

        const metas = {
            [_atype_]: _arr_,
            [_2str_]:  X$arr2str,
            [_toses_]: [Obj, Arr],
        };

        const arr = X$Arr();

        expect(Object.keys(arr)).toEqual([]);

        expect(arr[_metas_]).toEqual(metas);

    });

    it('with params returns an object with specified keys, existing keys and expected _metas_', () => {

        const lastkey = 9;
        const firstkey = 'a';

        const props = ['0', firstkey, lastkey];

        const metas = {
            [_props_]: props,
            [_atype_]: _arr_,
            [_2str_]:  X$arr2str,
            [_toses_]: [Obj, Arr],
        };

        const arr = X$Arr(
            [3],
            {[_key_]: firstkey, [_val_]: 1},
            {[_key_]: lastkey, [_val_]: 2},
        );

        const keys = Object.keys(arr);

        expect(keys.length).toBe(props.length);
        expect(arr.length).toBe(lastkey + 1);

        expect(arr[_metas_]).toEqual(metas);
        expect(arr[_metas_][_props_]).toEqual(props);

    });

    it('returns an empty array with no keys, except default _metas_, for null', () => {

        const metas = {
            [_atype_]: _arr_,
            [_2str_]:  X$arr2str,
            [_toses_]: [Obj, Arr],
        };

        const arr = X$Arr(null);

        expect(arr.length).toEqual(0);
        expect(Object.keys(arr)).toEqual([]);
        expect(arr[_metas_]).toEqual(metas);
        expect(Array.isArray(arr)).toBe(true);


    });

    it('returns an empty array with no keys, except default _metas_, for undefined', () => {

        const metas = {
            [_atype_]: _arr_,
            [_2str_]:  X$arr2str,
            [_toses_]: [Obj, Arr],
        };

        const arr = X$Arr();

        expect(arr.length).toEqual(0);
        expect(Object.keys(arr)).toEqual([]);
        expect(arr[_metas_]).toEqual(metas);
        expect(Array.isArray(arr)).toBe(true);

    });

});


