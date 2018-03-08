const {_metas_, _toses_} = require('../../src/symbols');
const {X$tadd} = require('../../src/boot/setters');

describe('getters.padd', () => {

    it('modifies the original object prototype array', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {a, b, [_metas_]: {[_toses_]: [c]}};

        const actual1 = X$tadd(obj, d);
        const expected1 = {a, b, [_metas_]: {[_toses_]: [c, d]}};

        expect(actual1).toEqual(expected1);

        const actual2 = X$tadd(actual1, e);
        const expected2 = {a, b, [_metas_]: {[_toses_]: [c, d, e]}};

        expect(actual2).toEqual(expected2);

    });

    it('returns null for null object', () => {
        expect(X$tadd(null, 'a')).toBe(null);
    });

    it('returns undefined for undefined object', () => {
        expect(X$tadd(void 0, 'a')).toBe(void 0);
    });

    // TODO: @azder: test if it adds only functions
    // TODO: @azder: test if it works when _metas_ and/or _toses_ are nil
    // TODO: @azder: test if same function is added twice in a row

});


