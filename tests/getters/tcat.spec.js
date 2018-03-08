const {_toses_, _metas_} = require('../../src/symbols');
const {X$tcat} = require('../../src/boot/getters');

describe('getters.tcat', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const toses = [a, b];

    const obj = {
        [_metas_]: {
            [_toses_]: toses
        }
    };

    it('adds proto at the end of the toses', () => {

        expect(X$tcat(obj, c)).toEqual([a, b, c]);

    });

    it('does not alter original toses array', () => {

        expect(X$tcat(obj, c)).toEqual([a, b, c]);
        expect(toses).toEqual([a, b]);

    });

    it('is giving back [item] for undefined object', () => {

        expect(X$tcat(void 0, b)).toEqual([b]);

    });

    it('is giving back [item] for null object', () => {

        expect(X$tcat(null, c)).toEqual([c]);

    });

    it('is giving back [item] for undefined toses array', () => {

        expect(X$tcat({}, b)).toEqual([b]);

    });

    it('is giving back [item] for null toses array', () => {

        expect(X$tcat({}, c)).toEqual([c]);

    });

    // TODO: @azder: test if it only adds functions
    // TODO: @azder: test if it works when _metas_ are nil
    // TODO: @azder: test if same function is added twice in a row

});


