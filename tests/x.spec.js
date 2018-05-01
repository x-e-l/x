/** Created by azder on 2018-02-20. */

const {sorted} = require('./test-utils');

const X$ = require('../src/x');

const boot = require('../src/boot');
const bul = require('../src/csts/bul');
const logic = require('../src/ops/logic');

describe('X$', () => {


    it('is frozen', () => {
        expect(Object.isFrozen(X$)).toBeTruthy();
    });

    it('own properties can not be nullified', () => {

        Object.keys(X$).map(key => {
            X$[key] = null;
            expect([key, X$[key]]).not.toEqual([key, null]);
        });

    });

    it('re-exports exactly the keys from the constituent modules', () => {

        const concatenated = sorted([].concat(
            Object.keys(boot),
            Object.keys(bul),
            Object.keys(logic),
        ));

        const keys = sorted(Object.keys(X$));

        expect(keys).toEqual(concatenated);

    });

});
