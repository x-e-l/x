const u = require('../src/u');
const {isf, tok, iife, nil, prim, ftos, nan, owns, frz$} = u;

describe('u', () => {


    it('is frozen', () => {
        expect(Object.isFrozen(u)).toBeTruthy();
    });

    it('own properties can not be nullified', () => {

        Object.keys(u).map(key => {
            u[key] = null;
            expect([key, u[key]]).not.toEqual([key, null]);
        });

    });

    describe('has `isf` that ', () => {

        it('returns true when its param is a function', () => {

            const a = $ => $;

            const f = new Function('$', 'return $');

            const g = function* generator() {

            };

            function h() {

            }

            const x = function x() {

            };

            expect(isf(a)).toBe(true);
            expect(isf(f)).toBe(true);
            expect(isf(g)).toBe(true);
            expect(isf(h)).toBe(true);
            expect(isf(x)).toBe(true);


        });

        it('returns false when its param is not a function', () => {

            expect(isf()).toBe(false);
            expect(isf(null)).toBe(false);
            expect(isf(0)).toBe(false);
            expect(isf('')).toBe(false);
            expect(isf({})).toBe(false);
            expect(isf(new RegExp(''))).toBe(false);

        });


    });

    describe('has `tok` that ', () => {

        it('returns a function that accepts one argument', () => {

            const f = tok();
            expect(typeof f).toBe('function');
            expect(f.length).toBe(1);

        });

        it('returns a function when its param is not a function', () => {

            expect(typeof tok()).toBe('function');
            expect(typeof tok(null)).toBe('function');
            expect(typeof tok(0)).toBe('function');
            expect(typeof tok('')).toBe('function');
            expect(typeof tok({})).toBe('function');
            expect(typeof tok(new RegExp(''))).toBe('function');

        });


    });

    describe('has `iife` that ', () => {

        it('executes a function provided as the one argument and returns its result', () => {

            const mocked = () => 'result';
            const f = jest.fn(mocked);

            const result = iife(f);

            expect(f).toBeCalled();
            expect(f).toBeCalledWith();

            expect(f.mock.calls).toEqual([[]]);
            // expect(f.mock.calls.length).toEqual(1);

            expect(result).toBe('result');


        });

        it('returns the given param when not a function', () => {

            expect(iife()).toBe(void 0);
            expect(iife(null)).toBe(null);
            expect(iife(0)).toBe(0);
            expect(iife('')).toBe('');

            const obj = {a: 1, b: 2, c: 3};
            expect(iife(obj)).toBe(obj);

        });


    });

    describe('has `nil` that', () => {

        it('returns `true` for `undefined` and null', () => {
            expect(nil()).toBe(true);
            expect(nil(null)).toBe(true);
        });

        it('returns `false` for empty string, number 0, `NaN`, `false`, `true`', () => {
            expect(nil('')).toBe(false);
            expect(nil(0)).toBe(false);
            expect(nil(NaN)).toBe(false);
            expect(nil(false)).toBe(false);
            expect(nil(true)).toBe(false);
        });

    });

    describe('has `prim` that', () => {

        it('returns `true` for primitive values', () => {

            expect([void 0, prim()]).toEqual([void 0, true]);
            expect([null, prim(null)]).toEqual([null, true]);

            expect(['', prim('')]).toEqual(['', true]);

            expect([0, prim(0)]).toEqual([0, true]);
            expect([NaN, prim(NaN)]).toEqual([NaN, true]);

            expect([false, prim(false)]).toEqual([false, true]);
            expect([true, prim(true)]).toEqual([true, true]);

        });

        it('returns `false` for non primitive values', () => {

            expect(prim({})).toBe(false);
            expect(prim([])).toBe(false);

            // noinspection JSPrimitiveTypeWrapperUsage
            expect(prim(new Boolean())).toBe(false);
            // noinspection JSPrimitiveTypeWrapperUsage
            expect(prim(new String())).toBe(false);
            // noinspection JSPrimitiveTypeWrapperUsage
            expect(prim(new Number())).toBe(false);

        });

    });

    it('has `owns` that is an alias for `Object.getOwnPropertySymbols`', () => {

        expect(owns).toBe(Object.getOwnPropertySymbols);

    });

    it('has `ftos` that is an alias for `Funtion.prototype.toString`', () => {

        expect(ftos).toBe(Function.prototype.toString);

    });

    it('has `nan` that is an alias for `Number.isNaN`', () => {

        expect(nan).toBe(Number.isNaN);

    });

    it('has `frz$` that is an alias for `Object.freeze`', () => {

        expect(frz$).toBe(Object.freeze);

    });

    // TODO: @azder: add tests for f2s, tstr, push$,

});
