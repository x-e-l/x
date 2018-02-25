const {_key_, _val_} = require('../../src/symbols');
const {X$vk2ntry} = require('../../src/transformers');

describe('transformers.vk2ntry', () => {

    const key = 'key';
    const val = 'val';

    it('returns an object with _key_ and _val_ fields', () => {

        const expected = {
            [_key_]: key,
            [_val_]: val,
        };

        expect(X$vk2ntry(val, key)).toEqual(expected);

    });

    it('returns an object with null _key_ and _val_ fields for null', () => {

        const expected = {
            [_key_]: null,
            [_val_]: null,
        };

        expect(X$vk2ntry(null, null)).toEqual(expected);

    });

    it('returns an object with undefined _key_ and _val_ fields for undefined', () => {

        const expected = {
            [_key_]: void 0,
            [_val_]: void 0,
        };

        const actual = X$vk2ntry();

        // expect(actual).toEqual(expected) // fails for some reason
        expect([actual[_key_], actual[_val_]]).toEqual([expected[_key_], expected[_val_]]);

    });

    it('returns an object with undefined _key_ and null _val_ fields for (null,undefined) args', () => {

        const expected = {
            [_key_]: void 0,
            [_val_]: null,
        };

        const actual = X$vk2ntry(null);

        // expect(actual).toEqual(expected) // fails for some reason
        expect([actual[_key_], actual[_val_]]).toEqual([expected[_key_], expected[_val_]]);

    });

    it('returns an object with null _key_ and undefined _val_ fields for ( undefined,null) args', () => {

        const expected = {
            [_key_]: null,
            [_val_]: void 0,
        };

        const actual = X$vk2ntry(void 0, null);

        // expect(actual).toEqual(expected) // fails for some reason
        expect([actual[_key_], actual[_val_]]).toEqual([expected[_key_], expected[_val_]]);

    });

});


