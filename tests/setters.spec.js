const setters = require('../src/boot/setters');

describe('setters module', () => {

    const keys = [

        'X$pset',
        'X$mset',
        'X$nset',
        'X$tadd',
        'X$preg',

    ].sort();

    it('is frozen', () => {
        expect(Object.isFrozen(setters)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(setters[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(setters).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof setters[k]]).toEqual([k, 'function'])
        ));

    });

});


