const {_toses_, _metas_, _call_, _props_, _key_, _val_} = require('../../src/symbols');
const {X$pown} = require('../../src/getters');

describe('getters.pown', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};
    const d = {d: 4};
    const e = {e: 5};

    const toses = [a, b];
    const call = $ => $;

    const metas = {
        [_toses_]: toses,
        [_call_]:  call,
        [_props_]: ['c', 'e'],
    };

    const obj = {
        [_metas_]: metas,
        c,
        d,
        e,
    };

    it('returns all the registered property values for an object', () => {

        const expected = [
            {
                [_key_]: 'c',
                [_val_]: c,
            },
            {
                [_key_]: 'e',
                [_val_]: e,
            },
        ];

        expect(X$pown(obj)).toEqual(expected);

    });

    it('ignores the unregistered property values of an object', () => {

        expect(X$pown(obj).filter(ntry => 'd' === ntry[_key_])).toEqual([]);

    });

    it('is giving back empty array for undefined object', () => {

        expect(X$pown()).toEqual([]);
        expect(X$pown(void 0)).toEqual([]);

    });

    it('is giving back empty array for null object', () => {

        expect(X$pown(null)).toEqual([]);

    });

});


