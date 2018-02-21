const {X$len} = require('../../src/arrays');

describe('arrays.len', () => {

    it('returns the correct length for non-empty array', () => {
        expect(X$len([1, 2, 3])).toEqual(3);
    });

    it('is giving back 0 for empty array', () => {
        expect(X$len([])).toEqual(0);
    });

    it('is giving back 0 for null or undefined', () => {
        expect(X$len(void 0)).toEqual(0);
        expect(X$len(null)).toEqual(0);
    });

});


