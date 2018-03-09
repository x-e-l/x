const {X$includes} = require('../../../src/boot/arrays');

describe('arrays.includes', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    it('returns true if the element is included in the array', () => {
        expect(X$includes([a, b], a)).toEqual(true);
    });

    it('returns false if the element is not included in the array', () => {
        expect(X$includes([a, b], c)).toEqual(false);
    });

    it('is giving back undefined for undefined array', () => {
        expect(X$includes(void 0, b)).toEqual(void 0);
    });

    it('is giving back null for null array', () => {
        expect(X$includes(null, c)).toEqual(null);
    });

    it('is giving back undefined for undefined .includes', () => {
        expect(X$includes({}, b)).toEqual(void 0);
    });

    it('is giving back null for null .includes', () => {
        expect(X$includes({includes: null}, c)).toEqual(null);
    });

});


