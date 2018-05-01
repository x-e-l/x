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
        expect(`${ metas[_toses_]}`).toEqual(`${ [X$Obj, X$Fun, X$Cst]}`);

        expect(metas[_atype_]).toBe(_cst_);
        expect(metas[_2str_]).toBe(X$cst2str);

        expect(`${ metas[_call_]}`).toBe(`${ X$Bul}`);

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
        expect(`${ metas[_2str_]}`).toBe(`${ tostrf}`);
        expect(`${ metas[_2bul_]}`).toBe(`${ tobulf}`);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrf(obj));
        expect(metas[_2bul_](obj)).toBe(void 0);

        // proxied functions, have the same string representation
        expect(`${ metas[_toses_]}`).toBe(`${ [X$Obj, X$Bul]}`);


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

        expect(keys).toEqual(props);
        expect(metas[_props_]).toEqual(props);
        expect(metas[_atype_]).toEqual(_obj_);

        // different functions, identical code
        expect(`${ metas[_2str_]}`).toBe(`${ tostrt}`);
        expect(`${ metas[_2bul_]}`).toBe(`${ tobult}`);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrt(obj));
        expect(metas[_2bul_](obj)).toBe(tobult(obj));

        // proxied functions, have the same string representation
        expect(`${ metas[_toses_]}`).toBe(`${ [X$Obj, X$Bul]}`);

    });

    describe('returns an object with keys and proper _2bul_ function for primitive', () => {

        const refs = [
            {[_key_]: 'a', [_val_]: 1},
            {[_key_]: 'b', [_val_]: 2},
        ];

        it('string', () => {

            const empty = X$Bul('', ...refs);

            expect(Object.keys(empty)).toEqual(['a', 'b']);
            expect(empty[_metas_]).toBeDefined();
            expect(empty[_metas_][_2bul_](empty)).toBe('');

            const full = X$Bul('asdf', ...refs);

            expect(Object.keys(full)).toEqual(['a', 'b']);
            expect(full[_metas_]).toBeDefined();
            expect(full[_metas_][_2bul_](full)).toBe('asdf');

        });

        it('boolean', () => {

            const f = X$Bul(false, ...refs);

            expect(Object.keys(f)).toEqual(['a', 'b']);
            expect(f[_metas_]).toBeDefined();
            expect(f[_metas_][_2bul_](f)).toBe(tobulf(f));


            const t = X$Bul(true, ...refs);

            expect(Object.keys(t)).toEqual(['a', 'b']);
            expect(t[_metas_]).toBeDefined();
            expect(t[_metas_][_2bul_](t)).toBe(tobult(t));

        });

        it('number', () => {

            const one = X$Bul(1, ...refs);

            expect(Object.keys(one)).toEqual(['a', 'b']);
            expect(one[_metas_]).toBeDefined();
            expect(one[_metas_][_2bul_](one)).toEqual(1);


            const zero = X$Bul(0, ...refs);

            expect(Object.keys(zero)).toEqual(['a', 'b']);
            expect(zero[_metas_]).toBeDefined();
            expect(zero[_metas_][_2bul_](zero)).toEqual(0);

            const nan = X$Bul(NaN, ...refs);

            expect(Object.keys(nan)).toEqual(['a', 'b']);
            expect(nan[_metas_]).toBeDefined();
            expect(nan[_metas_][_2bul_](nan)).toEqual(NaN);

        });

        it('null', () => {

            const obj = X$Bul(null, ...refs);

            expect(Object.keys(obj)).toEqual(['a', 'b']);
            expect(obj[_metas_]).toBeDefined();
            expect(obj[_metas_][_2bul_](obj)).toBe(null);

        });

        it('undefined', () => {

            const obj = X$Bul(void 0, ...refs);

            expect(Object.keys(obj)).toEqual(['a', 'b']);
            expect(obj[_metas_]).toBeDefined();
            expect(obj[_metas_][_2bul_](obj)).toBe(void 0);

        });


    });

    it('returns an object with no keys, except default _metas_, for null', () => {

        const obj = X$Bul(null);
        const metas = obj[_metas_];

        expect(Object.keys(obj)).toEqual([]);
        expect(metas[_atype_]).toBe(_obj_);

        // different functions, identical code
        expect(`${ metas[_2str_]}`).toBe(`${ tostrf}`);
        expect(`${ metas[_2bul_]}`).toBe(`${ tobulf}`);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrf(obj));
        expect(metas[_2bul_](obj)).toBe(null);

        // proxied functions, have the same string representation
        expect(`${ metas[_toses_]}`).toBe(`${ [X$Obj, X$Bul]}`);

    });

    it('returns an object with no keys, except default _metas_, for undefined', () => {

        const obj = X$Bul(void 0);
        const metas = obj[_metas_];

        expect(Object.keys(obj)).toEqual([]);
        expect(metas[_atype_]).toBe(_obj_);

        // different functions, identical code
        expect(`${ metas[_2str_]}`).toBe(`${ tostrf}`);
        expect(`${ metas[_2bul_]}`).toBe(`${ tobulf}`);
        // identical code, identical result
        expect(metas[_2str_](obj)).toBe(tostrf(obj));
        expect(metas[_2bul_](obj)).toBe(void 0);

        // proxied functions, have the same string representation
        expect(`${ metas[_toses_]}`).toBe(`${ [X$Obj, X$Bul]}`);

    });

});


