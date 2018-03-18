const {_metas_, _props_, _toses_, _call_} = require('../../../src/symbols');
const {X$cst2str} = require('../../../src/boot/stringers');

describe('stringers.cst2str', () => {

    const vtag = 'φ';
    const ntag = '⦰';

    it('returns a string for a simple constructor', () => {

        expect(X$cst2str($ => $)).toBe('φ($ => $)φ');

    });

    it('returns a string for a constructor', () => {

        const a = 1;
        const b = '2';

        const metas = {[_props_]: ['a', 'b']};

        const cst = function Fn($) {
            return $;
        };

        const fn = Object.assign(
            cst,
            {a, b, [_metas_]: metas},
        );
        metas[_call_] = cst;

        expect(X$cst2str(fn)).toBe(`${vtag}(Fn){a:1,b:2}${vtag}`);

    });

    it('returns a string for a constructor missing registered _call_ meta', () => {

        const a = 1;
        const b = '2';

        const metas = {[_props_]: ['a', 'b']};

        const fn = Object.assign(
            function Fn($) {
                return $;
            },
            {a, b, [_metas_]: metas},
        );

        expect(X$cst2str(fn)).toBe(`${vtag}(Fn){a:1,b:2}${vtag}`);

    });


    it('returns a string for an object using default _call_ meta', () => {

        const a = 1;
        const b = '2';

        const obj = {a, b, [_metas_]: {[_props_]: ['a', 'b']}};

        expect(X$cst2str(obj)).toBe(`${vtag}(() => $){a:1,b:2}${vtag}`);

    });

    it('returns a string for a constructor ignoring unregistered properties', () => {

        const a = 1;
        const b = '2';
        const c = null;

        const fn = Object.assign(
            function Fn($) {
                return $;
            },
            {a, b, c, [_metas_]: {[_props_]: ['a', 'b']}},
        );

        expect(X$cst2str(fn)).toBe(`${vtag}(Fn){a:1,b:2}${vtag}`);

    });

    it('returns a string for a constructor with registered _tosses_ and _call_', () => {

        const a = 1;
        const b = '2';
        const c = (function C() {
        });
        const d = (function D() {
        });

        const call = function Fn($) {
            return $;
        };

        const toses = [c, d];
        const metas = {
            [_props_]: ['a', 'b'],
            [_toses_]: toses,
            [_call_]:  call,
        };

        const fn = Object.assign(
            call,
            {a, b, c, [_metas_]: metas},
        );

        expect(X$cst2str(fn)).toBe(`D:${vtag}(Fn){a:1,b:2}${vtag}`);

    });

    it('returns nil string representation for null', () => {
        expect(X$cst2str(null)).toBe(`${ntag}(null)${ntag}`);
    });

    it('returns nil string representation for undefined', () => {
        expect(X$cst2str()).toBe(`${ntag}(undefined)${ntag}`);
    });

});


