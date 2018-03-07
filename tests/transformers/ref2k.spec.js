const {_key_, _val_} = require('../../src/symbols');
const {X$ref2k} = require('../../src/boot/transformers');

describe('transformers.ref2k', () => {

    it('returns the _key_ of an object with _key_ field', () => {

        const key = 'key';
        const val = 'val';

        const ref = {
            [_key_]: key,
            [_val_]: val,
        };

        expect(X$ref2k(ref)).toEqual(key);

    });

    it('returns null for an object with null _key_ field', () => {

        const ref = {
            [_key_]: null,
            [_val_]: null,
        };

        expect(X$ref2k(ref)).toEqual(null);

    });

    it('returns undefined for an object with undefined _key_ field', () => {

        const ref = {
            [_key_]: void 0,
            [_val_]: void 0,
        };

        expect(X$ref2k(ref)).toEqual(void 0);

    });

    it('returns undefined for dummy object', () => {

        const dummy = {};

        expect(X$ref2k(dummy)).toEqual(void 0);

    });

    it('returns undefined for the rest of the standard js falsy values', () => {

        expect(X$ref2k(NaN)).toEqual(void 0);
        expect(X$ref2k(0)).toEqual(void 0);
        expect(X$ref2k('')).toEqual(void 0);
        expect(X$ref2k(false)).toEqual(void 0);

    });


});


