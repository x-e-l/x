const {_toses_, _metas_, _call_, _props_, _2len_} = require('../../src/symbols');
const {X$2lenf} = require('../../src/boot/getters');

describe('getters.2lenf', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};
    const d = {d: 4};
    const e = {e: 5};

    const toses = [a, b];
    const props = ['c', 'e'];
    const call = $ => $;

    const tolen = $ => ($ ? props.length : 0);

    const metas = {
        [_toses_]: toses,
        [_call_]:  call,
        [_props_]: props,
        [_2len_]:  tolen,
    };

    const obj = {
        [_metas_]: metas,
        c,
        d,
        e,
    };

    it('returns the registered function to be used for returning the len of an object', () => {

        expect(X$2lenf(obj)).toEqual(tolen);

    });

    it('is giving back function for undefined object', () => {

        expect(typeof X$2lenf(void 0)).toBe('function');

    });

    it('is giving back function for null object', () => {

        expect(typeof X$2lenf(null)).toBe('function');

    });

    it('is giving back function for undefined metas on object', () => {

        expect(typeof X$2lenf({}, b)).toBe('function');

    });

    it('is giving back function for null metas on object', () => {

        expect(typeof X$2lenf({[_metas_]: null})).toEqual('function');

    });


    describe('returns the registered 2len function for an object', () => {

        const len = X$2lenf(obj);

        it('in turn when called with that object, returns the number of registered props', () => {

            expect(len(obj)).toEqual(2);

        });

        it('in turn when called with undefined object', () => {

            expect(len(void 0)).toEqual(0);

        });

        it('in turn when called with null object', () => {

            expect(len(null)).toEqual(0);

        });

    });


    describe('returns default 2len function for null object', () => {

        const len = X$2lenf(null);

        it('in turn when called with undefined object returns 0', () => {

            expect(len(void 0)).toBe(0);

        });

        it('in turn when called with null object returns 0', () => {

            expect(len(null)).toBe(0);

        });

    });


    describe('returns default 2len function for undefined object', () => {

        const len = X$2lenf();

        it('in turn when called with undefined object returns 0', () => {

            expect(len(void 0)).toBe(0);

        });

        it('in turn when called with null object returns 0', () => {

            expect(len(null)).toBe(0);

        });

    });


});


