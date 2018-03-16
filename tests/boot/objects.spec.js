const {sorted} = require('../test-utils');

const objects = require('../../src/boot/objects');

describe('objects module', () => {


    const keys = sorted([

        'X$df',
        'X$2str',
        'X$2bul',

    ]);


    it('is frozen', () => {
        expect(Object.isFrozen(objects)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(objects[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(objects).sort()).toEqual(keys);
        expect(Object.keys(objects).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof objects[k]]).toEqual([k, 'function'])
        ));

    });

});


