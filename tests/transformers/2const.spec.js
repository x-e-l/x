const {X$2const} = require('../../src/boot/transformers');

describe('transformers.2const', () => {

    const obj = {a: 1, b: 2};

    it('returns a function', () => {
        expect(typeof X$2const(obj)).toBe('function');
    });

    it('returns constant function for null that always returns null', () => {

        const constant = X$2const(null);

        expect(constant()).toBe(null);

        expect(constant('asdf')).toBe(null);
        expect(constant(123456)).toBe(null);
        expect(constant([1, 2])).toBe(null);

    });

    it('returns constant function for undefined that always returns undefined', () => {

        const constant = X$2const();

        expect(constant()).toBe(void 0);

        expect(constant('asdf')).toBe(void 0);
        expect(constant(123456)).toBe(void 0);
        expect(constant([1, 2])).toBe(void 0);

    });

    it('returns constant function for object that always returns the same object', () => {

        const constant = X$2const(obj);

        expect(constant()).toBe(obj);

        expect(constant('asdf')).toBe(obj);
        expect(constant(123456)).toBe(obj);
        expect(constant([1, 2])).toBe(obj);

    });

});


