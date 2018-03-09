const {_toses_, _metas_, _call_, _props_} = require('../../../src/symbols');
const {X$callf} = require('../../../src/boot/getters');

describe('getters.callf', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};
    const d = {d: 4};
    const e = {e: 5};

    const toses = [a, b];
    const props = ['c', 'e'];
    const call = $ => $;

    const metas = {
        [_toses_]: toses,
        [_call_]:  call,
        [_props_]: props,
    };

    const obj = {
        [_metas_]: metas,
        c,
        d,
        e,
    };

    it('returns the registered function to be used for calling an object', () => {

        expect(X$callf(obj)).toEqual(call);

    });

    it('is giving back function for undefined object', () => {

        expect(typeof X$callf(void 0)).toBe('function');

    });

    it('is giving back function for null object', () => {

        expect(typeof X$callf(null)).toBe('function');

    });

    it('is giving back function for undefined metas on object', () => {

        expect(typeof X$callf({}, b)).toBe('function');

    });

    it('is giving back function for null metas on object', () => {

        expect(typeof X$callf({[_metas_]: null})).toEqual('function');

    });

});


