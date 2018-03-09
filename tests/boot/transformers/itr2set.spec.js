const {X$itr2set} = require('../../../src/boot/transformers');

describe('transformers.itr2set', () => {

    it('returns a Set object for an iterable (array)', () => {

        expect(X$itr2set([1, 2, 3, 4]) instanceof Set).toEqual(true);

    });

    it('returns a Set containing the elements of the iterable', () => {

        const set = X$itr2set([1, 2, 3, 4]);
        const itr = set.values();

        expect(itr.next().value).toEqual(1);
        expect(itr.next().value).toEqual(2);
        expect(itr.next().value).toEqual(3);
        expect(itr.next().value).toEqual(4);

    });

    it('returns a Set containing no duplicate elements of the iterable', () => {

        const set = X$itr2set([1, 2, 1, 2]);
        const itr = set.values();

        expect(itr.next().value).toEqual(1);
        expect(itr.next().value).toEqual(2);
        expect(itr.next().value).toEqual(void 0);
        expect(itr.next().value).toEqual(void 0);

    });

    it('returns empty Set for null', () => {

        expect(X$itr2set(null).size).toEqual(0);

    });

    it('returns empty Set for undefined', () => {

        expect(X$itr2set(void 0).size).toEqual(0);

    });

});


