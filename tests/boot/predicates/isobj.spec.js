const {_metas_, _atype_, _obj_} = require('../../../src/symbols');
const {X$isobj} = require('../../../src/boot/predicates');

describe('predicates.isobj', () => {

    it('returns false for undefined', () => {
        expect(X$isobj()).toBe(false);
    });

    it('returns false for null', () => {
        expect(X$isobj(null)).toBe(false);
    });

    it('returns false for empty object', () => {
        expect(X$isobj({})).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(X$isobj('')).toBe(false);
    });

    it('returns false for number 0', () => {
        expect(X$isobj(0)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(X$isobj(NaN)).toBe(false);
    });

    it('returns false for boolean false', () => {
        expect(X$isobj(false)).toBe(false);
    });

    it('returns false for boolean true', () => {
        expect(X$isobj(true)).toBe(false);
    });

    it('returns true for object with _obj_ archetype', () => {
        const object = {[_metas_]: {[_atype_]: _obj_}};
        expect(X$isobj(object)).toBe(true);
    });

    it('returns false for object with _metas_ but no _obj_ archetype', () => {
        const object = {[_metas_]: {}};
        expect(X$isobj(object)).toBe(false);
    });

});


