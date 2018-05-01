const {_toses_, _metas_} = require('../../../src/symbols');
const {X$tcat} = require('../../../src/boot/getters');

describe('getters.tcat', () => {

    const a = $ => 1; // eslint-disable-line no-unused-vars
    const b = $ => 2; // eslint-disable-line no-unused-vars
    const c = $ => 3; // eslint-disable-line no-unused-vars

    const toses = [a, b];

    const obj = {
        [_metas_]: {
            [_toses_]: toses,
        },
    };

    it('adds proto at the end of the toses', () => {

        expect(X$tcat(obj, c)).toEqual([a, b, c]);

    });

    it('does not alter original toses array', () => {

        expect(X$tcat(obj, c)).toEqual([a, b, c]);
        expect(toses).toEqual([a, b]);

    });

    it('adds only functions', () => {

        expect(X$tcat(obj, 1)).toEqual([a, b]);
        expect(X$tcat(obj, false)).toEqual([a, b]);
        expect(X$tcat(obj, {})).toEqual([a, b]);

    });

    it('does not add the same function twice in a row', () => {

        expect(X$tcat(obj, c)).toEqual([a, b, c]);
        expect(X$tcat(obj, c)).toEqual([a, b, c]);
        expect(X$tcat(obj, c)).toEqual([a, b, c]);

    });

    it('is giving back [item] for undefined object', () => {

        expect(X$tcat(void 0, c)).toEqual([c]);

    });

    it('is giving back [item] for null object', () => {

        expect(X$tcat(null, c)).toEqual([c]);

    });

    it('is giving back [item] for undefined metas object', () => {

        expect(X$tcat({}, c)).toEqual([c]);

    });

    it('is giving back [item] for null metas object', () => {

        expect(X$tcat({}, c)).toEqual([c]);

    });

    it('is giving back [item] for undefined toses array', () => {

        expect(X$tcat({[_metas_]: {}}, c)).toEqual([c]);

    });

    it('is giving back [item] for null toses array', () => {

        expect(X$tcat({[_metas_]: null}, c)).toEqual([c]);

    });

});


