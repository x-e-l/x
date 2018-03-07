const {_metas_, _props_} = require('../../src/symbols');
const {X$has} = require('../../src/boot/objects');

describe('objects.has', () => {

    it('returns true if key exists in the props meta of the object', () => {

        const a = {a: 1};
        const b = {b: 2};
        const _c_ = Symbol('_c_');

        const obj = {a, b, _c_, [_metas_]: {[_props_]: ['a', 'b', _c_]}};

        expect(X$has(obj, 'a')).toBe(true);
        expect(X$has(obj, _c_)).toBe(true);

    });

    it('returns false if key does not exists in the props meta of the object', () => {

        const a = {a: 1};
        const b = {b: 2};
        const _c_ = Symbol('_c_');

        const obj = {a, b, _c_};

        expect(X$has(obj, 'a')).toBe(false);
        expect(X$has(obj, _c_)).toBe(false);

    });

    it('returns null for null object', () => {
        expect(X$has(null)).toBe(null);
    });

    it('returns undefined for undefined object', () => {
        expect(X$has()).toBe(void 0);
    });

    it.skip('returns Err() for null key', () => {
        expect(X$has({}, null)).toBe(null);
    });

    it.skip('returns Err() for undefined key', () => {
        expect(X$has({})).toBe(void 0);
    });

});


