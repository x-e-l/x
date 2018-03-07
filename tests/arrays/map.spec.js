const {X$map} = require('../../src/boot/arrays');

describe('arrays.map', () => {

    const a = {len: 1};
    const b = {len: 2};
    const c = {len: 3};

    const f = ($ => $.len);

    it('applies f to each element of one array returning second array', () => {
        expect(X$map([a, b, c], f)).toEqual([1, 2, 3]);
    });

    it('does not alter the original array', () => {
        const array = [a, b, c];
        X$map(array, f);
        expect(array).toEqual([a, b, c]);
    });

    it('is giving back [] for undefined array', () => {
        expect(X$map(void 0, f)).toEqual([]);
    });

    it('is giving back [] for null array', () => {
        expect(X$map(null, f)).toEqual([]);
    });

    it('is giving back undefined for undefined .map', () => {
        expect(X$map({}, b)).toEqual(void 0);
    });

    it('is giving back null for null .map', () => {
        expect(X$map({map: null}, c)).toEqual(null);
    });

});


