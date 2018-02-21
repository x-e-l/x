const {X$second} = require('../../src/arrays');

describe('arrays.second', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    it('returns the second element of non-empty array', () => {
        expect(X$second([a, b, c])).toEqual(b);
    });

    it('is giving back undefined for empty array', () => {
        expect(X$second([])).toEqual(void 0);
    });

    it('is giving back undefined for undefined', () => {
        expect(X$second(void 0)).toEqual(void 0);
    });

    it('is giving back null for null', () => {
        expect(X$second(null)).toEqual(null);
    });

});


