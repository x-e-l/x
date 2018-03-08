const u = require('../src/u');
const {isf, tok, iife} = u;

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

});
