const {_toses_, _metas_, _call_, _props_} = require('../../src/symbols');
const {X$props} = require('../../src/boot/getters');

describe('getters.props', () => {

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

    it('returns string array with the keys of the registered properties for an object', () => {

        expect(X$props(obj)).toEqual(props);

    });

    it('is giving back empty array for undefined object', () => {

        expect(X$props(void 0)).toEqual([]);

    });

    it('is giving back empty array for null object', () => {

        expect(X$props(null)).toEqual([]);

    });

    it('is giving back empty array for undefined metas on object', () => {

        expect(X$props({})).toEqual([]);

    });

    it('is giving back empty array for null metas on object', () => {

        expect(X$props({[_metas_]: null})).toEqual([]);

    });

});


