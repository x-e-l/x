const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _nil_, _cst_,
    _key_, _val_,
} = require('../../../src/symbols');

const {X$nil2str, X$cst2str} = require('../../../src/boot/stringers');

const {X$Err, X$Nil, X$Obj, X$Fun, X$Cst} = require('../../../src/boot/archetypes');

describe('archetypes.Err', () => {

    it('is a constructor', () => {

        expect(typeof X$Err).toEqual('function');

        const metas = X$Err[_metas_];

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('' + X$Err);

    });

    it('returns an object with no prototype', () => {

        expect(X$Err().prototype).toBe(void 0);

    });

    it('paramless returns an object with no keys, except default _metas_ and Error keys', () => {

        const err = X$Err();

        expect(Object.keys(err)).toEqual([]);

        expect(err[_metas_]).toEqual({
            [_props_]: ['stack'],
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil, X$Err],
        });

    });

    it('with params returns an object with specified keys, existing keys and expected _metas_', () => {

        const props = ['stack', 'message', 'c', 'a', 'b'];

        const obj = {
            c: {c: 3},
        };

        const err = X$Err(
            obj,
            {[_key_]: 'a', [_val_]: 1},
            {[_key_]: 'b', [_val_]: 2},
        );

        expect(Object.getOwnPropertyNames(err)).toEqual(props);

        expect(err[_metas_]).toEqual({
            [_props_]: props,
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil, X$Err],
        });

    });

    it('returns an object with no keys, except default _metas_, for null', () => {

        const err = X$Err(null);

        expect(err instanceof Error).toBeTruthy();

        expect(err[_metas_]).toEqual({
            [_props_]: ['stack', 'message'], // in case of null, the 'message' is 'Error:null'
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil, X$Err],
        });

    });

    it('returns an object with no keys, except default _metas_, for undefined', () => {

        const err = X$Err();

        expect(err instanceof Error).toBeTruthy();

        expect(err[_metas_]).toEqual({
            [_props_]: ['stack'], // in case of undefined, there is no 'message'
            [_atype_]: _nil_,
            [_2str_]:  X$nil2str,
            [_toses_]: [X$Obj, X$Nil, X$Err],
        });

    });

});


