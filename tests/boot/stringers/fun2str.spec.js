const {_metas_, _props_, _toses_, _call_} = require('../../../src/symbols');
const {X$fun2str} = require('../../../src/boot/stringers');

describe('stringers.fun2str', () => {

    const vtag = '𝜆';
    const ntag = '⦰';

    it('returns a string for a simple function', () => {

        expect(X$fun2str($ => $)).toBe('𝜆($ => $)𝜆');

    });

    it('returns a string for a function', () => {

        const a = 1;
        const b = '2';

        const metas = {[_props_]: ['a', 'b']};

        const fn = Object.assign($ => $, {a, b, [_metas_]: metas});
        metas[_call_] = fn;

        expect(X$fun2str(fn)).toBe(`${vtag}($ => $){a:1,b:2}${vtag}`);

    });

    it('returns a string for a function missing registered _call_ meta', () => {

        const a = 1;
        const b = '2';

        const metas = {[_props_]: ['a', 'b']};

        const fn = Object.assign($ => $, {a, b, [_metas_]: metas});

        expect(X$fun2str(fn)).toBe(`${vtag}($ => $){a:1,b:2}${vtag}`);

    });


    it('returns a string for an object using default _call_ meta', () => {

        const a = 1;
        const b = '2';

        const obj = {a, b, [_metas_]: {[_props_]: ['a', 'b']}};

        expect(X$fun2str(obj)).toBe(`${vtag}(K){a:1,b:2}${vtag}`);

    });

    it('returns a string for a function ignoring unregistered properties', () => {

        const a = 1;
        const b = '2';
        const c = null;

        const fn = {a, b, c, [_metas_]: {[_props_]: ['a', 'b']}};

        expect(X$fun2str(fn)).toBe(`${vtag}(K){a:1,b:2}${vtag}`);

    });

    it('returns a string for an object with registered _tosses_ and _call_', () => {

        const a = 1;
        const b = '2';
        const c = (function C() {
        });
        const d = (function D() {
        });

        const toses = [c, d];
        const metas = {
            [_props_]: ['a', 'b'],
            [_toses_]: toses,
            [_call_]:  $ => $ + $,
        };

        const obj = {a, b, c, [_metas_]: metas};

        expect(X$fun2str(obj)).toBe(`D:${vtag}([_call_]){a:1,b:2}${vtag}`);

    });

    it('returns nil string representation for null', () => {

        expect(X$fun2str(null)).toBe(`${ntag}(null)${ntag}`);

    });

    it('returns nil string representation for undefined', () => {

        expect(X$fun2str()).toBe(`${ntag}(undefined)${ntag}`);

    });

});


