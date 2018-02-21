const {X$last} = require('../../src/arrays');

describe('arrays.last', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const dummy = {'-1': -1};

    it('returns the last element of non-empty array', () => {
        expect(X$last([a, b, c])).toEqual(c);
    });

    it('is giving back undefined for empty array', () => {
        expect(X$last([])).toEqual(void 0);
    });

    it('is giving back undefined for undefined', () => {
        expect(X$last(void 0)).toEqual(void 0);
    });

    it('is giving back null for null', () => {
        expect(X$last(null)).toEqual(null);
    });

    it('does not return element with key "-1"', () => {
        expect(X$last(dummy)).toEqual(void 0);
    });

});


