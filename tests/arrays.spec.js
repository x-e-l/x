const {sorted} = require('./test-utils');

const arrays = require('../src/boot/arrays');

describe('arrays module', () => {

    const keys = sorted([

        'X$len',
        'X$first',
        'X$second',
        'X$last',

        'X$push',
        'X$unshift',
        'X$includes',

        'X$map',
        'X$reduce',

    ]);


    it('is frozen', () => {
        expect(Object.isFrozen(arrays)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(arrays[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(arrays).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof arrays[k]]).toEqual([k, 'function'])
        ));

    });

});


