const {X$pget} = require('../../src/getters');

describe('getters.pget', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const obj = {a, b, c};

    it('returns the property value of an object', () => {

        expect(X$pget(obj, 'a')).toEqual(obj.a);
        expect(X$pget(obj, 'b')).toEqual(obj.b);
        expect(X$pget(obj, 'c')).toEqual(obj.c);

    });

    it('returns null for null object', () => {
        expect(X$pget(null, 'a')).toBe(null);
    });

    it('returns undefined for undefined object', () => {
        expect(X$pget(void 0, 'a')).toBe(void 0);
    });

    it.skip('returns Err object for null key', () => {
        expect(X$pget(obj, null));
    });

    it.skip('returns Err object for undefined key', () => {
        expect(X$pget(obj, void 0));
    });


});


