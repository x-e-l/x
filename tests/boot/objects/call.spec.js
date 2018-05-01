const {_metas_, _call_} = require('../../../src/symbols');
const {X$call} = require('../../../src/boot/objects');

describe('objects.call', () => {

    it('returns the result of the _call_ function of the object called on that object', () => {

        const a = {a: 1};
        const b = {b: 2};

        const f = ($ => $.a.a + $.b.b);
        const metas = {[_call_]: f};

        const obj = {a, b, [_metas_]: metas};

        expect(X$call(obj)).toBe(3);

    });

    it.skip('returns appropriate non-empty object for null', () => {

        expect(X$call(null)).toBe(null);

    });

    it.skip('returns appropriate non-empty object for undefined', () => {

        expect(X$call()).toBe(void 0);

    });

});


