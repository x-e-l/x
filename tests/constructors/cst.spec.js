const {
    _metas_, _props_, _2str_, _toses_, _call_, _atype_,
    _cst_, _obj_,
    _key_, _val_,
} = require('../../src/symbols');

const {X$cst2str, X$obj2str} = require('../../src/boot/stringers');

const {X$Cst, X$O, X$Obj, X$Fun} = require('../../src/boot/constructors');

describe('constructors.Cst', () => {

    it('is a constructor', () => {

        expect(typeof X$Cst).toEqual('function');

        const metas = X$Cst[_metas_];

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('' + X$Cst);

    });

    it('returns an object with no prototype', () => {

        expect(X$Cst().prototype).toBe(void 0);

    });

    it('paramless returns a constructor with no keys, except default _metas_', () => {

        const cst = X$Cst();


        expect(Object.keys(cst)).toEqual([]);

        // proxied functions, have the same string representation
        expect('' + cst[_metas_][_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(cst[_metas_][_atype_]).toEqual(_cst_);
        expect(cst[_metas_][_2str_]).toEqual(X$cst2str);
        expect(cst[_metas_][_call_]).toEqual(cst);

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

        const keys = Object.keys(cst);

        expect(keys.length).toBe(props.length);
        expect(cst.length).toBe(fun.length);


        // proxied functions, have the same string representation
        expect('' + cst[_metas_][_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(cst[_metas_][_atype_]).toEqual(_cst_);
        expect(cst[_metas_][_2str_]).toEqual(X$cst2str);
        expect(cst[_metas_][_call_]).toEqual(cst);
        expect(cst[_metas_][_props_]).toEqual(props);

    });

    it('returns an empty array with no keys, except default _metas_, for null', () => {

        const cst = X$Cst(null);

        expect(cst.length).toEqual(1);
        expect('' + cst).toBe('$$ => $');

        expect(Object.keys(cst)).toEqual([]);
        expect(typeof cst).toBe('function');


        // proxied functions, have the same string representation
        expect('' + cst[_metas_][_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(cst[_metas_][_atype_]).toEqual(_cst_);
        expect(cst[_metas_][_2str_]).toEqual(X$cst2str);
        expect(cst[_metas_][_call_]).toEqual(cst);


    });

    it('returns a constructor with no keys, except default _metas_, for undefined', () => {


        const cst = X$Cst();

        expect(cst.length).toEqual(1);
        expect('' + cst).toBe('$$ => $');

        expect(Object.keys(cst)).toEqual([]);
        expect(typeof cst).toBe('function');

        // proxied functions, have the same string representation
        expect('' + cst[_metas_][_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(cst[_metas_][_atype_]).toEqual(_cst_);
        expect(cst[_metas_][_2str_]).toEqual(X$cst2str);
        expect(cst[_metas_][_call_]).toEqual(cst);

    });

    it('executes the internal builder function', () => {

        const mocked = (
            $ => {
                $ = X$O();
                $.a = 1;
                $.b = 2;
                return $;
            }
        );

        const internal = jest.fn(mocked);
        const TestObject = X$Cst(internal);

        const obj = TestObject();

        expect(Object.keys(obj)).toEqual(['a', 'b']);
        expect(obj[_metas_][_atype_]).toBe(_obj_);
        expect(obj[_metas_][_2str_]).toBe(X$obj2str);

        // proxied functions, have the same string representation
        expect('' + obj[_metas_][_toses_]).toBe('' + [X$Obj, TestObject]);

        expect(internal).toBeCalled();
        expect(internal.mock.calls.length).toBe(1);

    });

});


