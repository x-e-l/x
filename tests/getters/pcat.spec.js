const {_toses_, _metas_} = require('../../src/symbols');
const {X$pcat} = require('../../src/getters');

describe('getters.pcat', () => {

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

        expect(X$pcat(obj, c)).toEqual([a, b, c]);

    });

    it('does not alter original toses array', () => {

        expect(X$pcat(obj, c)).toEqual([a, b, c]);
        expect(toses).toEqual([a, b]);

    });

    it('is giving back [item] for undefined object', () => {

        expect(X$pcat(void 0, b)).toEqual([b]);

    });

    it('is giving back [item] for null object', () => {

        expect(X$pcat(null, c)).toEqual([c]);

    });

    it('is giving back [item] for undefined toses array', () => {

        expect(X$pcat({}, b)).toEqual([b]);

    });

    it('is giving back [item] for null toses array', () => {

        expect(X$pcat({}, c)).toEqual([c]);

    });

});


