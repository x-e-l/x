const {sorted} = require('./test-utils');

const predicates = require('../src/boot/predicates');

describe('predicates module', () => {

    const keys = sorted([

        'X$isx',

        'X$isnil',
        'X$isarr',
        'X$isfun',
        'X$iscst',
        'X$isobj',

    ]);

    it('is frozen', () => {
        expect(Object.isFrozen(predicates)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(predicates[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(predicates).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof predicates[k]]).toEqual([k, 'function'])
        ));

    });

});


