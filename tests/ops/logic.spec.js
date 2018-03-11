const {sorted} = require('../test-utils');

const logic = require('../../src/ops/logic');


describe('operators.logic', () => {

    const keys = sorted([

        'X$bn',
        'X$ba',
        'X$bo',
        'X$bx',
        'X$bq',

    ]);

    it('is frozen', () => {
        expect(Object.isFrozen(logic)).toBeTruthy();
    });

    it('own properties can not be nullified', () => {

        Object.keys(logic).map(key => {
            logic[key] = null;
            expect([key, logic[key]]).not.toEqual([key, null]);
        });

    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(logic[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(logic).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof logic[k]]).toEqual([k, 'function'])
        ));

    });

});
