const {sorted} = require('./test-utils');

const functions = require('../src/boot/functions');

describe('functions module', () => {

    const keys = sorted([

        'X$call',
        'X$bind',

    ]);

    it('is frozen', () => {
        expect(Object.isFrozen(functions)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(functions[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(functions).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof functions[k]]).toEqual([k, 'function'])
        ));

    });

});


