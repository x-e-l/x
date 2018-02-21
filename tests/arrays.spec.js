const arrays = require('../src/arrays');

describe('arrays module', () => {

    const keys = [

        'X$len',
        'X$first',
        'X$second',
        'X$last',

        'X$push',
        'X$unshift',
        'X$includes',

        'X$map',
        'X$reduce',

    ].sort();

    it('is frozen', () => {
        expect(Object.isFrozen(arrays)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(arrays[k]).toBeDefined()
        ));

    });

    it('are all of type function', () => {

        keys.map(k => (
            expect([k, typeof arrays[k]]).toEqual([k, 'function'])
        ));

    });

});


