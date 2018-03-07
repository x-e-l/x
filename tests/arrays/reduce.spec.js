const {X$reduce} = require('../../src/boot/arrays');

describe('arrays.reduce', () => {

    const a = {len: 1};
    const b = {len: 2};
    const c = {len: 3};

    const f = (($, a) => [...$, a.len]);

    it('applies f to each element of one array returning updated memo', () => {
        expect(X$reduce([a, b, c], [], f)).toEqual([1, 2, 3]);
    });

    it('does not alter the original array', () => {
        const array = [a, b, c];
        X$reduce(array, [], f);
        expect(array).toEqual([a, b, c]);
    });

    it('is giving back init for undefined array', () => {
        const init = [a, b, c];
        const expected = [a, b, c];
        expect(X$reduce(void 0, init, f)).toEqual(expected);
    });

    it('is giving back init for null array', () => {
        const init = [a, b, c];
        const expected = [a, b, c];
        expect(X$reduce(null, init, f)).toEqual(expected);
    });

    it('is giving back undefined for undefined .reduce', () => {
        expect(X$reduce({}, [], f)).toEqual(void 0);
    });

    it('is giving back null for null .reduce', () => {
        expect(X$reduce({reduce: null}, [], f)).toEqual(null);
    });

});


