const {_metas_, _2bul_} = require('../../src/symbols');
const {X$bq} = require('../../src/ops/logic');


describe('logic.bx', () => {

    it('returns true object for objects with _2bul_ that return false', () => {

        const a = {[_metas_]: {[_2bul_]: () => false}};
        const b = {[_metas_]: {[_2bul_]: () => false}};

        const tobul = X$bq(a, b)[_metas_][_2bul_];

        expect(tobul()).toBe(true);

    });

    it('returns true object for objects with _2bul_ that return true', () => {

        const a = {[_metas_]: {[_2bul_]: () => true}};
        const b = {[_metas_]: {[_2bul_]: () => true}};

        const tobul = X$bq(a, b)[_metas_][_2bul_];

        expect(tobul()).toBe(true);

    });

    it('returns false object for objects with _2bul_ where one returns true and other false', () => {

        const t = {[_metas_]: {[_2bul_]: () => true}};
        const f = {[_metas_]: {[_2bul_]: () => false}};

        expect(X$bq(t, f)[_metas_][_2bul_]()).toBe(false);
        expect(X$bq(f, t)[_metas_][_2bul_]()).toBe(false);

    });


    it('returns true object for two falsy or two truthy primitives', () => {

        expect(X$bq(null)[_metas_][_2bul_]()).toBe(true);
        expect(X$bq(void 0, '')[_metas_][_2bul_]()).toBe(true);
        expect(X$bq(NaN, false)[_metas_][_2bul_]()).toBe(true);
        expect(X$bq(false)[_metas_][_2bul_]()).toBe(true);

        expect(X$bq(true, 1)[_metas_][_2bul_]()).toBe(true);
        expect(X$bq('asdf', true)[_metas_][_2bul_]()).toBe(true);
        expect(X$bq(Infinity, 'asdf')[_metas_][_2bul_]()).toBe(true);

    });

    it('returns false object for one truthy and other falsy primitives', () => {

        expect(X$bq(1)[_metas_][_2bul_]()).toBe(false);
        expect(X$bq(null, true)[_metas_][_2bul_]()).toBe(false);
        expect(X$bq(NaN, 'asdf')[_metas_][_2bul_]()).toBe(false);
        expect(X$bq(void 0, Infinity)[_metas_][_2bul_]()).toBe(false);

    });

});


