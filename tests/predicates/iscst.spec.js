const {_metas_, _atype_, _cst_} = require('../../src/symbols');
const {X$iscst} = require('../../src/boot/predicates');

describe('predicates.iscst', () => {

    it('returns false for undefined', () => {
        expect(X$iscst()).toBe(false);
    });

    it('returns false for null', () => {
        expect(X$iscst(null)).toBe(false);
    });

    it('returns false basic function', () => {
        expect(X$iscst($ => $)).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(X$iscst('')).toBe(false);
    });

    it('returns false for number 0', () => {
        expect(X$iscst(0)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(X$iscst(NaN)).toBe(false);
    });

    it('returns false for boolean false', () => {
        expect(X$iscst(false)).toBe(false);
    });

    it('returns false for boolean true', () => {
        expect(X$iscst(true)).toBe(false);
    });

    it('returns true for functions with _cst_ archetype', () => {
        const fn = ($ => $);
        fn[_metas_] = {[_atype_]: _cst_};
        expect(X$iscst(fn)).toBe(true);
    });

});


