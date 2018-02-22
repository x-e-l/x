const {X$unshift} = require('../../src/arrays');

describe('arrays.push', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    it('adds element at the beginning of an array', () => {
        expect(X$unshift([b, c], a)).toEqual([a, b, c]);
    });

    it('does not alter original array', () => {
        const array = [a];
        X$unshift(array, b);
        expect(array).toEqual([a]);
    });

    it('is giving back [item] for undefined array', () => {
        expect(X$unshift(void 0, b)).toEqual([b]);
    });

    it('is giving back [item] for null array', () => {
        expect(X$unshift(null, c)).toEqual([c]);
    });

});


