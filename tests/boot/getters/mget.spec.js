const {_toses_, _metas_, _call_} = require('../../../src/symbols');
const {X$mget} = require('../../../src/boot/getters');

describe('getters.mget', () => {

    const a = {a: 1};
    const b = {b: 2};

    const toses = [a, b];
    const call = $ => $;

    const metas = {
        [_toses_]: toses,
        [_call_]:  call,
    };

    const obj = {
        [_metas_]: metas,
    };

    it('returns the proper meta values per their keys for an object', () => {

        expect(X$mget(obj, _toses_)).toEqual(toses);
        expect(X$mget(obj, _call_)).toEqual(call);

    });

    it('is giving back undefined meta properties for undefined object', () => {

        expect(X$mget(void 0, _toses_)).toEqual(void 0);
        expect(X$mget(void 0, _call_)).toEqual(void 0);

    });

    it('is giving back null meta properties for null object', () => {

        expect(X$mget(null, _toses_)).toEqual(null);
        expect(X$mget(null, _call_)).toEqual(null);

    });

    it('is giving back undefined meta value for undefined meta key', () => {

        expect(X$mget(obj)).toEqual(void 0);
        expect(X$mget(obj, void 0)).toEqual(void 0);

    });

    it('is giving back null meta value for null meta key', () => {

        expect(X$mget(obj, null)).toEqual(null);

    });

});


