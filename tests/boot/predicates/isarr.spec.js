const {_metas_, _atype_, _arr_} = require('../../../src/symbols');
const {X$isarr} = require('../../../src/boot/predicates');

describe('predicates.isarr', () => {

    it('returns false for undefined', () => {
        expect(X$isarr()).toBe(false);
    });

    it('returns false for null', () => {
        expect(X$isarr(null)).toBe(false);
    });

    it('returns false for empty array', () => {
        expect(X$isarr([])).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(X$isarr('')).toBe(false);
    });

    it('returns false for number 0', () => {
        expect(X$isarr(0)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(X$isarr(NaN)).toBe(false);
    });

    it('returns false for boolean false', () => {
        expect(X$isarr(false)).toBe(false);
    });

    it('returns false for boolean true', () => {
        expect(X$isarr(true)).toBe(false);
    });

    it('returns true for arrays with _arr_ archetype', () => {
        const array = [];
        array[_metas_] = {[_atype_]: _arr_};
        expect(X$isarr(array)).toBe(true);
    });

});


