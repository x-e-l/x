const {_metas_, _2str_} = require('../../../src/symbols');
const {X$2str} = require('../../../src/boot/objects');

describe('objects.2str', () => {

    const symbol = '⦰';

    it('returns the result of the _2str_ function of the object called on that object', () => {

        const a = {a: 1};
        const b = {b: 2};

        const str = ($ => `*** ${ Object.keys($) } ***`);
        const metas = {[_2str_]: str};

        const obj = {a, b, [_metas_]: metas};

        expect(X$2str(obj)).toBe('*** a,b ***');

    });

    it('returns appropriate non-empty string for null object', () => {

        expect(X$2str(null)).toBe(`${symbol}(null)${symbol}`);

    });

    it('returns appropriate non-empty string for undefined object', () => {

        expect(X$2str()).toBe(`${symbol}(undefined)${symbol}`);

    });

});


