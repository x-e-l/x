const {X$push} = require('../../src/boot/arrays');

describe('arrays.push', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    it('adds element at the end of an array', () => {
        expect(X$push([a, b], c)).toEqual([a, b, c]);
    });

    it('does not alter original array', () => {
        const array = [a];
        X$push(array, b);
        expect(array).toEqual([a]);
    });

    it('is giving back [item] for undefined array', () => {
        expect(X$push(void 0, b)).toEqual([b]);
    });

    it('is giving back [item] for null array', () => {
        expect(X$push(null, c)).toEqual([c]);
    });

});


