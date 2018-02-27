const {_toses_, _metas_, _call_, _key_, _val_} = require('../../src/symbols');
const {X$mown} = require('../../src/getters');

describe('getters.mown', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};
    const d = {d: 4};

    const toses = [a, b];
    const call = $ => $;

    const metas = {
        [_toses_]: toses,
        [_call_]:  call,
    };

    const obj = {
        [_metas_]: metas,
        c,
        d,
    };

    it('returns all the meta values for an object', () => {

        const expected = [
            {
                [_key_]: _toses_,
                [_val_]: toses,
            },
            {
                [_key_]: _call_,
                [_val_]: call,
            },
        ];

        expect(X$mown(obj)).toEqual(expected);

    });

    it('is giving back empty array for undefined object', () => {

        expect(X$mown()).toEqual([]);
        expect(X$mown(void 0)).toEqual([]);

    });

    it('is giving back empty array for null object', () => {

        expect(X$mown(null)).toEqual([]);

    });

});


