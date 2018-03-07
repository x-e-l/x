const {_metas_, _props_, _key_, _val_} = require('../../src/symbols');
const {X$nset} = require('../../src/boot/setters');

describe('setters.nset', () => {

    it('modifies the original object properties', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const d = {d: 4};
        const e = {e: 5};

        const obj = {
            a, b, c,
            [_metas_]: {[_props_]: ['a', 'b', 'c']},
        };

        const actual1 = X$nset(obj, {[_key_]: 'a', [_val_]: d});
        const expected1props = ['a', 'b', 'c'];
        const expected1 = {a: d, b, c, [_metas_]: {[_props_]: expected1props}};

        expect(actual1).toEqual(expected1);

        const actual2 = X$nset(actual1, {[_key_]: 'e', [_val_]: e});
        const expected2props = ['a', 'b', 'c', 'e'];
        const expected2 = {a: d, b, c, e, [_metas_]: {[_props_]: expected2props}};

        expect(actual2).toEqual(expected2);

    });

    it('modifies the original object props array', () => {

        const a = {a: 1};
        const b = {b: 2};
        const c = {c: 3};

        const props = ['a', 'b'];
        const metas = {[_props_]: props};

        const obj = {a, b, [_metas_]: metas};


        const actual1 = X$nset(obj, {[_key_]: 'c', [_val_]: c});
        const expected1props = ['a', 'b', 'c'];
        const expected1 = {a, b, c, [_metas_]: {[_props_]: expected1props}};

        expect(actual1).toEqual(expected1);


        const actual2 = X$nset(actual1, {[_key_]: 'a', [_val_]: c});
        const expected2props = ['a', 'b', 'c'];
        const expected2 = {a: c, b, c, [_metas_]: {[_props_]: expected2props}};

        expect(actual2).toEqual(expected2);

    });

    it('returns null for null object', () => {
        expect(X$nset(null, 'a')).toBe(null);
    });

    it('returns undefined for undefined object', () => {
        expect(X$nset(void 0, 'a')).toBe(void 0);
    });

    it.skip('returns Err object for null key', () => {
        expect(X$nset({}, null));
    });

    it.skip('returns Err object for undefined key', () => {
        expect(X$nset({}, void 0));
    });


});


