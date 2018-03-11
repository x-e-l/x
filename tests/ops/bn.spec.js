const {_metas_, _2bul_} = require('../../src/symbols');
const {X$bn} = require('../../src/ops/logic');


describe('logic.bn', () => {

    it('returns true object for object with _2bul_ that returns false', () => {

        const obj = {[_metas_]: {[_2bul_]: () => false}};
        const tobul = X$bn(obj)[_metas_][_2bul_];

        expect(tobul()).toBe(true);

    });

    it('returns false object for object with _2bul_ that returns true', () => {

        const obj = {[_metas_]: {[_2bul_]: () => true}};
        const tobul = X$bn(obj)[_metas_][_2bul_];

        expect(tobul()).toBe(false);

    });


    it('returns true object for for undefined', () => {

        expect(X$bn()[_metas_][_2bul_]()).toBe(true);

    });

    it('returns true object for null', () => {

        expect(X$bn(null)[_metas_][_2bul_]()).toBe(true);

    });

    it('returns false object for empty object', () => {

        expect(X$bn({})[_metas_][_2bul_]()).toBe(false);

    });

    it('returns true object for empty string', () => {

        expect(X$bn('')[_metas_][_2bul_]()).toBe(true);

    });

    it('returns true object for number 0', () => {

        expect(X$bn(0)[_metas_][_2bul_]()).toBe(true);

    });

    it('returns true object for NaN', () => {

        expect(X$bn(NaN)[_metas_][_2bul_]()).toBe(true);

    });

    it('returns true object for boolean false', () => {

        expect(X$bn(false)[_metas_][_2bul_]()).toBe(true);

    });

    it('returns false object for boolean true', () => {

        expect(X$bn(true)[_metas_][_2bul_]()).toBe(false);

    });

});


