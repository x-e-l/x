const {_toses_, _metas_, _call_, _props_, _2str_} = require('../../../src/symbols');
const {X$2strf} = require('../../../src/boot/getters');

describe('getters.2strf', () => {

    const symbol = '⦰';

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};
    const d = {d: 4};
    const e = {e: 5};

    const toses = [a, b];
    const props = ['c', 'e'];
    const call = $ => $;
    const tostr = $ => `*** ${ $ && Object.keys($) } ***`;

    const metas = {
        [_toses_]: toses,
        [_call_]:  call,
        [_props_]: props,
        [_2str_]:  tostr,
    };

    const obj = {
        [_metas_]: metas,
        c,
        d,
        e,
    };

    it('returns the registered function to be used for converting an object to string', () => {

        expect(X$2strf(obj)).toEqual(tostr);

    });

    it('is giving back function for undefined object', () => {

        expect(typeof X$2strf(void 0)).toBe('function');

    });

    it('is giving back function for null object', () => {

        expect(typeof X$2strf(null)).toBe('function');

    });

    it('is giving back function for undefined metas on object', () => {

        expect(typeof X$2strf({}, b)).toBe('function');

    });

    it('is giving back function for null metas on object', () => {

        expect(typeof X$2strf({[_metas_]: null})).toEqual('function');

    });


    describe('returns the registered 2str function for an object', () => {

        const str = X$2strf(obj);

        it('in turn when called with that object, returns string', () => {

            expect(str(obj)).toBe('*** c,d,e ***');

        });

        it('in turn when called with undefined object', () => {

            expect(str(void 0)).toBe('*** undefined ***');

        });

        it('in turn when called with null object', () => {

            expect(str(null)).toBe('*** null ***');

        });

    });


    describe('returns default 2str function for null object', () => {

        const str = X$2strf(null);

        it('in turn when called with undefined object returns appropriate non-empty string', () => {

            expect(str(void 0)).toBe(`${symbol }(undefined)${ symbol}`);

        });

        it('in turn when called with null object returns appropriate non-empty string', () => {

            expect(str(null)).toBe(`${symbol}(null)${symbol}`);

        });

    });


    describe('returns default 2str function for undefined object', () => {

        const str = X$2strf();

        it('in turn when called with undefined object returns appropriate non-empty string', () => {

            expect(str(void 0)).toBe(`${symbol}(undefined)${symbol}`);

        });

        it('in turn when called with null object returns appropriate non-empty string', () => {

            expect(str(null)).toBe(`${symbol}(null)${symbol}`);

        });

    });


});


