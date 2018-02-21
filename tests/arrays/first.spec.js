const {X$first} = require('../../src/arrays');

describe('arrays.first', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const dummy = {'-1': -1};

    it('returns the first element of non-empty array', () => {
        expect(X$first([a, b, c])).toEqual(a);
    });

    it('is giving back undefined for empty array', () => {
        expect(X$first([])).toEqual(void 0);
    });

    it('is giving back undefined for undefined', () => {
        expect(X$first(void 0)).toEqual(void 0);
    });

    it('is giving back null for null', () => {
        expect(X$first(null)).toEqual(null);
    });

    it('does not return element with key "-1"', () => {
        expect(X$first(dummy)).toEqual(void 0);
    });

});


