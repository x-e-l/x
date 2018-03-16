const {_metas_, _atype_, _nil_, _2str_} = require('../../../src/symbols');
const {X$mset} = require('../../../src/boot/setters');

describe('setters.mset', () => {

    it('modifies the original object meta properties', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {a, b, c, [_metas_]: null};

        const actual1 = X$mset(obj, 'd', d);
        const expected1 = {a, b, c, [_metas_]: {d}};

        expect(actual1).toEqual(expected1);

        const actual2 = X$mset(actual1, 'd', e);
        const expected2 = {a, b, c, [_metas_]: {d: e}};

        expect(actual2).toEqual(expected2);

    });

    it('returns null for null object', () => {

        expect(X$mset(null, 'a')).toBe(null);

    });

    it('returns undefined for undefined object', () => {

        expect(X$mset(void 0, 'a')).toBe(void 0);

    });

    it.skip('throws error for trying to modify Nil object', () => {

        const obj = {
            [_metas_]: {
                [_atype_]: _nil_,
                [_2str_]:  () => 'actual Nil object'
            }
        };

        expect(
            () => X$mset(obj)
        ).toThrow(
            /^X-NILMOD: X\$mset\(actual Nil object,_\)/
        );

    });

    it('throws error for null key', () => {

        expect(
            () => X$mset({}, null)
        ).toThrow(
            /^X-NILKEY: X\$mset\(_,null\)/
        );

    });

    it('throws error for undefined key', () => {

        expect(
            () => X$mset({})
        ).toThrow(
            /^X-NILKEY: X\$mset\(_,undefined\)/
        );

    });


});


