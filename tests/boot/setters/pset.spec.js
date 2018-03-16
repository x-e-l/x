const {_metas_, _props_, _atype_, _nil_, _2str_} = require('../../../src/symbols');
const {X$pset} = require('../../../src/boot/setters');

describe('setters.pset', () => {

    it('modifies the original object properties', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {a, b, c, [_metas_]: {[_props_]: ['a', 'b', 'c']}};

        const actual1 = X$pset(obj, 'a', d);
        const expected1 = {
            a:         d,
            b,
            c,
            [_metas_]: {[_props_]: ['a', 'b', 'c']},
        };

        expect(actual1).toEqual(expected1);

        const actual2 = X$pset(actual1, 'e', e);
        const expected2 = {
            a:         d,
            b,
            c,
            e,
            [_metas_]: {[_props_]: ['a', 'b', 'c', 'e']},
        };

        expect(actual2).toEqual(expected2);

    });

    it('modifies the original object props array', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const props = ['a', 'b'];
        const metas = {[_props_]: props};

        const obj = {a, b, [_metas_]: metas};


        const actual1 = X$pset(obj, 'c', c);
        const expected1props = ['a', 'b', 'c'];
        const expected1 = {a, b, c, [_metas_]: {[_props_]: expected1props}};

        expect(actual1).toEqual(expected1);


        const actual2 = X$pset(actual1, 'a', c);
        const expected2props = ['a', 'b', 'c'];
        const expected2 = {a: c, b, c, [_metas_]: {[_props_]: expected2props}};

        expect(actual2).toEqual(expected2);

    });

    it('returns null for null object', () => {

        expect(X$pset(null, 'a')).toBe(null);

    });

    it('returns undefined for undefined object', () => {

        expect(X$pset(void 0, 'a')).toBe(void 0);

    });

    it('throws error for trying to modify Nil object', () => {

        const obj = {
            [_metas_]: {
                [_atype_]: _nil_,
                [_2str_]:  () => 'actual Nil object'
            }
        };

        expect(
            () => X$pset(obj)
        ).toThrow(
            /^X-NILMOD: X\$pset\(actual Nil object,_\)/
        );

    });

    it('throws error for null key', () => {

        expect(
            () => X$pset({}, null)
        ).toThrow(
            /^X-NILKEY: X\$pset\(_,null\)/
        );

    });

    it('throws error for undefined key', () => {

        expect(
            () => X$pset({})
        ).toThrow(
            /^X-NILKEY: X\$pset\(_,undefined\)/
        );

    });


});


