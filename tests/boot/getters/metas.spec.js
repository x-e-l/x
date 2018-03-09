const {_toses_, _metas_, _call_} = require('../../../src/symbols');
const {X$metas} = require('../../../src/boot/getters');

describe('getters.metas', () => {

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

    it('returns metas for an object', () => {

        expect(X$metas(obj)).toEqual(metas);

    });

    it('is giving back empty metas object for undefined object', () => {

        expect(X$metas(void 0)).toEqual({});

    });

    it('is giving back empty metas object for null object', () => {

        expect(X$metas(null)).toEqual({});

    });

    it('is giving back empty metas for undefined metas on object', () => {

        expect(X$metas({})).toEqual({});

    });

    it('is giving back empty metas for null metas on object', () => {

        expect(X$metas({[_metas_]: null})).toEqual({});

    });

});


