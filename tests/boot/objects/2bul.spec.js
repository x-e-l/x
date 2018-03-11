const {_metas_, _2bul_} = require('../../../src/symbols');
const {X$2bul} = require('../../../src/boot/objects');

describe('objects.2bul', () => {

    it('returns the result of the _2bul_ function of the object called on that object', () => {

        const a = {a: 0};
        const b = {b: 1};

        expect(X$2bul({a, b, [_metas_]: {[_2bul_]: $ => $.a && $.b}})).toBe(b);
        expect(X$2bul({a, b, [_metas_]: {[_2bul_]: $ => $.a || $.b}})).toBe(a);

    });

    it('returns false function for null object', () => {

        expect(X$2bul(null)).toBe(false);

    });

    it('returns false function for undefined object', () => {

        expect(X$2bul()).toBe(false);

    });

    // TODO: @azder: maybe X$2bul should always return boolean

});


