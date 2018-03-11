const {_metas_, _2bul_} = require('../../src/symbols');
const {X$bx} = require('../../src/ops/logic');


describe('logic.bx', () => {

    it('returns false object for objects with _2bul_ that return false', () => {

        const a = {[_metas_]: {[_2bul_]: () => false}};
        const b = {[_metas_]: {[_2bul_]: () => false}};

        const tobul = X$bx(a, b)[_metas_][_2bul_];

        expect(tobul()).toBe(false);

    });

    it('returns false object for objects with _2bul_ that return true', () => {

        const a = {[_metas_]: {[_2bul_]: () => true}};
        const b = {[_metas_]: {[_2bul_]: () => true}};

        const tobul = X$bx(a, b)[_metas_][_2bul_];

        expect(tobul()).toBe(false);

    });

    it('returns true object for objects with _2bul_ where one returns true and other false', () => {

        const t = {[_metas_]: {[_2bul_]: () => true}};
        const f = {[_metas_]: {[_2bul_]: () => false}};

        expect(X$bx(t, f)[_metas_][_2bul_]()).toBe(true);
        expect(X$bx(f, t)[_metas_][_2bul_]()).toBe(true);

    });


    it('returns false object for two falsy or two truthy primitives', () => {

        expect(X$bx(null)[_metas_][_2bul_]()).toBe(false);
        expect(X$bx(void 0, '')[_metas_][_2bul_]()).toBe(false);
        expect(X$bx(NaN, false)[_metas_][_2bul_]()).toBe(false);
        expect(X$bx(false)[_metas_][_2bul_]()).toBe(false);

        expect(X$bx(true, 1)[_metas_][_2bul_]()).toBe(false);
        expect(X$bx('asdf', true)[_metas_][_2bul_]()).toBe(false);
        expect(X$bx(Infinity, 'asdf')[_metas_][_2bul_]()).toBe(false);

    });

    it('returns true object for one truthy and other falsy primitives', () => {

        expect(X$bx(1)[_metas_][_2bul_]()).toBe(true);
        expect(X$bx(null, true)[_metas_][_2bul_]()).toBe(true);
        expect(X$bx(NaN, 'asdf')[_metas_][_2bul_]()).toBe(true);
        expect(X$bx(void 0, Infinity)[_metas_][_2bul_]()).toBe(true);

    });

});


