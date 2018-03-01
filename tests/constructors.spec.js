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

    it('does not export extra keys', () => {

        expect(Object.keys(constructors).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof constructors[k]]).toEqual([k, 'function'])
        ));

    });

});


