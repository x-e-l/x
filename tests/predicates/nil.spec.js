const {X$nil} = require('../../src/predicates');

describe('predicates.nil', () => {

    it('returns true for undefined', () => {
        expect(X$nil()).toBe(true);
    });

    it('returns true for null', () => {
        expect(X$nil(null)).toBe(true);
    });

    it('returns false for empty string', () => {
        expect(X$nil('')).toBe(false);
    });

    it('returns false for number 0', () => {
        expect(X$nil(0)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(X$nil(NaN)).toBe(false);
    });

    it('returns false for boolean false', () => {
        expect(X$nil(false)).toBe(false);
    });

    it('returns false for boolean true', () => {
        expect(X$nil(true)).toBe(false);
    });

});


