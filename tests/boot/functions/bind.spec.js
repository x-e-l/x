const {X$bind} = require('../../../src/boot/functions');

describe('functions.bind', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const obj = {};

    it('does not call the function even once', () => {

        const fn = jest.fn();
        X$bind(fn, obj, a, b, c);
        expect(fn).toHaveBeenCalledTimes(0);

    });

    it('calls the .bind property of the function only once', () => {

        const fn = jest.fn();
        fn.bind = jest.fn();
        X$bind(fn, obj, a, b, c);
        expect(fn.bind).toHaveBeenCalledTimes(1);

    });

    it('reduces the resulting function arity to lower number', () => {

        const fn = (($, a, b) => $[a] + $[b]);
        const bound = X$bind(fn, obj, a);
        expect(bound.length).toBe(1);

    });

    it('uses null for the this reference while binding', () => {

        const fn = jest.fn();
        const bound = X$bind(fn, obj, a, b, c);

        bound(); // fn.mock collects info for fn only when bound gets called

        expect(fn.mock.instances[0]).toBe(null);

    });

    it('returns the result when the bound function is called', () => {

        expect(X$bind((a, b, c) => a + b + c, 3)(1, 2)).toBe(6);

    });

    it('is giving back undefined for undefined function', () => {

        expect(X$bind(void 0, obj, a, b, c)).toEqual(void 0);

    });

    it('is giving back null for null function', () => {

        expect(X$bind(null, obj, a, b, c)).toEqual(null);

    });

    it('is giving back undefined for undefined .bind property on dummy function', () => {

        const f = ($ => $);
        f.bind = void 0;
        expect(X$bind(f, obj, a, b, c)).toEqual(void 0);

    });

    it('is giving back null for null .bind property on dummy function', () => {

        const f = ($ => $);
        f.bind = null;
        expect(X$bind(f, obj, a, b, c)).toEqual(null);

    });

});


