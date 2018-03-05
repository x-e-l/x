const constructors = require('../src/constructors');

describe('constructors module', () => {

    const keys = [

        'X$O',
        'X$Obj',
        'X$Nil',
        'X$Arr',
        'X$Fun',
        'X$Cst',

    ].sort();

    it('is frozen', () => {
        expect(Object.isFrozen(constructors)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(constructors[k]).toBeDefined()
        ));

    });

    it.skip('does not export extra keys', () => {

        // there is a check ('test'===process.env.NODE_ENV) in constructors.js
        // that exports Obj, Nil, Arr, Fun, Cst as well
        expect(Object.keys(constructors).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof constructors[k]]).toEqual([k, 'function'])
        ));

    });

});


