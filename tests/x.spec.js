/** Created by azder on 2018-02-20. */
const X$ = require('../src/x');

describe('symbols in X$', () => {


    it('is frozen', () => {
        expect(Object.isFrozen(X$)).toBeTruthy();
    });

    it('does not nullify own properties', () => {

        Object.keys(X$).map(key => {
            X$[key] = null;
            expect([key, X$[key]]).not.toEqual([key, null]);
        });

    });


});
