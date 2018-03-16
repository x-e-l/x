const {sorted} = require('../test-utils');

const reflect = require('../../src/ops/misc');


describe('operators.misc', () => {

    const keys = sorted([

        'X$df',

    ]);

    it('is frozen', () => {
        expect(Object.isFrozen(reflect)).toBeTruthy();
    });

    it('own properties can not be nullified', () => {

        Object.keys(reflect).map(key => {
            reflect[key] = null;
            expect([key, reflect[key]]).not.toEqual([key, null]);
        });

    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(reflect[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(reflect).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof reflect[k]]).toEqual([k, 'function'])
        ));

    });

});
