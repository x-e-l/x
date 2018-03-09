const {X$obj2frz} = require('../../../src/boot/transformers');

describe('transformers.obj2frz', () => {

    const obj = {a: 1, b: 2, c: 3, [Symbol['d']]: 4};

    it('returns a frozen object', () => {
        const frozen = X$obj2frz(obj);
        expect(Object.isFrozen(frozen)).toBe(true);
    });

    it('does not freeze original object', () => {
        X$obj2frz(obj);
        expect(Object.isFrozen(obj)).toBe(false);
    });

    it('frozen object has all the props of the original', () => {
        expect(X$obj2frz(obj)).toEqual(obj);
    });

    it('returns null for null', () => {
        expect(X$obj2frz(null)).toBe(null);
    });

    it('returns undefined for undefined', () => {
        expect(X$obj2frz()).toBe(void 0);
    });

    it('returns empty string for empty string', () => {
        expect(X$obj2frz('')).toBe('');
    });

    it('returns number for number', () => {
        expect(X$obj2frz(0)).toBe(0);
        expect(X$obj2frz(-1)).toBe(-1);
        expect(X$obj2frz(10)).toBe(10);
        expect(X$obj2frz(NaN)).toBe(NaN);
        expect(X$obj2frz(Infinity)).toBe(Infinity);
        expect(X$obj2frz(-Infinity)).toBe(-Infinity);
    });

    it('returns boolean for boolean', () => {
        expect(X$obj2frz(false)).toBe(false);
        expect(X$obj2frz(true)).toBe(true);
    });

});


