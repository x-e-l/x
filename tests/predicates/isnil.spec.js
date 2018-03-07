const {_metas_, _atype_, _nil_} = require('../../src/symbols');
const {X$isnil} = require('../../src/boot/predicates');

describe('predicates.isnil', () => {

    it('returns false for undefined', () => {
        expect(X$isnil()).toBe(false);
    });

    it('returns false for null', () => {
        expect(X$isnil(null)).toBe(false);
    });

    it('returns false for empty object', () => {
        expect(X$isnil({})).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(X$isnil('')).toBe(false);
    });

    it('returns false for number 0', () => {
        expect(X$isnil(0)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(X$isnil(NaN)).toBe(false);
    });

    it('returns false for boolean false', () => {
        expect(X$isnil(false)).toBe(false);
    });

    it('returns false for boolean true', () => {
        expect(X$isnil(true)).toBe(false);
    });

    it('returns true for object with _nil_ archetype', () => {
        const object = {[_metas_]: {[_atype_]: _nil_}};
        expect(X$isnil(object)).toBe(true);
    });

});


