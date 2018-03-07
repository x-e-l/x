const {_metas_, _props_, _toses_} = require('../../src/symbols');
const {X$obj2str} = require('../../src/boot/stringers');

describe('stringers.obj2str', () => {

    const vtag = '𝜔';
    const ntag = '∅';

    it('returns a string for an object', () => {

        const a = 1;
        const b = '2';

        const obj = {a, b, [_metas_]: {[_props_]: ['a', 'b']}};

        expect(X$obj2str(obj)).toBe(`${vtag}{a:1,b:2}${vtag}`);

    });

    it('returns a string for an object ignoring unregistered properties', () => {

        const a = 1;
        const b = '2';
        const c = null;

        const obj = {a, b, c, [_metas_]: {[_props_]: ['a', 'b']}};

        expect(X$obj2str(obj)).toBe(`${vtag}{a:1,b:2}${vtag}`);

    });

    it('returns a string for an object with tosses', () => {

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
        };

        const obj = {a, b, [_metas_]: metas};

        expect(X$obj2str(obj)).toBe(`D:${vtag}{a:1,b:2}${vtag}`);

    });

    it('returns nil string representation for null', () => {
        expect(X$obj2str(null)).toBe(`${ntag}(null)${ntag}`);
    });

    it('returns nil string representation for undefined', () => {
        expect(X$obj2str()).toBe(`${ntag}(undefined)${ntag}`);
    });

});


