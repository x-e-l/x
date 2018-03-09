const {X$new2fun} = require('../../../src/boot/transformers');

describe('transformers.new2cst', () => {

    it('for null, returns constant function that always returns null', () => {

        const cst = X$new2fun(null);

        expect(typeof cst).toBe('function');
        expect(cst.length).toEqual(1);

        expect(cst()).toEqual(null);
        expect(cst(1)).toEqual(null);
        expect(cst('asdf')).toEqual(null);
        expect(cst({})).toEqual(null);
        expect(cst([])).toEqual(null);

    });

    it('for undefined, returns constant function that always returns undefined', () => {

        const cst = X$new2fun(void 0);

        expect(typeof cst).toBe('function');
        expect(cst.length).toEqual(1);

        expect(cst()).toEqual(void 0);
        expect(cst(1)).toEqual(void 0);
        expect(cst('asdf')).toEqual(void 0);
        expect(cst({})).toEqual(void 0);
        expect(cst([])).toEqual(void 0);

    });

});


