const {_metas_, _props_} = require('../../src/symbols');
const {X$preg} = require('../../src/setters');

describe('setters.preg', () => {

    it('does not modify the original object properties', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {a, b, c, [_metas_]: {[_props_]: ['a', 'b', 'c']}};

        const actual1 = X$preg(obj, 'a');
        const expected1 = {
            a, b, c, [_metas_]: {[_props_]: ['a', 'b', 'c']},
        };

        expect(actual1).toEqual(expected1);

        const actual2 = X$preg(actual1, 'e');
        const expected2 = {
            a, b, c, [_metas_]: {[_props_]: ['a', 'b', 'c', 'e']},
        };

        expect(actual2).toEqual(expected2);

    });

    it('modifies the original object props array', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const obj = {a, b, [_metas_]: {[_props_]: ['a', 'b']}};

        const actual1 = X$preg(obj, 'c');
        const expected1 = {a, b, [_metas_]: {[_props_]: ['a', 'b', 'c']}};

        expect(actual1).toEqual(expected1);

        const actual2 = X$preg(actual1, 'd');
        const expected2 = {a, b, [_metas_]: {[_props_]: ['a', 'b', 'c', 'd']}};

        expect(actual2).toEqual(expected2);

    });

    it('returns null for null object', () => {
        expect(X$preg(null, 'a')).toBe(null);
    });

    it('returns undefined for undefined object', () => {
        expect(X$preg(void 0, 'a')).toBe(void 0);
    });

    it.skip('returns Err object for null key', () => {
        expect(X$preg({}, null));
    });

    it.skip('returns Err object for undefined key', () => {
        expect(X$preg({}, void 0));
    });


});


