const {sorted} = require('../test-utils');

const constructors = require('../../src/boot/archetypes');

describe('archetypes module', () => {

    const keys = sorted([

        'X$O',

        'X$Obj',
        'X$Nil',
        'X$Arr',
        'X$Fun',
        'X$Cst',

        'X$Err',

    ]);

    it('is frozen', () => {
        expect(Object.isFrozen(constructors)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(constructors[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(constructors).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof constructors[k]]).toEqual([k, 'function'])
        ));

    });

});


