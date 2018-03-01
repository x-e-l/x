const {_metas_, _toses_} = require('../../src/symbols');
const {X$padd} = require('../../src/setters');

describe('getters.padd', () => {

    it('modifies the original object prototype array', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {a, b, [_metas_]: {[_toses_]: [c]}};

        const actual1 = X$padd(obj, d);
        const expected1 = {a, b, [_metas_]: {[_toses_]: [c, d]}};

        expect(actual1).toEqual(expected1);

        const actual2 = X$padd(actual1, e);
        const expected2 = {a, b, [_metas_]: {[_toses_]: [c, d, e]}};

        expect(actual2).toEqual(expected2);

    });

    it('returns null for null object', () => {
        expect(X$padd(null, 'a')).toBe(null);
    });

    it('returns undefined for undefined object', () => {
        expect(X$padd(void 0, 'a')).toBe(void 0);
    });

    // TODO: @azder: test if it only adds functions
    // TODO: @azder: test if it works when _metas_ and/or _toses_ are nil

});


