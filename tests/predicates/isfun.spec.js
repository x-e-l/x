const {_metas_, _atype_, _fun_} = require('../../src/symbols');
const {X$isfun} = require('../../src/boot/predicates');

describe('predicates.isfun', () => {

    it('returns false for undefined', () => {
        expect(X$isfun()).toBe(false);
    });

    it('returns false for null', () => {
        expect(X$isfun(null)).toBe(false);
    });

    it('returns false basic function', () => {
        expect(X$isfun($ => $)).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(X$isfun('')).toBe(false);
    });

    it('returns false for number 0', () => {
        expect(X$isfun(0)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(X$isfun(NaN)).toBe(false);
    });

    it('returns false for boolean false', () => {
        expect(X$isfun(false)).toBe(false);
    });

    it('returns false for boolean true', () => {
        expect(X$isfun(true)).toBe(false);
    });

    it('returns true for functions with _fun_ archetype', () => {
        const fn = ($ => $);
        fn[_metas_] = {[_atype_]: _fun_};
        expect(X$isfun(fn)).toBe(true);
    });

});


