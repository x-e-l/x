const {_key_, _val_} = require('../../src/symbols');
const {X$ntry2k} = require('../../src/transformers');

describe('transformers.ntry2k', () => {

    it('returns the _key_ of an object with _key_ field', () => {

        const key = 'key';
        const val = 'val';

        const ntry = {
            [_key_]: key,
            [_val_]: val,
        };

        expect(X$ntry2k(ntry)).toEqual(key);

    });

    it('returns null for an object with null _key_ field', () => {

        const ntry = {
            [_key_]: null,
            [_val_]: null,
        };

        expect(X$ntry2k(ntry)).toEqual(null);

    });

    it('returns undefined for an object with undefined _key_ field', () => {

        const ntry = {
            [_key_]: void 0,
            [_val_]: void 0,
        };

        expect(X$ntry2k(ntry)).toEqual(void 0);

    });

    it('returns undefined for dummy object', () => {

        const dummy = {};

        expect(X$ntry2k(dummy)).toEqual(void 0);

    });

    it('returns undefined for the rest of the standard js falsy values', () => {

        expect(X$ntry2k(NaN)).toEqual(void 0);
        expect(X$ntry2k(0)).toEqual(void 0);
        expect(X$ntry2k('')).toEqual(void 0);
        expect(X$ntry2k(false)).toEqual(void 0);

    });


});


