const {sorted} = require('../test-utils');

const stringers = require('../../src/boot/stringers');

describe('stringers module', () => {

    const keys = sorted([

        'X$obj2str',
        'X$arr2str',
        'X$fun2str',
        'X$nil2str',
        'X$cst2str',

    ]);

    it('is frozen', () => {
        expect(Object.isFrozen(stringers)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(stringers[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(stringers).length).toEqual(keys.length);

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof stringers[k]]).toEqual([k, 'function'])
        ));

    });

});


