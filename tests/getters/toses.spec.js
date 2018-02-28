const {_toses_, _metas_, _call_} = require('../../src/symbols');
const {X$toses} = require('../../src/getters');

describe('getters.toses', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const toses = [a, b];
    const call = $ => $;

    const metas = {
        [_toses_]: toses,
        [_call_]:  call,
    };

    const obj = {
        [_metas_]: metas,
    };

    it('returns toses for an object', () => {

        expect(X$toses(obj)).toEqual(toses);

    });

    it('is giving back empty toses array for undefined object', () => {

        expect(X$toses(void 0)).toEqual([]);

    });

    it('is giving back empty toses array for null object', () => {

        expect(X$toses(null)).toEqual([]);

    });

    it('is giving back empty toses for undefined metas on object', () => {

        expect(X$toses({}, b)).toEqual([]);

    });

    it('is giving back empty toses for null metas on object', () => {

        expect(X$toses({[_metas_]: null}, c)).toEqual([]);

    });

});


