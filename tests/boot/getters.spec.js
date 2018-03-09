const {sorted} = require('../test-utils');

const getters = require('../../src/boot/getters');

describe('getters module', () => {

    const keys = sorted([

        'X$pget',
        'X$pown',

        'X$mget',
        'X$mown',

        'X$tcat',

        'X$metas',
        'X$toses',
        'X$props',

        'X$callf',
        'X$2strf',
        'X$2lenf',

    ]);

    it('is frozen', () => {
        expect(Object.isFrozen(getters)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(getters[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(getters).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof getters[k]]).toEqual([k, 'function'])
        ));

    });

});


