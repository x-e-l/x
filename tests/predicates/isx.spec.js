const {_metas_} = require('../../src/symbols');
const {X$isx} = require('../../src/boot/predicates');

describe('predicates.isx', () => {

    it('returns false for undefined', () => {
        expect(X$isx()).toBe(false);
    });

    it('returns false for null', () => {
        expect(X$isx(null)).toBe(false);
    });

    it('returns false for empty object', () => {
        expect(X$isx({})).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(X$isx('')).toBe(false);
    });

    it('returns false for number 0', () => {
        expect(X$isx(0)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(X$isx(NaN)).toBe(false);
    });

    it('returns false for boolean false', () => {
        expect(X$isx(false)).toBe(false);
    });

    it('returns false for boolean true', () => {
        expect(X$isx(true)).toBe(false);
    });

    it('returns true for object with _metas_ but no archetype', () => {
        expect(X$isx({[_metas_]: {}})).toBe(true);
    });

});


