const {X$call} = require('../../../src/boot/functions');

describe('functions.call', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const obj = {};

    it('calls function once', () => {

        const fn = jest.fn();
        X$call(fn, obj, a, b, c);
        expect(fn).toHaveBeenCalledTimes(1);

    });

    it('calls function with proper arguments', () => {

        const fn = jest.fn();
        X$call(fn, obj, a, b, c);
        expect(fn).toHaveBeenCalledWith(obj, a, b, c);

    });

    it('uses null for the this reference', () => {

        const fn = jest.fn();
        X$call(fn, obj, a, b, c);
        expect(fn.mock.instances[0]).toBe(null);

    });

    it('returns the result of the function', () => {

        expect(X$call(a => a, obj)).toBe(obj);

    });

    it('is giving back undefined for undefined function', () => {

        expect(X$call(void 0, obj, a, b, c)).toEqual(void 0);

    });

    it('is giving back null for null function', () => {

        expect(X$call(null, obj, a, b, c)).toEqual(null);

    });

    it('is giving back undefined for undefined .call property on dummy function', () => {

        const f = ($ => $);
        f.call = void 0;
        expect(X$call(f, obj, a, b, c)).toEqual(void 0);

    });

    it('is giving back null for null .call property on dummy function', () => {

        const f = ($ => $);
        f.call = null;
        expect(X$call(f, obj, a, b, c)).toEqual(null);

    });

});


