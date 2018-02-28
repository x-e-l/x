const {_metas_, _props_} = require('../../src/symbols');
const {X$mset} = require('../../src/setters');

describe('getters.mset', () => {

    it('modifies the original object meta properties', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {a, b, c, [_metas_]: null};

        const actual1 = X$mset(obj, 'd', d);
        const expected1 = {a, b, c, [_metas_]: {d}};

        expect(actual1).toEqual(expected1);

        const actual2 = X$mset(actual1, 'd', e);
        const expected2 = {a, b, c, [_metas_]: {d: e}};

        expect(actual2).toEqual(expected2);

    });

    it('returns null for null object', () => {
        expect(X$mset(null, 'a')).toBe(null);
    });

    it('returns undefined for undefined object', () => {
        expect(X$mset(void 0, 'a')).toBe(void 0);
    });

    it.skip('returns Err object for null key', () => {
        expect(X$mset({}, null));
    });

    it.skip('returns Err object for undefined key', () => {
        expect(X$mset({}, void 0));
    });


});


