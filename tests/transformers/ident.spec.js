const {X$ident} = require('../../src/boot/transformers');

describe('transformers.ident', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    it('returns the same input argument', () => {
        expect(X$ident(a)).toBe(a);
        expect(X$ident(b)).toBe(b);
        expect(X$ident(c)).toBe(c);
    });

    it('returns null for null', () => {
        expect(X$ident(null)).toBe(null);
    });

    it('returns same empty array for empty array', () => {
        const arr = [];
        expect(X$ident(arr)).toBe(arr);
    });

    it('returns same empty object for empty object', () => {
        const obj = {};
        expect(X$ident(obj)).toBe(obj);
    });

    it('returns empty string for empty string', () => {
        expect(X$ident('')).toBe('');
    });

    it('returns number 0 for number 0', () => {
        expect(X$ident(0)).toBe(0);
    });

    it('returns NaN for NaN', () => {
        expect(X$ident(NaN)).toBe(NaN);
    });

    it('returns the same boolean for boolean', () => {
        expect(X$ident(false)).toBe(false);
        expect(X$ident(true)).toBe(true);
    });

});


