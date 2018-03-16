const {_metas_, _2bul_} = require('../../src/symbols');
const {X$ba} = require('../../src/ops/logic');


describe('operators.logic.ba', () => {

    it('returns true object for objects with _2bul_ that return true', () => {

        const a = {[_metas_]: {[_2bul_]: () => true}};
        const b = {[_metas_]: {[_2bul_]: () => true}};

        const tobul = X$ba(a, b)[_metas_][_2bul_];

        expect(tobul()).toBe(true);

    });

    it('returns false object for objects with _2bul_ where one or both return false', () => {

        const t = {[_metas_]: {[_2bul_]: () => true}};
        const f = {[_metas_]: {[_2bul_]: () => false}};

        expect(X$ba(t, f)[_metas_][_2bul_]()).toBe(false);
        expect(X$ba(f, t)[_metas_][_2bul_]()).toBe(false);
        expect(X$ba(f, f)[_metas_][_2bul_]()).toBe(false);

    });


    it('returns true object for two truthy primitives', () => {

        expect(X$ba(1, 'asdf')[_metas_][_2bul_]()).toBe(true);
        expect(X$ba('asdf', true)[_metas_][_2bul_]()).toBe(true);

    });

    it('returns false object for one or two falsy primitives', () => {

        expect(X$ba(null)[_metas_][_2bul_]()).toBe(false);
        expect(X$ba(void 0, '')[_metas_][_2bul_]()).toBe(false);
        expect(X$ba(NaN, 1)[_metas_][_2bul_]()).toBe(false);
        expect(X$ba(0, true)[_metas_][_2bul_]()).toBe(false);
        expect(X$ba('asdf', false)[_metas_][_2bul_]()).toBe(false);

    });

});


