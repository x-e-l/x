const {_metas_, _toses_} = require('../../../src/symbols');
const {X$tadd} = require('../../../src/boot/setters');

describe('setters.tadd', () => {

    it('modifies the original object prototype array', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {a, b, [_metas_]: {[_toses_]: [c]}};

        const actual1 = X$tadd(obj, d);
        const expected1 = {a, b, [_metas_]: {[_toses_]: [c, d]}};

        expect(actual1).toEqual(expected1);

        const actual2 = X$tadd(actual1, e);
        const expected2 = {a, b, [_metas_]: {[_toses_]: [c, d, e]}};

        expect(actual2).toEqual(expected2);

    });

    it('adds only functions', () => {

        const a = {a: 1};
        const b = {b: 2};

        const toses = [];

        const obj = {a, b, [_metas_]: {[_toses_]: toses}};
        const res = {a, b, [_metas_]: {[_toses_]: toses}};

        expect(X$tadd(obj, 1)).toEqual(res);
        expect(X$tadd(obj, false)).toEqual(res);
        expect(X$tadd(obj, {})).toEqual(res);

    });

    it('works when _metas_ or _toses_ are nil', () => {

        const a = {a: 1};
        const b = {b: 2};

        const f = $ => $;
        const g = () => 8;

        const obj1 = {a, b};
        const res1 = {a, b, [_metas_]: {[_toses_]: [f]}};

        expect(X$tadd(obj1, f)).toEqual(res1);

        const obj2 = {a, b, [_metas_]: {}};
        const res2 = {a, b, [_metas_]: {[_toses_]: [g]}};

        expect(X$tadd(obj2, g)).toEqual(res2);

    });

    it('does not add the same function twice in a row', () => {

        const a = {a: 1};
        const b = {b: 2};

        const f = $ => $;

        const obj1 = {a, b, [_metas_]: {[_toses_]: [f]}};
        const res1 = {a, b, [_metas_]: {[_toses_]: [f]}};

        expect(X$tadd(obj1, f)).toEqual(res1);

        const res2 = {a, b, [_metas_]: {[_toses_]: [f]}};

        expect(X$tadd(obj1, f)).toEqual(res2);

    });

    it('returns null for null object', () => {

        expect(X$tadd(null, 'a')).toBe(null);

    });

    it('returns undefined for undefined object', () => {

        expect(X$tadd(void 0, 'a')).toBe(void 0);

    });


});


