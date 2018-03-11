const {
    _metas_, _props_, _2str_, _2bul_, _toses_, _call_, _atype_,
    _obj_, _cst_,
    _key_, _val_,
} = require('../../src/symbols');

const {tok} = require('../../src/u');
const {X$cst2str} = require('../../src/boot/stringers');
const {X$Obj, X$Fun, X$Cst} = require('../../src/boot/archetypes');
const {X$Bul} = require('../../src/csts/bul');


describe('constructors.Bul', () => {

    const TRU = '⊨';
    const FAL = '⊭';

    const tostrt = tok(TRU);
    const tostrf = tok(FAL);

    const tobult = tok(true);
    const tobulf = tok(false);

    it('is a constructor', () => {

        expect(typeof X$Bul).toEqual('function');

        const metas = X$Bul[_metas_];

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toEqual('' + [X$Obj, X$Fun, X$Cst]);

        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect('' + metas[_call_]).toBe('' + X$Bul);

    });

    it('returns an object with no prototype', () => {

        expect(X$Bul().prototype).toBe(void 0);

    });

    it('paramless returns an object with no keys, except default _metas_', () => {

        const obj = X$Bul();
        const metas = obj[_metas_];

        expect(Object.keys(obj)).toEqual([]);
        expect(metas[_atype_]).toBe(_obj_);

        // different functions, identical code
        expect('' + metas[_2str_]).toBe('' + tostrf);
        expect('' + metas[_2bul_]).toBe('' + tobulf);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrf(obj));
        expect(metas[_2bul_](obj)).toBe(tobulf(obj));

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toBe('' + [X$Obj, X$Bul]);


    });

    it('with params returns an object with specified keys, existing keys and expected _metas_', () => {

        const props = ['c', 'a', 'b'];

        const obj = {
            c: {c: 3},
        };

        const bul = X$Bul(
            obj,
            {[_key_]: 'a', [_val_]: 1},
            {[_key_]: 'b', [_val_]: 2},
        );

        const keys = Object.keys(bul);
        const metas = bul[_metas_];

        expect(keys.length).toBe(props.length);
        expect(metas[_props_]).toEqual(props);
        expect(metas[_atype_]).toEqual(_obj_);

        // different functions, identical code
        expect('' + metas[_2str_]).toBe('' + tostrt);
        expect('' + metas[_2bul_]).toBe('' + tobult);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrt(obj));
        expect(metas[_2bul_](obj)).toBe(tobult(obj));

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toBe('' + [X$Obj, X$Bul]);

    });

    it('returns an object with no keys, except default _metas_, for null', () => {

        const obj = X$Bul(null);
        const metas = obj[_metas_];

        expect(Object.keys(obj)).toEqual([]);
        expect(metas[_atype_]).toBe(_obj_);

        // different functions, identical code
        expect('' + metas[_2str_]).toBe('' + tostrf);
        expect('' + metas[_2bul_]).toBe('' + tobulf);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrf(obj));
        expect(metas[_2bul_](obj)).toBe(tobulf(obj));

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toBe('' + [X$Obj, X$Bul]);

    });

    it('returns an object with no keys, except default _metas_, for undefined', () => {

        const obj = X$Bul(void 0);
        const metas = obj[_metas_];

        expect(Object.keys(obj)).toEqual([]);
        expect(metas[_atype_]).toBe(_obj_);

        // different functions, identical code
        expect('' + metas[_2str_]).toBe('' + tostrf);
        expect('' + metas[_2bul_]).toBe('' + tobulf);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrf(obj));
        expect(metas[_2bul_](obj)).toBe(tobulf(obj));

        // proxied functions, have the same string representation
        expect('' + metas[_toses_]).toBe('' + [X$Obj, X$Bul]);

    });

});


