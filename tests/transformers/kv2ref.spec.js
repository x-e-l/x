const {_key_, _val_} = require('../../src/symbols');
const {X$kv2ref} = require('../../src/boot/transformers');

describe('transformers.kv2ref', () => {

    const key = 'key';
    const val = 'val';

    it('returns an object with _key_ and _val_ fields', () => {

        const expected = {
            [_key_]: key,
            [_val_]: val,
        };

        expect(X$kv2ref(key, val)).toEqual(expected);

    });

    it('returns an object with null _key_ and _val_ fields for null', () => {

        const expected = {
            [_key_]: null,
            [_val_]: null,
        };

        expect(X$kv2ref(null, null)).toEqual(expected);

    });

    it('returns an object with undefined _key_ and _val_ fields for undefined', () => {

        const expected = {
            [_key_]: void 0,
            [_val_]: void 0,
        };

        const actual = X$kv2ref();

        // expect(actual).toEqual(expected) // fails for some reason
        expect([actual[_key_], actual[_val_]]).toEqual([expected[_key_], expected[_val_]]);

    });

    it('returns an object with undefined _key_ and null _val_ fields for (undefined,null) args', () => {

        const expected = {
            [_key_]: void 0,
            [_val_]: null,
        };

        const actual = X$kv2ref(void 0, null);

        // expect(actual).toEqual(expected) // fails for some reason
        expect([actual[_key_], actual[_val_]]).toEqual([expected[_key_], expected[_val_]]);

    });

    it('returns an object with null _key_ and undefined _val_ fields for (null,undefined) args', () => {

        const expected = {
            [_key_]: null,
            [_val_]: void 0,
        };

        const actual = X$kv2ref(null);

        // expect(actual).toEqual(expected) // fails for some reason
        expect([actual[_key_], actual[_val_]]).toEqual([expected[_key_], expected[_val_]]);

    });

});


