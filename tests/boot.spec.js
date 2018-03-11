const {sorted} = require('./test-utils');


const boot = require('../src/boot');

const symbols = require('../src/symbols');

const arrays = require('../src/boot/arrays');
const constructors = require('../src/boot/archetypes');
const functions = require('../src/boot/functions');
const getters = require('../src/boot/getters');
const objects = require('../src/boot/objects');
const predicates = require('../src/boot/predicates');
const setters = require('../src/boot/setters');
const stringers = require('../src/boot/stringers');
const transformers = require('../src/boot/transformers');


describe('boot', () => {


    it('is frozen', () => {
        expect(Object.isFrozen(boot)).toBeTruthy();
    });

    it('own properties can not be nullified', () => {

        Object.keys(boot).map(key => {
            boot[key] = null;
            expect([key, boot[key]]).not.toEqual([key, null]);
        });

    });

    it('re-exports exactly the keys from the constituent modules', () => {

        const concatenated = sorted([].concat(
            // top
            Object.keys(symbols),
            // boot
            Object.keys(arrays),
            Object.keys(constructors),
            Object.keys(functions),
            Object.keys(getters),
            Object.keys(objects),
            Object.keys(predicates),
            Object.keys(setters),
            Object.keys(stringers),
            Object.keys(transformers),
        ));

        const keys = sorted(Object.keys(boot));

        expect(keys).toEqual(concatenated)

    })

});
