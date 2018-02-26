const {_key_, _val_} = require('../../src/symbols');
const {X$ntry2v} = require('../../src/transformers');

describe('transformers.ntry2v', () => {

    it('returns the _val_ of an object with _val_ field', () => {

        const key = 'key';
        const val = 'val';

        const ntry = {
            [_key_]: key,
            [_val_]: val,
        };

        expect(X$ntry2v(ntry)).toEqual(val);

    });

    it('returns null for an object with null _val_ field', () => {

        const ntry = {
            [_key_]: null,
            [_val_]: null,
        };

        expect(X$ntry2v(ntry)).toEqual(null);

    });

    it('returns undefined for an object with undefined _val_ field', () => {

        const ntry = {
            [_key_]: void 0,
            [_val_]: void 0,
        };

        expect(X$ntry2v(ntry)).toEqual(void 0);

    });

    it('returns undefined for dummy object', () => {

        const dummy = {};

        expect(X$ntry2v(dummy)).toEqual(void 0);

    });

    it('returns undefined for the rest of the standard js falsy values', () => {

        expect(X$ntry2v(NaN)).toEqual(void 0);
        expect(X$ntry2v(0)).toEqual(void 0);
        expect(X$ntry2v('')).toEqual(void 0);
        expect(X$ntry2v(false)).toEqual(void 0);

    });


});


