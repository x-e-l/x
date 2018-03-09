const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _fun_, _cst_,
    _key_, _val_,
} = require('../../src/symbols');

const {X$fun2str, X$cst2str} = require('../../src/boot/stringers');

const {X$Fun, X$Obj, X$Cst} = require('../../src/boot/archetypes');

describe('archetypes.Fun', () => {

    it('is a constructor', () => {

        expect(typeof X$Fun).toEqual('function');

        const metas = X$Fun[_metas_];

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);
        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('' + X$Fun);

    });

    it('returns an object with no prototype', () => {

        expect(X$Fun().prototype).toBe(void 0);

    });

    it('paramless returns a function with no keys, except default _metas_', () => {

        const fun = X$Fun();

        const metas = {
            [_atype_]: _fun_,
            [_2str_]:  X$fun2str,
            [_toses_]: [X$Obj, X$Fun],
            [_call_]:  fun,
        };

        expect(Object.keys(fun)).toEqual([]);

        expect(fun[_metas_]).toEqual(metas);

    });

    it('with params returns a function with specified keys, existing keys and expected _metas_', () => {

        const lastkey = 9;
        const firstkey = 'a';

        const props = ['0', firstkey, lastkey];

        const fun = X$Fun(
            [3],
            {[_key_]: firstkey, [_val_]: 1},
            {[_key_]: lastkey, [_val_]: 2},
        );

        const metas = {
            [_props_]: props,
            [_atype_]: _fun_,
            [_2str_]:  X$fun2str,
            [_toses_]: [X$Obj, X$Fun],
            [_call_]:  fun,
        };

        const keys = Object.keys(fun);

        expect(keys.length).toBe(props.length);
        expect(fun.length).toBe(lastkey + 1);

        expect(fun[_metas_]).toEqual(metas);
        expect(fun[_metas_][_props_]).toEqual(props);

    });

    it('returns an empty array with no keys, except default _metas_, for null', () => {

        const fun = X$Fun(null);

        const metas = {
            [_atype_]: _fun_,
            [_2str_]:  X$fun2str,
            [_toses_]: [X$Obj, X$Fun],
            [_call_]:  fun,
        };

        expect(fun.length).toEqual(1);
        expect('' + fun).toBe('$ => $');

        expect(Object.keys(fun)).toEqual([]);
        expect(fun[_metas_]).toEqual(metas);
        expect(typeof fun).toBe('function');


    });

    it('returns an empty array with no keys, except default _metas_, for undefined', () => {


        const fun = X$Fun();

        const metas = {
            [_atype_]: _fun_,
            [_2str_]:  X$fun2str,
            [_toses_]: [X$Obj, X$Fun],
            [_call_]:  fun,
        };

        expect(fun.length).toEqual(1);
        expect('' + fun).toBe('$ => $');

        expect(Object.keys(fun)).toEqual([]);
        expect(fun[_metas_]).toEqual(metas);
        expect(typeof fun).toBe('function');

    });

});


