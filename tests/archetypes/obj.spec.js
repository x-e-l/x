const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _obj_, _cst_,
    _key_, _val_,

} = require('../../src/symbols');
const {X$obj2str, X$cst2str} = require('../../src/boot/stringers');

const {X$Obj, X$Fun, X$Cst} = require('../../src/boot/archetypes');

describe('archetypes.Obj', () => {

    it('is a constructor', () => {

        expect(typeof X$Obj).toEqual('function');

        const metas = X$Obj[_metas_];

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('' + X$Obj);

    });

    it('returns an object with no prototype', () => {

        expect(X$Obj().prototype).toBe(void 0);

    });

    it('paramless returns an object with no keys, except default _metas_', () => {

        const metas = {
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [X$Obj],
        };

        const object = X$Obj();

        expect(Object.keys(object)).toEqual([]);

        expect(object[_metas_]).toEqual(metas);

    });

    it('with params returns an object with specified keys, existing keys and expected _metas_', () => {

        const props = ['c', 'a', 'b'];

        const metas = {
            [_props_]: props,
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [X$Obj],
        };

        const obj = {
            c: {c: 3},
        };

        const object = X$Obj(
            obj,
            {[_key_]: 'a', [_val_]: 1},
            {[_key_]: 'b', [_val_]: 2},
        );

        const keys = Object.keys(object);

        expect(keys.length).toBe(props.length);
        expect(object[_metas_][_props_]).toEqual(props);
        expect(object[_metas_]).toEqual(metas);

    });

    it('returns an object with no keys, except default _metas_, for null', () => {

        const metas = {
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [X$Obj],
        };

        expect(X$Obj(null)).toEqual({[_metas_]: metas});

    });

    it('returns an object with no keys, except default _metas_, for undefined', () => {

        const metas = {
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [X$Obj],
        };

        expect(X$Obj()).toEqual({[_metas_]: metas});

    });

});


