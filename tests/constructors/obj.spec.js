const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _obj_, _cst_,
    _key_, _val_,

} = require('../../src/symbols');
const {X$obj2str, X$cst2str} = require('../../src/stringers');

const {X$Obj, Obj, Fun, Cst} = require('../../src/constructors');

describe('constructors.Obj', () => {

    it('is a constructor', () => {

        expect(typeof X$Obj).toEqual('function');

        const metas = X$Obj[_metas_];

        expect(metas[_toses_]).toEqual([Obj, Fun, Cst]);
        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('($, ...$$) => X$padd(f($, ...$$), f)');

    });

    it('returns an object with no prototype', () => {

        expect(X$Obj().prototype).toBe(void 0);

    });

    it('paramless returns an object with no keys, except default _metas_', () => {

        const metas = {
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [Obj],
        };

        const object = X$Obj();

        expect(Object.keys(object)).toEqual([]);

        expect(object[_metas_]).toEqual(metas);

    });

    it('with params returns an object with specified keys, plus expected _metas_', () => {

        const metas = {
            [_props_]: ['a', 'b'],
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [Obj],
        };

        const object = X$Obj(
            null,
            {[_key_]: 'a', [_val_]: 1},
            {[_key_]: 'b', [_val_]: 2},
        );

        expect(Object.keys(object)).toEqual(['a', 'b']);

        expect(object[_metas_]).toEqual(metas);

    });

    it('returns an object with no keys, except default _metas_, for null', () => {

        const metas = {
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [Obj],
        };

        expect(X$Obj(null)).toEqual({[_metas_]: metas});

    });

    it('returns an object with no keys, except default _metas_, for undefined', () => {

        const metas = {
            [_atype_]: _obj_,
            [_2str_]:  X$obj2str,
            [_toses_]: [Obj],
        };

        expect(X$Obj()).toEqual({[_metas_]: metas});

    });

});


