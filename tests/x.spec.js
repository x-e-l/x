/** Created by azder on 2018-02-20. */
const X$ = require('../src/x');

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


});
