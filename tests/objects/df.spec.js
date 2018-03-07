const {X$df} = require('../../src/boot/objects');

describe('objects.df', () => {

    it('returns the second parameter when not null or undefined', () => {

        const a = {a: 1};
        const b = {b: 2};

        const obj = {a, b};

        expect(X$df(null, obj)).toBe(obj);
        expect(X$df(void 0, obj)).toBe(obj);

    });

    it('returns the first parameter when second one is null or undefined', () => {

        const a = {a: 1};
        const b = {b: 2};

        const obj = {a, b};

        expect(X$df(obj, null)).toBe(obj);
        expect(X$df(obj, void 0)).toBe(obj);

    });

    it('returns null for null first parameter and missing second parameter', () => {
        expect(X$df(null)).toBe(null);
    });

    it('returns undefined for undefined first parameter and missing second parameter', () => {
        expect(X$df()).toBe(void 0);
    });

});


