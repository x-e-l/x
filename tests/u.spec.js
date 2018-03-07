const u = require('../src/u');
const {isf, tok} = u;

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

});
