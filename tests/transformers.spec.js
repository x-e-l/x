const transformers = require('../src/boot/transformers');

describe('transformers module', () => {

    const keys = [

        'X$ident',

        'X$2const',
        'X$obj2frz',

        'X$kv2ref',
        'X$vk2ref',

        'X$ref2k',
        'X$ref2v',

        'X$new2cst',

        'X$itr2set',
        'X$str2err',

    ].sort();

    it('is frozen', () => {
        expect(Object.isFrozen(transformers)).toBeTruthy();
    });

    it('exports all keys', () => {

        keys.map(k => (
            expect(transformers[k]).toBeDefined()
        ));

    });

    it('does not export extra keys', () => {

        expect(Object.keys(transformers).length).toEqual(keys.length)

    });

    it('exports are all of type function', () => {

        keys.map(k => (
            expect([k, typeof transformers[k]]).toEqual([k, 'function'])
        ));

    });

});


