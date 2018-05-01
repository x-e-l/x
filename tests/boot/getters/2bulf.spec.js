const {_metas_, _2bul_} = require('../../../src/symbols');
const {X$2bulf} = require('../../../src/boot/getters');

describe('getters.2bulf', () => {

    const a = {a: 1};
    const b = {b: 2};
    const c = {c: 3};

    const tobul = $ => ($ && $.a && $.b && $.c);

    const obj1 = {
        a, b,
        [_metas_]: {
            [_2bul_]: tobul,
        },
    };

    const obj2 = {
        a, b, c,
        [_metas_]: {
            [_2bul_]: tobul,
        },
    };

    it('returns the registered function to be used for converting an object to string', () => {

        expect(X$2bulf(obj1)).toEqual(tobul);
        expect(X$2bulf(obj2)).toEqual(tobul);

    });

    it('is giving back function for undefined object', () => {

        expect(typeof X$2bulf(void 0)).toBe('function');

    });

    it('is giving back function for null object', () => {

        expect(typeof X$2bulf(null)).toBe('function');

    });

    it('is giving back function for undefined metas on object', () => {

        expect(typeof X$2bulf({}, b)).toBe('function');

    });

    it('is giving back function for null metas on object', () => {

        expect(typeof X$2bulf({[_metas_]: null})).toEqual('function');

    });


    describe('returns the registered 2bul function for an object', () => {

        const bul = X$2bulf(obj1);

        it('in turn when called with an object, returns its result', () => {

            expect(X$2bulf(obj1)(obj1)).toBeFalsy();
            expect(X$2bulf(obj2)(obj2)).toBeTruthy();

        });

        it('in turn when called with undefined object, returns falsy', () => {

            expect(bul(void 0)).toBeFalsy();

        });

        it('in turn when called with null objectm returns falsy', () => {

            expect(bul(null)).toBeFalsy();

        });

    });


    describe('returns default 2bul function for null object', () => {

        const bul = X$2bulf(null);

        it('in turn when called with undefined object returns false boolean', () => {

            expect(bul(void 0)).toBe(false);

        });

        it('in turn when called with null object returns false boolean', () => {

            expect(bul(null)).toBe(false);

        });

    });


    describe('returns default 2bul function for undefined object', () => {

        const bul = X$2bulf();

        it('in turn when called with undefined object returns false boolean', () => {

            expect(bul(void 0)).toBe(false);

        });

        it('in turn when called with null object returns false boolean', () => {

            expect(bul(null)).toBe(false);

        });

    });


    // TODO: @azder: maybe bulf returned from X$2bulf() should always return boolean

});


