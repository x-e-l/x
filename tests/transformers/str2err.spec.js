const {X$str2err} = require('../../src/transformers');

describe('transformers.str2err', () => {

    it('returns an Error object for a string', () => {

        expect(X$str2err('message') instanceof Error).toEqual(true);

    });

    it('returns an Error containing the string as a message', () => {

        expect(X$str2err('blah').message).toEqual('blah');

    });

    it('returns Error object for null', () => {

        expect(X$str2err(null) instanceof Error).toEqual(true);

    });

    it('returns Error object for undefined', () => {

        expect(X$str2err(void 0) instanceof Error).toEqual(true);

    });

});


