const {_metas_, _2bul_} = require('../../src/symbols');
const {X$bo} = require('../../src/ops/logic');


describe('operators.logic.bo', () => {

    it('returns false object for objects with _2bul_ that return false', () => {

        const a = {[_metas_]: {[_2bul_]: () => false}};
        const b = {[_metas_]: {[_2bul_]: () => false}};

        const tobul = X$bo(a, b)[_metas_][_2bul_];

        expect(tobul()).toBe(false);

    });

    it('returns true object for objects with _2bul_ where one or both return true', () => {

        const t = {[_metas_]: {[_2bul_]: () => true}};
        const f = {[_metas_]: {[_2bul_]: () => false}};

        expect(X$bo(t, f)[_metas_][_2bul_]()).toBe(true);
        expect(X$bo(f, t)[_metas_][_2bul_]()).toBe(true);
        expect(X$bo(t, t)[_metas_][_2bul_]()).toBe(true);

    });


    it('returns false object for two falsy primitives', () => {

        expect(X$bo(null)[_metas_][_2bul_]()).toBe(false);
        expect(X$bo(void 0, '')[_metas_][_2bul_]()).toBe(false);
        expect(X$bo(NaN, false)[_metas_][_2bul_]()).toBe(false);
        expect(X$bo(false)[_metas_][_2bul_]()).toBe(false);

    });

    it('returns true object for one or two truthy primitives', () => {

        expect(X$bo(1)[_metas_][_2bul_]()).toBe(true);
        expect(X$bo(null, true)[_metas_][_2bul_]()).toBe(true);
        expect(X$bo(NaN, 'asdf')[_metas_][_2bul_]()).toBe(true);
        expect(X$bo(void 0, Infinity)[_metas_][_2bul_]()).toBe(true);

    });

});


