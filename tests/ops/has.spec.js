const {_metas_, _props_} = require('../../src/symbols');
const {X$has} = require('../../src/ops/reflect');

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

    it('returns false for null key', () => {

        const obj1 = {};
        const obj2 = {[null]: 1};
        const obj3 = {[null]: 1, [_metas_]: {[_props_]: [null]}};

        const expected = /^X-NILKEY: X\$has\(_,null\)/;

        expect(
            () => X$has(obj1, null)
        ).toThrow(
            expected
        );

        expect(
            () => X$has(obj2, null)
        ).toThrow(
            expected
        );

        expect(
            () => X$has(obj3, null)
        ).toThrow(
            expected
        );

    });

    it('throws error for undefined key', () => {

        const obj1 = {};
        const obj2 = {[void 0]: 1};
        const obj3 = {[void 0]: 1, [_metas_]: {[_props_]: [void 0]}};

        const expected = /^X-NILKEY: X\$has\(_,undefined\)/;

        expect(
            () => X$has(obj1)
        ).toThrow(
            expected
        );

        expect(
            () => X$has(obj2)
        ).toThrow(
            expected
        );

        expect(
            () => X$has(obj3)
        ).toThrow(
            expected
        );

    });


});


